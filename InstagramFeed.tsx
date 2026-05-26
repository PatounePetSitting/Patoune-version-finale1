import { Instagram, ExternalLink, Compass, ShieldCheck, Heart } from 'lucide-react';

interface InstagramFeedProps {
  language: 'fr' | 'en';
}

export default function InstagramFeed({ language }: InstagramFeedProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Polished Instagram Profile & Interaction Block */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-150 shadow-md flex flex-col md:flex-row items-center gap-8 md:gap-11 text-center md:text-left transition-all hover:shadow-lg">
        {/* Profile Avatar with dynamic active story ring */}
        <div className="relative shrink-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-full p-1 -m-1 animate-pulse"></div>
          <div className="relative h-24 w-24 md:h-28 md:w-28 bg-white rounded-full p-1">
            <div className="h-full w-full bg-stone-900 rounded-full flex items-center justify-center text-white text-3xl font-serif font-black shadow-inner">
              🐾
            </div>
          </div>
          {/* Live indicator badge */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-[9px] font-bold font-mono px-3 py-1 rounded-full border-2 border-white uppercase shadow-md whitespace-nowrap tracking-wider">
            @patounenice
          </span>
        </div>

        {/* Profile Details & Quick Navigation */}
        <div className="flex-grow space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <h3 className="text-2xl font-black text-stone-900 flex items-center gap-2 font-sans tracking-tight">
              <span>patounenice</span>
              <span className="inline-flex bg-sky-500 text-white p-0.5 rounded-full" title="Compte officiel vérifié">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://www.instagram.com/patounenice"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 hover:opacity-95 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Instagram className="h-4 w-4" />
                <span>{language === 'fr' ? "Visiter mon profil" : "Visit our live profile"}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Luxury Biography Details */}
          <div className="text-stone-650 space-y-3 font-sans text-xs md:text-sm leading-relaxed">
            <span className="block font-extrabold text-stone-850 text-base">
              {language === 'fr' ? "Patoune | Pet Sitting d'Excellence" : "Patoune | Elite French Riviera Sitters"} 🌴🐾
            </span>
            <p className="max-w-2xl text-stone-600 space-y-1.5">
              <span>✈️ {language === 'fr' ? "Découvrez notre quotidien avec de magnifiques photos, vidéos HD et stories exclusives en direct lors de chaque garde." : "Experience our premium care with daily beautiful photos, high-definition videos, and exclusive live story updates."}</span>
              <br />
              <span>📍 {language === 'fr' ? "Nice • Cannes • Monaco — Palaces, Yachting & Villas d'exception." : "Nice • Cannes • Monaco — Selected palaces, luxury yachts, and private estates."}</span>
            </p>
          </div>

          {/* Social highlight features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-lg">
            <div className="flex items-center gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-150">
              <Compass className="h-4 w-4 text-pink-600 shrink-0" />
              <span className="text-[11px] font-medium text-stone-700">
                {language === 'fr' ? "Stories quotidiennes en direct" : "Daily interactive live stories"}
              </span>
            </div>
            <div className="flex items-center gap-2.5 bg-stone-50 p-3 rounded-xl border border-stone-150">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="text-[11px] font-medium text-stone-700">
                {language === 'fr' ? "Compte officiel certifié" : "Verified official channel"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
