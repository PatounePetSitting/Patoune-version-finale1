import { useState, useRef } from 'react';
import { BLOG_POSTS, TESTIMONIALS, PRICING_TIERS } from './data';
import { translations } from './translations';
import { BlogPost } from './types';
import PricingCards from './components/PricingCards';
import Testimonials from './components/Testimonials';
import ContactVip from './components/ContactVip';
import BlogSection from './components/BlogSection';
import ConciergeSection from './components/ConciergeSection';
import InstagramFeed from './components/InstagramFeed';
import AboutSophie from './components/AboutSophie';
import { Sparkles, Calendar, Menu, X, Landmark, Globe, Heart, Phone, Award, ShieldAlert, Instagram } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle language translation dictionary
  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Click tier package inside pricing card -> scrolls smooth
  const handleSelectPlanFromPricing = (planName: string) => {
    const element = document.getElementById('reservation-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add customized blog draft locally
  const handleAddNewPost = (newPost: BlogPost) => {
    setBlogPosts(prev => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-villa-cream text-stone-750 font-sans selection:bg-riviera-sand selection:text-riviera-deep leading-normal scroll-smooth">
      {/* Upper Top Minimal Announcement Bar */}
      <div className="bg-riviera-deep text-riviera-light py-2.5 px-4 text-center text-[11px] md:text-xs font-mono tracking-widest uppercase flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 border-b border-black/10">
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-riviera-gold animate-pulse"></span>
          <span className="font-semibold">
            {language === 'fr' 
              ? "Service de garde d'excellence - Côte d'Azur (Nice, Cannes, Monaco)" 
              : "Prestige pet sitting service - French Riviera (Nice, Cannes, Monaco)"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-white/30">|</span>
          <a href="tel:+33763208713" className="text-riviera-gold font-bold hover:underline flex items-center gap-1.5 text-xs">
            <Phone className="h-3.5 w-3.5 text-riviera-gold shrink-0 animate-bounce" />
            <span>+33 (0)7 63 20 87 13</span>
          </a>
        </div>
      </div>

      {/* Main Premium Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-150/80 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollToSection('hero-section')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <span className="h-10 w-10 bg-riviera-azure rounded-2xl flex items-center justify-center text-white shadow shadow-riviera-azure/20 group-hover:bg-riviera-gold group-hover:scale-105 transition-all duration-300">
              <Heart className="h-5.5 w-5.5 fill-current text-white" />
            </span>
            <div>
              <h1 className="text-xl font-serif font-black text-charcoal-luxe tracking-tight leading-none">
                {translations[language].brand}
              </h1>
              <span className="text-[10px] text-riviera-gold tracking-widest font-bold font-mono uppercase block mt-0.5">
                Nice • Cannes • Monaco
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link TABS - Enhanced visibility: text-stone-900, larger font-bold & gorgeous prominent Pro button */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-black tracking-wider uppercase text-stone-900">
            <button onClick={() => scrollToSection('hero-section')} className="hover:text-riviera-azure transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navHome}
            </button>
            <button onClick={() => scrollToSection('about-section')} className="hover:text-riviera-azure transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navAbout}
            </button>
            <button onClick={() => scrollToSection('pricing-section')} className="hover:text-riviera-azure transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navServices}
            </button>
            <button onClick={() => scrollToSection('instagram-section')} className="hover:text-pink-600 transition-all duration-250 cursor-pointer flex items-center gap-1 hover:scale-105">
              <Instagram className="h-3.5 w-3.5 text-pink-600 shrink-0" />
              <span>{translations[language].navInstagram}</span>
            </button>
            {/* Extremely bold, prominent & attractive gold pill button for Espace Pro (Tarifs Hôtels & Yachts) */}
            <button 
              onClick={() => scrollToSection('concierge-section')} 
              className="bg-stone-900 hover:bg-stone-950 text-riviera-gold font-mono font-black py-2.5 px-4 rounded-xl shadow-md border-2 border-riviera-gold hover:scale-[1.05] transition-all cursor-pointer flex items-center gap-2 text-[11px]"
              title={language === 'fr' ? "Accéder directement aux tarifs professionnels" : "Direct access to professional rates"}
            >
              <span className="inline-block w-2 w-2 rounded-full bg-riviera-gold animate-pulse"></span>
              <span>{translations[language].navConcierge}</span>
            </button>
            <button onClick={() => scrollToSection('blog-section')} className="hover:text-riviera-azure transition-all duration-250 cursor-pointer hover:underline decoration-2 underline-offset-4">
              {translations[language].navBlog}
            </button>
          </nav>

          {/* Actions: Language Toggle & Quick Reservation Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+33763208713" 
              className="px-4 py-2 border-2 border-riviera-gold bg-stone-50 hover:bg-stone-100 rounded-xl transition-all text-xs font-bold font-mono text-stone-900 flex items-center gap-2 cursor-pointer shadow-xs"
              title={language === 'fr' ? "Appeler directement" : "Call directly"}
            >
              <Phone className="h-3.5 w-3.5 text-riviera-azure animate-pulse" />
              <span>+33 (0)7 63 20 87 13</span>
            </a>

            <button
              onClick={toggleLanguage}
              className="px-3.5 py-2 border border-stone-200 rounded-xl hover:bg-riviera-light hover:border-riviera-azure/50 transition-colors text-xs font-bold font-mono tracking-wider text-stone-700 flex items-center gap-1.5 cursor-pointer"
              title={language === 'fr' ? "Switch to English" : "Passer en Français"}
            >
              <Globe className="h-3.5 w-3.5 text-riviera-azure" />
              <span>{translations[language].langCode}</span>
            </button>

            <button
              onClick={() => scrollToSection('reservation-section')}
              className="px-5 py-2.5 bg-riviera-azure hover:bg-riviera-deep text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow shadow-riviera-azure/20 transition-all cursor-pointer hover:shadow-lg active:translate-y-0.5"
            >
              {translations[language].navBooking}
            </button>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 border border-stone-200 rounded-xl hover:bg-riviera-light transition-colors text-xs font-bold font-mono text-stone-700 flex items-center gap-1"
            >
              <Globe className="h-3.5 w-3.5 text-riviera-azure" />
              <span>{translations[language].langCode}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:bg-stone-50 rounded-xl transition-colors outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer Panels */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-150 bg-white/95 backdrop-blur-md p-4 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <a
              href="tel:+33763208713"
              className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-extrabold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 text-white animate-pulse" />
              <span>+33 (0)7 63 20 87 13</span>
            </a>

            <button
              onClick={() => scrollToSection('hero-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all"
            >
              {translations[language].navHome}
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all"
            >
              {translations[language].navAbout}
            </button>
            <button
              onClick={() => scrollToSection('pricing-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all"
            >
              {translations[language].navServices}
            </button>
            <button
              onClick={() => scrollToSection('instagram-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all flex items-center gap-1.5"
            >
              <Instagram className="h-4 w-4 text-pink-600 shrink-0" />
              <span>{translations[language].navInstagram}</span>
            </button>
            {/* Highly highlighted Espace Pro button in Mobile Drawer */}
            <button
              onClick={() => { scrollToSection('concierge-section'); setMobileMenuOpen(false); }}
              className="block w-full text-center py-3.5 px-4 bg-stone-900 hover:bg-stone-950 text-riviera-gold font-mono font-black rounded-xl border-2 border-riviera-gold transition-all text-xs flex items-center justify-center gap-2.5 shadow-md"
            >
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-riviera-gold animate-pulse"></span>
              <span>{translations[language].navConcierge}</span>
            </button>
            <button
              onClick={() => scrollToSection('blog-section')}
              className="block w-full text-left py-2 px-3 text-stone-700 hover:bg-riviera-light hover:text-riviera-azure rounded-xl font-bold transition-all"
            >
              {translations[language].navBlog}
            </button>
            <button
              onClick={() => scrollToSection('reservation-section')}
              className="block w-full text-center py-3 bg-riviera-azure text-white rounded-xl font-extrabold transition-all shadow shadow-riviera-azure/20"
            >
              {translations[language].navBooking}
            </button>
          </div>
        )}
      </header>

      {/* Hero Section Banner layout */}
      <section id="hero-section" className="relative bg-white pt-10 pb-20 md:py-24 overflow-hidden border-b border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero texts */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-riviera-light border border-riviera-azure/20 px-4 py-1.75 rounded-full text-riviera-azure font-semibold text-xs tracking-wider uppercase shadow-sm">
              <Sparkles className="h-4 w-4 text-riviera-gold animate-pulse" />
              <span className="font-bold">{translations[language].slogan}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal-luxe leading-[1.15] tracking-tight">
              {translations[language].heroTitle.indexOf(' : ') !== -1 ? (
                translations[language].heroTitle.split(' : ').map((part: string, idx: number) => (
                  <span key={idx} className={idx === 1 ? "italic text-riviera-azure block font-medium" : "block font-extrabold"}>
                    {part}
                  </span>
                ))
              ) : (
                <span className="block font-extrabold">
                  {translations[language].heroTitle}
                </span>
              )}
            </h2>

            <p className="text-stone-600 text-base md:text-lg max-w-xl leading-relaxed font-sans">
              {translations[language].heroSubtitle}
            </p>

            {/* Incredibly Prominent Direct Call Banner */}
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border-2 border-riviera-gold p-6 rounded-3xl space-y-3.5 shadow-md max-w-lg relative overflow-hidden group hover:shadow-lg transition-all transform hover:-translate-y-0.5 duration-300">
              <div className="absolute -right-3 -top-3 w-16 h-16 bg-riviera-gold/20 rounded-full blur-xl"></div>
              <div className="flex items-center gap-4.5">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-500/20">
                  <Phone className="h-7 w-7 text-white animate-pulse" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-widest font-black text-rose-600 font-mono">
                    {language === 'fr' ? "Appel direct, SMS ou WhatsApp — 7j/7" : "Direct line — Calls, SMS & WhatsApp 7d/7"}
                  </span>
                  <a 
                    href="tel:+33763208713" 
                    className="block text-2.5xl sm:text-3.5xl font-mono font-black text-charcoal-luxe tracking-tight leading-none hover:text-riviera-azure transition-colors mt-1.5"
                  >
                    +33 (0)7 63 20 87 13
                  </a>
                </div>
              </div>
              <div className="text-xs text-stone-600 font-medium pl-1 leading-relaxed border-l-2 border-riviera-gold">
                {language === 'fr' 
                  ? "Des questions ou réservations immédiates ? Contactez-nous à tout moment, réponse rapide garantie."
                  : "Have questions or prompt requests? Contact us instantly, fast and caring response guaranteed."}
              </div>
            </div>

            {/* Service local highlight icons */}
            <div className="grid grid-cols-3 gap-2 py-2 max-w-md font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest text-center">
              <div className="bg-stone-50 p-2 border border-stone-150 rounded-xl flex flex-col items-center gap-1">
                <Landmark className="h-4 w-4 text-riviera-azure" />
                <span>MONACO</span>
              </div>
              <div className="bg-stone-50 p-2 border border-stone-150 rounded-xl flex flex-col items-center gap-1">
                <Award className="h-4 w-4 text-riviera-gold" />
                <span>NICE 06</span>
              </div>
              <div className="bg-stone-50 p-2 border border-stone-150 rounded-xl flex flex-col items-center gap-1">
                <Sparkles className="h-4 w-4 text-riviera-azure" />
                <span>CANNES</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4.5 pt-2">
              <button
                onClick={() => scrollToSection('reservation-section')}
                className="px-8 py-4 bg-riviera-azure hover:bg-riviera-deep text-white font-extrabold rounded-2xl transition-all shadow-lg shadow-riviera-azure/25 text-center cursor-pointer hover:shadow-xl active:translate-y-0.5 hover:scale-[1.02]"
              >
                {translations[language].heroCtas}
              </button>
              {/* Added B2B direct Espace Pro link button inside the Hero as requested */}
              <button
                onClick={() => scrollToSection('concierge-section')}
                className="px-6 py-4 bg-stone-900 hover:bg-stone-950 text-riviera-gold font-mono font-black rounded-2xl border-2 border-riviera-gold shadow-md text-xs tracking-wider uppercase text-center transition-all cursor-pointer hover:scale-[1.03] flex items-center justify-center gap-2"
              >
                💼 {language === 'fr' ? "Tarifs Hôtels / Yachts (Pro)" : "Pro rates (Hotel & Yacht)"}
              </button>
            </div>

            {/* Quick stats panels */}
            <div className="pt-8 border-t border-stone-100 grid grid-cols-3 gap-4">
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-black text-riviera-azure">50+</span>
                <span className="text-xs text-stone-500">{translations[language].statClients}</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-black text-riviera-azure">100</span>
                <span className="text-xs text-stone-500">{translations[language].statVisits}</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-serif font-black text-riviera-azure">99%</span>
                <span className="text-xs text-stone-500">{translations[language].statReviews}</span>
              </div>
            </div>
          </div>

          {/* Right Hero: Prestigious Pure-CSS Crest Board instead of photographic images to keep the site extremely fast and clean */}
          <div className="lg:col-span-6 space-y-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl group bg-gradient-to-br from-stone-950 via-charcoal-luxe to-stone-900 h-[280px] sm:h-[340px] flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-[1.01]">
              {/* Floating pure gold luxury crest */}
              <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-amber-400 via-riviera-gold to-yellow-300 text-charcoal-luxe flex items-center justify-center font-serif text-3xl font-black shadow-lg shadow-riviera-gold/15 mb-4 group-hover:scale-105 transition-all duration-500">
                ⚜
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white uppercase text-center">
                {translations[language].brand}
              </h3>
              
              <p className="text-[10px] text-riviera-gold tracking-widest font-mono font-extrabold uppercase mt-2.5">
                Nice • Cannes • Monaco
              </p>
              
              <p className="text-stone-400 text-xs font-sans max-w-sm leading-relaxed mt-4">
                {language === 'fr' 
                  ? "Un service hôtelier 5 étoiles d'exception, direct et en totale complicité avec vos fidèles compagnons."
                  : "A bespoke 5-star hotel service standard, direct and structured with your companion's absolute trust."}
              </p>

              {/* Floating luxury glass lens badge */}
              <div className="absolute top-4 left-4 right-4 bg-stone-900/60 backdrop-blur-sm text-white/90 border border-white/10 p-2.5 rounded-xl flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2">
                  <span className="p-1 px-1.5 bg-white/10 text-white rounded font-mono font-black text-[9px] uppercase">
                    Excellence
                  </span>
                  <span className="text-[10px] font-medium font-sans tracking-tight">
                    {language === 'fr' ? "Rigueur d'école et disponibilité totale" : "Premium care and complete availability"}
                  </span>
                </div>
                <span className="text-xs">✨</span>
              </div>

              {/* Secure service badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-stone-900 px-2.5 py-1 rounded-lg text-[9px] font-mono tracking-wider uppercase font-black shadow border border-stone-200">
                🔒 100% SECURE
              </div>
            </div>

            {/* VIP Information Showcase Box */}
            <div className="relative bg-gradient-to-br from-charcoal-luxe to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-800/80 font-sans space-y-5">
              
              {/* Title Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-riviera-gold text-charcoal-luxe text-[10px] uppercase tracking-widest font-mono font-black rounded-lg">
                    {language === 'fr' ? "100% Sans Lag & Ultra Rapide" : "100% Lag-Free & High-End"}
                  </span>
                  <span className="inline-flex bg-white/10 text-white rounded-full p-0.5 text-[10px] leading-none">✨</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white tracking-tight">
                  {language === 'fr' ? "Garde de Confiance Directe" : "Elite Caring Connection"}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {language === 'fr' 
                    ? "Aucune photo lourde à charger. Toutes nos énergies sont dédiées à l'excellence en direct avec vous."
                    : "No heavy media files to slow down your query. Clean, direct connection focused entirely on your companion."}
                </p>
              </div>

              {/* VIP Giant Highlighted Contact Box */}
              <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-4">
                <div className="space-y-1">
                  <span className="block text-[10px] text-stone-300 font-mono tracking-wider uppercase">
                    {language === 'fr' ? "Notre E-mail Principal" : "Our Direct Email"}
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3.5xl font-mono font-black text-riviera-gold break-all tracking-tight leading-normal select-all">
                    contact@patounecoteazur.fr
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a 
                    href="mailto:contact@patounecoteazur.fr?subject=Demande%20de%20Garde"
                    className="flex-1 py-3 px-5 bg-riviera-azure hover:bg-riviera-azure/95 text-white text-xs font-black tracking-wider uppercase rounded-xl shadow-md text-center transition-all hover:scale-[1.02] active:scale-95"
                  >
                    {language === 'fr' ? "✉️ Écrire un e-mail" : "✉️ Send an Email"}
                  </a>
                  <a 
                    href="tel:+33763208713"
                    className="flex-1 py-3 px-5 bg-white hover:bg-stone-50 text-stone-950 text-xs font-black tracking-wider uppercase rounded-xl shadow-md text-center transition-all hover:scale-[1.02] active:scale-95 border border-stone-200"
                  >
                    {language === 'fr' ? "📞 Appeler au téléphone" : "📞 Call direct line"}
                  </a>
                </div>
              </div>

              {/* Guarantees or areas checkmarks list */}
              <div className="space-y-3 pt-2 border-t border-white/10 text-stone-200 text-xs">
                <div className="flex items-start gap-2.5">
                  <span className="text-riviera-gold shrink-0">✔</span>
                  <p>
                    <strong>{language === 'fr' ? "Sophie d'Or" : "Sophie Premium Care"} :</strong>{" "}
                    {language === 'fr' ? "Réponse en moins de 2 heures, contact amical et courtois" : "Guaranteed callback under 2h, friendly style"}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-riviera-gold shrink-0">✔</span>
                  <p>
                    <strong>{language === 'fr' ? "Couverture complète" : "Full coverage areas"} :</strong>{" "}
                    {language === 'fr' ? "Nice, Cannes, Antibes, Monaco, Villefranche-sur-Mer" : "Nice, Cannes, Antibes, Monaco, Villefranche"}
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-riviera-gold shrink-0">✔</span>
                  <p>
                    <strong>{language === 'fr' ? "Rapports 100% humains" : "100% human-verified updates"} :</strong>{" "}
                    {language === 'fr' ? "Messages écrits et audios quotidiens personnels sans fioritures" : "Personal audio and written daily check-ins with cozy details"}
                  </p>
                </div>
              </div>

            </div>
            {/* Absolute background warm design blobs to enrich visual appeal */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-72 bg-riviera-azure/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-riviera-gold/10 rounded-full blur-2xl"></div>
          </div>

        </div>
      </section>

      {/* Qui suis-je ? (About Sophie) section */}
      <section id="about-section" className="py-20 md:py-24 bg-stone-50 border-b border-stone-250/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSophie language={language} />
        </div>
      </section>

      {/* Pricing / Tiers section */}
      <section id="pricing-section" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-150/60 space-y-16">
        <PricingCards
          tiers={PRICING_TIERS}
          onSelectTier={handleSelectPlanFromPricing}
          language={language}
          translations={translations}
        />
        
        {/* Luxury Concierge & Palace Hotels partnerships section */}
        <div id="concierge-section" className="pt-8">
          <ConciergeSection
            language={language}
            onSelectFormula={handleSelectPlanFromPricing}
          />
        </div>
      </section>

      {/* Instagram Feed / Publications section */}
      <section id="instagram-section" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 rounded-full border border-pink-150/50 text-[11px] font-mono font-bold tracking-wider text-pink-600 uppercase">
              <Instagram className="h-3.5 w-3.5 text-pink-600" />
              <span>@patounenice</span>
            </div>
            <h2 className="text-3.5xl font-serif font-extrabold text-charcoal-luxe tracking-tight">
              {language === 'fr' ? "Notre Quotidien sur Instagram" : "Our Daily Life on Instagram"}
            </h2>
            <p className="text-stone-600 text-sm md:text-base font-sans">
              {language === 'fr'
                ? "Suivez en direct les aventures de nos adorables pensionnaires à Nice, Cannes et Monaco."
                : "Follow the live stories, daily achievements, and play sessions of our adorable guests."}
            </p>
          </div>

          <InstagramFeed
            language={language}
          />
        </div>
      </section>

      {/* Fake customer reviews section */}
      <section id="reviews-section" className="py-20 md:py-28 bg-white border-b border-stone-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials
            testimonials={TESTIMONIALS}
            language={language}
            translations={translations}
          />
        </div>
      </section>

      {/* Blog & advice section */}
      <section id="blog-section" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <BlogSection
          posts={blogPosts}
          onAddPost={handleAddNewPost}
          language={language}
          translations={translations}
        />
      </section>

      {/* Direct Contact area */}
      <section id="reservation-section" className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactVip language={language} />
        </div>
      </section>

      {/* Real Footer with Bilingual navigation */}
      <footer className="bg-charcoal-luxe text-white pt-16 pb-12 border-t border-stone-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 bg-riviera-azure rounded-xl flex items-center justify-center text-white">
                <Heart className="h-4 w-4 fill-current text-white" />
              </span>
              <span className="text-lg font-serif font-black tracking-tight">{translations[language].brand}</span>
            </div>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              {translations[language].footerDesc}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="text-xs text-riviera-gold font-bold font-mono flex items-center gap-1.5">
                <span>📞</span>
                <span>+33 (0)7 63 20 87 13</span>
              </div>
              <a 
                href="mailto:contact@patounecoteazur.fr"
                className="text-xs text-white hover:text-riviera-gold transition-colors font-mono font-bold flex items-center gap-1.5"
                title="Send Email"
              >
                <span>✉️</span>
                <span>contact@patounecoteazur.fr</span>
              </a>
              <a 
                href="https://www.instagram.com/patounenice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-riviera-gold transition-colors font-mono font-bold w-fit"
              >
                <Instagram className="h-4 w-4 text-riviera-gold" />
                <span>@patounenice</span>
              </a>
            </div>
          </div>

          {/* Quick link */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-riviera-gold font-mono">Nice Area</h4>
            <ul className="text-xs text-stone-450 space-y-1.5 font-sans">
              <li>Nice Promenade des Anglais</li>
              <li>Cimiez & Mont Boron pet parks</li>
              <li>Villefranche-sur-Mer</li>
            </ul>
          </div>

          {/* Monaco / Cannes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-riviera-gold font-mono font-semibold">Monaco & Cannes</h4>
            <ul className="text-xs text-stone-450 space-y-1.5 font-sans">
              <li>Monaco Monte-Carlo Larvotto</li>
              <li>Cannes Croisette, Le Cannet</li>
              <li>Antibes Juan-les-Pins</li>
            </ul>
          </div>

          {/* Commitment detail */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-300 font-mono">
              {language === 'fr' ? "Qualité & Engagement" : "Quality & Caring"}
            </h4>
            <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
              {language === 'fr'
                ? "Nous privilégions un service d'excellence, discret et sur-mesure pour chacun de vos compagnons à Nice, Cannes et Monaco."
                : "We prioritize a discreet, tailored service of elite standards for your precious companions in Nice, Cannes, and Monaco."}
            </p>
          </div>
        </div>

        {/* Legal copyright bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono">
          <p className="text-center sm:text-left w-full sm:w-auto">
            {translations[language].footerCopyright}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-riviera-gold transition-colors">{translations[language].footerLinks}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
