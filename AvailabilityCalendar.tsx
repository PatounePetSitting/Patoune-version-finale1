import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface AvailabilityCalendarProps {
  onSelectDate: (dateStr: string) => void;
  language: 'fr' | 'en';
  translations: any;
}

export default function AvailabilityCalendar({ onSelectDate, language, translations }: AvailabilityCalendarProps) {
  // We starts with May 2026 as the active view based on actual simulated local time: May 24, 2026
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(4); // 0-indexed: 4 is May, 5 is June

  const monthNames = {
    fr: [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ],
    en: [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ]
  };

  const dayLabels = {
    fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  };

  // Move to next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  // Move to previous month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  // Calculate days in the current month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Calculate the first weekday of the month (0 for Sunday, 1 for Monday...)
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    // Adjust so range starts on Monday (0: Sun -> 6: Sat adjusted to 0: Mon -> 6: Sun)
    return day === 0 ? 6 : day - 1;
  };

  const totalDays = getDaysInMonth(currentYear, currentMonth);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

  // Define availability logic for 2026-05 and 2026-06
  const getDateStatus = (dayNum: number): 'available' | 'limited' | 'booked' | 'past' => {
    // Current simulated date is 2026-05-24
    if (currentYear < 2026 || (currentYear === 2026 && currentMonth < 4)) {
      return 'past';
    }
    if (currentYear === 2026 && currentMonth === 4 && dayNum < 24) {
      return 'past';
    }

    // May 24 is today - let's mark as booked / start of trip
    if (currentYear === 2026 && currentMonth === 4) {
      if (dayNum === 24 || dayNum === 25 || dayNum === 26) return 'booked';
      if (dayNum >= 27 && dayNum <= 30) return 'available';
      if (dayNum === 31) return 'limited';
    }

    // June 2026
    if (currentYear === 2026 && currentMonth === 5) {
      if (dayNum >= 1 && dayNum <= 6) return 'available';
      if (dayNum >= 7 && dayNum <= 10) return 'booked'; // Monaco luxury Grand Prix periods
      if (dayNum === 14 || dayNum === 21) return 'limited';
      return 'available';
    }

    // Future dates
    if (dayNum % 7 === 0 || dayNum % 11 === 0) {
      return 'limited';
    }
    if (dayNum % 5 === 0) {
      return 'booked';
    }
    return 'available';
  };

  const handleCellClick = (dayNum: number, status: string) => {
    if (status !== 'available' && status !== 'limited') return;
    
    // Format: YYYY-MM-DD
    const paddedMonth = String(currentMonth + 1).padStart(2, '0');
    const paddedDay = String(dayNum).padStart(2, '0');
    const dateStr = `${currentYear}-${paddedMonth}-${paddedDay}`;
    onSelectDate(dateStr);
  };

  // Render calendar grid days
  const calendarCells = [];
  
  // Empty spaces for previous month's offset
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="bg-sand-50/20 border border-amber-100/10 rounded-lg aspect-square"></div>);
  }

  // Actual days
  for (let day = 1; day <= totalDays; day++) {
    const status = getDateStatus(day);
    let classes = "";
    let indicatorText = "";
    
    switch (status) {
      case 'past':
        classes = "bg-stone-150 text-stone-400 cursor-not-allowed opacity-40 line-through";
        break;
      case 'booked':
        classes = "bg-red-50 hover:bg-red-100/80 border-red-200 text-red-650 cursor-not-allowed";
        indicatorText = translations[language].calFull;
        break;
      case 'limited':
        classes = "bg-riviera-gold/15 hover:bg-riviera-gold/25 border-riviera-gold/40 text-charcoal-luxe cursor-pointer scale-100 hover:scale-[1.03] transition-transform duration-200 shadow-sm";
        indicatorText = translations[language].calLimited;
        break;
      case 'available':
        classes = "bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800 cursor-pointer scale-100 hover:scale-[1.03] transition-transform duration-200 shadow-sm";
        indicatorText = translations[language].calAvailable;
        break;
    }

    calendarCells.push(
      <div
        key={`day-${day}`}
        onClick={() => handleCellClick(day, status)}
        className={`p-2 border rounded-lg aspect-square flex flex-col justify-between items-start transition-all ${classes}`}
        title={status === 'available' || status === 'limited' ? (language === 'fr' ? "Enregistrer pour cette date !" : "Pre-select this date !") : undefined}
      >
        <span className="font-semibold text-sm md:text-base">{day}</span>
        {indicatorText && (
          <span className="hidden sm:inline-block text-[10px] font-medium uppercase tracking-wider px-1 py-0.5 rounded bg-white/70">
            {indicatorText}
          </span>
        )}
        {/* Mobile dots */}
        <span className={`sm:hidden h-1.5 w-1.5 rounded-full ${status === 'available' ? 'bg-emerald-500' : status === 'limited' ? 'bg-riviera-gold' : status === 'booked' ? 'bg-red-400' : 'bg-transparent'}`}></span>
      </div>
    );
  }

  return (
    <div id="calendar-widget" className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
      {/* Month selection header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-serif font-extrabold text-charcoal-luxe flex items-center gap-2">
          <CalendarIcon className="h-6 w-6 text-riviera-azure" />
          <span>{monthNames[language][currentMonth]} {currentYear}</span>
        </h3>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevMonth}
            className="p-2 text-stone-600 hover:text-riviera-azure hover:bg-riviera-light rounded-xl transition-all border border-stone-100 hover:border-riviera-azure/20 cursor-pointer"
            aria-label={translations[language].calMonthPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNextMonth}
            className="p-2 text-stone-600 hover:text-riviera-azure hover:bg-riviera-light rounded-xl transition-all border border-stone-100 hover:border-riviera-azure/20 cursor-pointer"
            aria-label={translations[language].calMonthNext}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Grid Day Labels */}
      <div className="grid grid-cols-7 gap-2 mb-3 text-center">
        {dayLabels[language].map((lbl, idx) => (
          <div key={idx} className="font-mono text-xs font-semibold text-stone-500 uppercase py-1">
            {lbl}
          </div>
        ))}
      </div>

      {/* Month Days */}
      <div className="grid grid-cols-7 gap-2">
        {calendarCells}
      </div>

      {/* Legend & Help Info */}
      <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600 justify-center">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-emerald-50 border border-emerald-300 block"></span>
            <span>{translations[language].calAvailable}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-riviera-gold/15 border border-riviera-gold/40 block"></span>
            <span>{translations[language].calLimited}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-red-50 border border-red-200 block"></span>
            <span>{translations[language].calFull}</span>
          </div>
        </div>

        <p className="text-xs text-stone-500 font-mono italic text-center md:text-right w-full md:w-auto">
          {language === 'fr' 
            ? "💡 Cliquez sur un jour disponible pour remplir directement les dates de réservation !" 
            : "💡 Click an available day to pre-fill the start date in the book form!"}
        </p>
      </div>
    </div>
  );
}
