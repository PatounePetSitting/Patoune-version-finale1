import { useState } from 'react';
import { Award, ShieldCheck, Clock, Heart, GraduationCap, Globe, CheckCircle2 } from 'lucide-react';

interface AboutSophieProps {
  language: 'fr' | 'en';
}

export default function AboutSophie({ language }: AboutSophieProps) {
  const content = {
    fr: {
      sectionTitle: "Qui suis-je ?",
      sectionSubtitle: "Le visage derrière Patoune d'Or — Un accompagnement d'exception certifié pour vos compagnons",
      badgeText: "VOTRE SITTER DE CONFIANCE",
      storyTitle: "Bonjour, je m'appelle Sophie !",
      storyText1: "Passionnée par le bien-être animal depuis plus de 10 ans, je veille sur vos fidèles compagnons avec une attention et un dévouement absolus.",
      storyText2: "Diplômée de l'ESSEC, j'allie rigueur professionnelle et amour de nos compagnons pour proposer un service de garde d'exception sur-mesure pour vos villas, yachts et hôtels de la Côte d'Azur.",
      storyText3: "Disponible 24h/24 et 7j/7, je me déplace avec réactivité de Monaco à Cannes pour assurer votre totale tranquillité d'esprit.",
      credentialsTitle: "Garanties d'Excellence & Qualifications",
      credential1Title: "Formation Officielle ACACED",
      credential1Desc: "Attestation officielle de connaissances pour les animaux de compagnie (chiens, chats).",
      credential2Title: "Assurance Professionnelle Complète",
      credential2Desc: "RC Professionnelle spécialisée pour une sérénité totale lors des gardes de luxe.",
      credential3Title: "Disponible 24H/24 & 7J/7",
      credential3Desc: "Ajustement instantané pour répondre aux urgences et demandes de dernière minute.",
      credential4Title: "Franco-Allemande / Trilingue",
      credential4Desc: "Bilingue de naissance en Allemand & Français, avec maîtrise fluide de l'Anglais.",
      sidebarHeader: "Sophie, 26 ans",
      sidebarLocation: "Nice, Côte d'Azur",
      sidebarStatsTitle: "En quelques mots :",
      statYears: "10 Ans",
      statYearsLabel: "Visites & Gardes",
      statCert: "Agréée",
      statCertLabel: "ACACED & Assurée",
      statEducation: "ESSEC",
      statEducationLabel: "Diplômée Grande École",
      sloganQuote: "« Offrir la même exigence de soin qu'un service de conciergerie 5 étoiles pour l'être qui vous est le plus cher. »"
    },
    en: {
      sectionTitle: "Who am I?",
      sectionSubtitle: "The face behind Patoune d'Or — A certified high-end caring companion for your precious pets",
      badgeText: "YOUR TRUSTED PET COMPANION",
      storyTitle: "Hello, I'm Sophie!",
      storyText1: "Deeply passionate about animal welfare for over 10 years, I look after your beloved companions with absolute care and devotion.",
      storyText2: "An ESSEC alumna, I merge professional standards with genuine love to offer bespoke, high-end pet sitting for luxury villas, yachts, and hotels on the French Riviera.",
      storyText3: "Available 24/7, I operate with speed and discretion from Monaco to Cannes to grant you ultimate peace of mind.",
      credentialsTitle: "Elite Credentials & Insurances",
      credential1Title: "Official ACACED Certified",
      credential1Desc: "French certified license for domestic pets (dogs, cats) custody and care.",
      credential2Title: "Comprehensive Business Insurance",
      credential2Desc: "Professional liability insurance fully registered for absolute luxury security.",
      credential3Title: "24/7 Absolute Availability",
      credential3Desc: "Instantly adapted to late-night events, last-minute excursions or late hotel checkouts.",
      credential4Title: "Bicultural Franco-German / Trilingual",
      credential4Desc: "Native French and German speaker, communicates fluidly in English with international guests.",
      sidebarHeader: "Sophie, 26 yo",
      sidebarLocation: "Nice, French Riviera",
      sidebarStatsTitle: "At a glance:",
      statYears: "10 Years",
      statYearsLabel: "Caring Practice",
      statCert: "Certified",
      statCertLabel: "ACACED & Insured",
      statEducation: "ESSEC",
      statEducationLabel: "Grande École Alumni",
      sloganQuote: "“Providing the same absolute standards as a 5-star palace concierge desk for your most precious family member.”"
    }
  };

  const t = content[language];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-150/80 shadow-sm relative overflow-hidden font-sans">
      {/* Decorative subtle background gold accent */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-riviera-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-riviera-azure/5 rounded-full blur-3xl -z-10"></div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Side: Editorial Bio details & Badges */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-stone-50 border border-stone-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-riviera-azure/10 text-riviera-azure text-[10px] font-bold font-mono tracking-wider uppercase rounded-md border border-riviera-azure/10">
              <Globe className="h-3 w-3" />
              <span>{t.badgeText}</span>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-black text-stone-900 tracking-tight">
                {t.sidebarHeader}
              </h3>
              <p className="text-xs font-semibold text-riviera-gold font-mono uppercase tracking-wide mt-1">
                📍 {t.sidebarLocation}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-200 space-y-4">
              <span className="block text-[10px] uppercase font-mono tracking-widest font-bold text-stone-400">
                {t.sidebarStatsTitle}
              </span>
              
              {/* Stat 1 */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm shrink-0">
                  🐾
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900 font-mono leading-none">{t.statYears}</span>
                  <span className="text-[11px] text-stone-500 font-medium">{t.statYearsLabel}</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900 font-mono leading-none">{t.statCert}</span>
                  <span className="text-[11px] text-stone-500 font-medium">{t.statCertLabel}</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-black text-stone-900 font-mono leading-none">{t.statEducation}</span>
                  <span className="text-[11px] text-stone-500 font-medium">{t.statEducationLabel}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200">
            <p className="text-xs italic text-stone-500 font-serif leading-relaxed text-center sm:text-left">
              {t.sloganQuote}
            </p>
          </div>
        </div>

        {/* Right Side: Narrative Story & Guarantee Grid */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
          
          {/* Story Text Box */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest font-black text-riviera-azure block">
                {language === 'fr' ? "PRÉSENTATION BIOGRAPHIQUE" : "BIOGRAPHY BRIEF"}
              </span>
              <h2 className="text-2.5xl sm:text-3.5xl font-serif font-black text-stone-900 leading-tight">
                {t.storyTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              <div className="md:col-span-8 text-xs sm:text-sm text-stone-650 leading-relaxed space-y-3.5 font-sans">
                <p>
                  <strong>{t.storyText1}</strong>
                </p>
                <p>
                  {t.storyText2}
                </p>
                <p className="bg-stone-50 border-l-4 border-riviera-azure p-4 rounded-r-xl text-stone-700 italic">
                  {t.storyText3}
                </p>
              </div>
              <div className="md:col-span-4 relative rounded-2xl p-6 border border-stone-200 shadow-sm bg-gradient-to-b from-stone-50 to-stone-100/50 min-h-[170px] flex flex-col justify-between items-start">
                <div className="h-10 w-10 bg-amber-100 text-amber-900 rounded-xl flex items-center justify-center text-lg shadow-sm">
                  🏆
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-wider font-extrabold text-stone-400 uppercase">OFFICIAL REGISTRATION</span>
                  <span className="block text-xs text-stone-700 font-bold font-sans mt-1">
                    {language === 'fr' ? "Agrément ACACED officiel de la DDPP" : "DDPP approved national license"}
                  </span>
                </div>
                <div className="absolute top-2.5 right-2.5 bg-stone-900 text-riviera-gold font-mono font-extrabold text-[9px] px-2.5 py-1 rounded-lg border border-stone-850 shadow-2xs uppercase">
                  MONACO
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Badges Grid */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-stone-400">
              {t.credentialsTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl space-y-1.5 hover:border-riviera-azure/20 transition-all">
                <div className="flex items-center gap-2">
                  <Award className="h-4.5 w-4.5 text-riviera-gold shrink-0" />
                  <span className="text-xs font-bold text-stone-900">{t.credential1Title}</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal">{t.credential1Desc}</p>
              </div>

              {/* Card 2 */}
              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl space-y-1.5 hover:border-riviera-azure/20 transition-all">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-stone-900">{t.credential2Title}</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal">{t.credential2Desc}</p>
              </div>

              {/* Card 3 */}
              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl space-y-1.5 hover:border-riviera-azure/20 transition-all">
                <div className="flex items-center gap-2">
                  <Clock className="h-4.5 w-4.5 text-riviera-azure shrink-0 animate-pulse" />
                  <span className="text-xs font-bold text-stone-900">{t.credential3Title}</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal">{t.credential3Desc}</p>
              </div>

              {/* Card 4 */}
              <div className="p-4 bg-stone-50 border border-stone-150 rounded-xl space-y-1.5 hover:border-riviera-gold/20 transition-all">
                <div className="flex items-center gap-2">
                  <Globe className="h-4.5 w-4.5 text-indigo-600 shrink-0" />
                  <span className="text-xs font-bold text-stone-900">{t.credential4Title}</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal">{t.credential4Desc}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
