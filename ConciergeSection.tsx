import { useState } from 'react';
import { Building, Crown, Gem, Anchor, Sparkles, Check, PhoneCall, ShieldCheck, Heart, User } from 'lucide-react';

interface ConciergeSectionProps {
  language: 'fr' | 'en';
  onSelectFormula: (formula: string) => void;
}

export default function ConciergeSection({ language, onSelectFormula }: ConciergeSectionProps) {
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  const services = [
    {
      icon: <Crown className="h-6 w-6 text-riviera-gold shrink-0" />,
      titleFr: "Garde VIP En Suite Hôtelière",
      titleEn: "In-Suite Luxury Sitter Presence",
      descFr: "Présence attentive et affectueuse dans les palaces et hôtels de luxe tandis que vous profitez de votre soirée.",
      descEn: "Continuous doting care directly in your luxury suite while you dine at Michelin stars or attend galas."
    },
    {
      icon: <Anchor className="h-6 w-6 text-riviera-azure shrink-0" />,
      titleFr: "Accompagnement Yacht & Villa",
      titleEn: "Yacht & Private Villa Care",
      descFr: "Garde sur-mesure à bord de votre yacht (Monaco, Cannes) ou dans votre villa azuréenne privée.",
      descEn: "Customized premium pet care tailored for yacht harbors and executive villas across the Riviera."
    },
    {
      icon: <Gem className="h-6 w-6 text-riviera-gold shrink-0" />,
      titleFr: "Ligne Noire & Concierge 24/7",
      titleEn: "24/7 Premium Concierge Hotline",
      descFr: "Ligne téléphonique directe sécurisée pour les demandes urgentes et les planifications de dernière minute.",
      descEn: "A dedicated ultra-responsive channel open for immediate short-notice luxury pet sitting demands."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-riviera-azure shrink-0" />,
      titleFr: "Promenades de Prestige & Chauffeur",
      titleEn: "Prestige Walks & Pet Chauffeur",
      descFr: "Balades personnalisées sur la Croisette ou la Promenade des Anglais avec chauffeur privé si requis.",
      descEn: "Individually catered walks on the Croisette or Monaco gardens, complete with executive pet transfers."
    }
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-stone-900 text-stone-100 p-8 md:p-14 border border-stone-850 shadow-2xl">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-riviera-gold/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute -bottom-10 -left-10 h-52 w-52 bg-gradient-to-tr from-riviera-azure/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column Text details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10 text-xs font-mono font-bold tracking-wider text-riviera-gold uppercase">
            <Gem className="h-3.5 w-3.5" />
            <span>{language === 'fr' ? "PARTENARIATS DE PRESTIGE" : "PRESTIGE COLLABORATIONS"}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-serif font-black leading-tight tracking-tight text-white">
            {language === 'fr' 
              ? "Hôtels, Palaces, Yachting & Conciergeries Privées" 
              : "Luxury Hotels, Yachting & Private Conciergeries"}
          </h3>

          <p className="text-stone-300 text-sm md:text-base leading-relaxed">
            {language === 'fr'
              ? "Nous collaborons étroitement avec les plus beaux établissements de la Côte d'Azur (Nice, Cannes, Monaco) pour offrir un service d'excellence aux invités les plus exigeants. Discrétion absolue, réactivité immédiate et professionnalisme certifié."
              : "We collaborate continuously with the most exclusive hotels and private hospitality agencies on the French Riviera to satisfy prestigious travelers. Flawless discretion, instant response, and elite standards."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-stone-850/60 p-4 rounded-xl border border-stone-800">
              <span className="block text-stone-400 text-[10px] font-bold font-mono uppercase tracking-widest mb-1.5">
                {language === 'fr' ? "POUR LES CLIENTS" : "FOR YOUR GUESTS"}
              </span>
              <ul className="space-y-2 text-xs text-stone-250">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  {language === 'fr' ? "Tarification transparente" : "Clear luxury billing"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  {language === 'fr' ? "Photos & Vidéos HD live" : "HD live updates"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  {language === 'fr' ? "Garde en Suite sécurisée" : "Secure hotel suite sitters"}
                </li>
              </ul>
            </div>

            <div className="bg-stone-850/60 p-4 rounded-xl border border-stone-800">
              <span className="block text-stone-400 text-[10px] font-bold font-mono uppercase tracking-widest mb-1.5">
                {language === 'fr' ? "POUR LES CONCIERGES" : "FOR CONCIERGE DESKS"}
              </span>
              <ul className="space-y-2 text-xs text-stone-250">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  {language === 'fr' ? "Disponibilité garantie 24/7" : "Guaranteed availability 24/7"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  {language === 'fr' ? "Pet sitters agréés & assurés" : "Background-checked & insured"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✔</span>
                  {language === 'fr' ? "Intégration sur facture de l'hôtel" : "Integrated direct folio billing"}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <button
              onClick={() => onSelectFormula("Service Palace & Conciergerie")}
              className="px-6 py-3.5 bg-riviera-gold hover:bg-yellow-600 text-stone-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              {language === 'fr' ? "Réserver mon Palace Sitter" : "Book your Palace Sitter"}
            </button>
            <button
              onClick={() => setShowInquiryModal(true)}
              className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-xs tracking-wider uppercase rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              {language === 'fr' ? "Devenir Concierge Partenaire" : "Affiliate Concierge Details"}
            </button>
          </div>
        </div>

        {/* Right Column Services cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((srv, i) => (
            <div key={i} className="bg-stone-850/50 hover:bg-stone-800/80 p-5 rounded-2xl border border-stone-800 transition-all duration-300 space-y-3 shadow-inner">
              <div className="p-2.5 bg-white/5 w-fit rounded-lg border border-white/10 shadow-sm leading-none">
                {srv.icon}
              </div>
              <h4 className="text-sm font-bold text-white font-serif">
                {language === 'fr' ? srv.titleFr : srv.titleEn}
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed font-sans">
                {language === 'fr' ? srv.descFr : srv.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PRO Pricing Grid Table block as requested */}
      <div className="mt-12 pt-10 border-t border-stone-800 space-y-6">
        <div className="text-center md:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-riviera-gold/15 text-riviera-gold text-[10px] font-bold font-mono tracking-widest uppercase rounded border border-riviera-gold/25">
            <span>✨</span>
            <span>{language === 'fr' ? "GRILLE TARIFAIRE OFFICIELLE PRO (B2B)" : "OFFICIAL PROFESSIONAL RATE CARD"}</span>
          </div>
          <h4 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
            {language === 'fr' 
              ? "Tarifs de Référence pour Hôtels, Conciergeries, Villas & Yachts" 
              : "Reference Pricing for Palace Hotels, Concierge Desks, Villas & Yachts"}
          </h4>
          <p className="text-stone-400 text-xs md:text-sm font-sans max-w-3xl leading-relaxed">
            {language === 'fr'
              ? "Tarification d'excellence claire et fixe pour une intégration directe sur facture de chambre (folio) ou prise en charge immédiate."
              : "Transparent elite rates for direct room-folio billing or bespoke private guest arrangements."}
          </p>
        </div>

        {/* The beautiful high-end table matching the image structure with elegant interactive states */}
        <div className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 shadow-inner">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-850 font-sans text-left">
              <thead>
                <tr className="bg-stone-900/85 text-xs font-bold text-stone-300 font-mono tracking-wider">
                  <th scope="col" className="px-6 py-4.5">{language === 'fr' ? "Prestation" : "Service Description"}</th>
                  <th scope="col" className="px-6 py-4.5 text-center">{language === 'fr' ? "Durée" : "Duration"}</th>
                  <th scope="col" className="px-6 py-4.5 text-right">{language === 'fr' ? "Tarif Premium B2B" : "Premium Rate"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-850 bg-stone-900/20 text-xs text-stone-200">
                {/* Row 1 */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 sm:py-5">
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-riviera-gold text-xs">⚡</span>
                      <span>{language === 'fr' ? "A l'heure (Garde Flash)" : "Hourly Care (Flash Sitting)"}</span>
                    </div>
                    <span className="text-stone-400 text-[10.5px] font-medium block mt-1 tracking-tight">
                      {language === 'fr' ? "Minimum 2 heures facturées pour interventions courtes" : "Minimum of 2 hours billed for short-notice assistance"}
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-center whitespace-nowrap">
                    <span className="px-3 py-1 bg-stone-800 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                      1H
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-right whitespace-nowrap text-sm sm:text-base font-black font-mono text-riviera-gold">
                    45 €
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 sm:py-5">
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-riviera-azure text-xs">⏳</span>
                      <span>{language === 'fr' ? "Demi-Journée (4H) — Présence Continue" : "Half-Day (4H) — Dedicated Presence"}</span>
                    </div>
                    <span className="text-stone-400 text-[10.5px] font-medium block mt-1 tracking-tight">
                      {language === 'fr' ? "Jeux, promenades et affection non-stop durant vos rendez-vous" : "Continuous fun, play and premium sitting during guest absences"}
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-center whitespace-nowrap">
                    <span className="px-3 py-1 bg-stone-800 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                      4H
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-right whitespace-nowrap text-sm sm:text-base font-black font-mono text-riviera-gold">
                    150 €
                  </td>
                </tr>

                {/* Row 3 - Elite Choice */}
                <tr className="bg-riviera-gold/5 hover:bg-riviera-gold/10 transition-colors border-y border-riviera-gold/20">
                  <td className="px-6 py-4 sm:py-5">
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-riviera-gold text-sm">👑</span>
                      <span className="text-riviera-gold font-extrabold">{language === 'fr' ? "Journée Complète (8H)" : "Full Day Luxury Sitting (8H)"}</span>
                    </div>
                    <span className="text-stone-350 text-[10.5px] font-medium block mt-1 tracking-tight">
                      {language === 'fr' ? "Formule d'excellence idéale pour excursions lointaines en mer ou visites" : "Highly requested for day-long yacht trips, corporate events or long absences"}
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-center whitespace-nowrap">
                    <span className="px-3 py-1 bg-riviera-gold text-stone-950 font-black rounded-lg font-mono inline-block text-xs">
                      8H
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-right whitespace-nowrap text-base sm:text-lg font-extrabold font-mono text-white">
                    280 €
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 sm:py-5">
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-emerald-500 text-xs">⭐</span>
                      <span>{language === 'fr' ? "Forfait 24H (Jour + Nuit En Suite)" : "24-Hour Premium Sitter (Day + Night)"}</span>
                    </div>
                    <span className="text-stone-400 text-[10.5px] font-medium block mt-1 tracking-tight">
                      {language === 'fr' ? "Prise en charge intégrale continue jour et nuit pour une tranquillité d'esprit totale" : "Exquisite 24-hour companion sitting inside hotel suite, yacht cabin, or private villa"}
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-center whitespace-nowrap">
                    <span className="px-3 py-1 bg-stone-800 text-stone-200 font-bold rounded-lg font-mono border border-stone-700/60 inline-block text-xs">
                      24H
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-right whitespace-nowrap text-sm sm:text-base font-black font-mono text-riviera-gold">
                    350 €
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 sm:py-5">
                    <div className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="text-stone-400 text-xs">💬</span>
                      <span>{language === 'fr' ? "Autre : évenementiel, mariage, balades, toilettage de luxe" : "Event, Wedding hosting, custom premium grooming & transfers"}</span>
                    </div>
                    <span className="text-stone-400 text-[10.5px] font-medium block mt-1 tracking-tight">
                      {language === 'fr' ? "Accompagnement d'animaux lors de vos réceptions de gala, mariages sur-mesure..." : "Dedicated red-carpet assistance for gala dinners, destination weddings..."}
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-center whitespace-nowrap">
                    <span className="px-3 py-1 bg-stone-800/80 text-stone-300 font-mono rounded-lg inline-block text-[11px] italic">
                      {language === 'fr' ? "sur devis" : "on quote"}
                    </span>
                  </td>
                  <td className="px-6 py-4 sm:py-5 text-right whitespace-nowrap text-xs sm:text-sm font-bold font-mono text-stone-300 italic">
                    {language === 'fr' ? "sur devis" : "on quote"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Note underneath */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4.5 bg-stone-900 border border-stone-800 rounded-xl text-stone-450 text-[11px] leading-relaxed">
          <p className="flex items-center gap-2 font-medium">
            <span className="text-riviera-gold text-xs">ℹ</span>
            <span>
              {language === 'fr'
                ? "* Service Palace d'excellence assuré en direct par Sophie, agréée professionnellement, assurée et bilingue."
                : "* Elite Palace pet sitting provided directly by Sophie, fully registered, insured and bilingual."}
            </span>
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-white/5 text-stone-250 font-bold font-mono rounded border border-white/5">Nice</span>
            <span className="px-2 py-0.5 bg-white/5 text-stone-250 font-bold font-mono rounded border border-white/5">Cannes</span>
            <span className="px-2 py-0.5 bg-white/5 text-stone-250 font-bold font-mono rounded border border-white/5">Monaco</span>
          </div>
        </div>
      </div>

      {/* Elegant info popup for becoming a partner */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white text-stone-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6 relative border border-stone-100">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setShowInquiryModal(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-650 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="text-center space-y-2">
              <div className="mx-auto h-12 w-12 bg-riviera-light rounded-full flex items-center justify-center text-riviera-azure">
                <Building className="h-6 w-6 text-riviera-azure" />
              </div>
              <h4 className="text-lg font-serif font-black text-charcoal-luxe">
                {language === 'fr' ? "Espace Clefs d'Or & Conciergerie de Confiance" : "Golden Keys affiliated partnerships"}
              </h4>
              <p className="text-xs text-stone-500 font-sans">
                {language === 'fr' 
                  ? "Rejoignez notre réseau de palaces agréés sur la Côte d'Azur." 
                  : "Join our affiliated network of five-star hospitality desks."}
              </p>
            </div>

            <div className="text-xs text-stone-650 leading-relaxed space-y-3.5 bg-stone-50 p-4 rounded-xl border border-stone-150 font-sans">
              <p>
                {language === 'fr'
                  ? "Nous agissons quotidiennement de Nice à Monaco pour assister les concierges d'hôtels prestigieux. Grâce à notre agrément professionnel et notre assurance multirisque d'élite, nous prenons en charge les animaux de vos clients directement au sein de leur suite ou lors de balades personnalisées."
                  : "We operate daily from Nice to Cannes and Monaco assisting demanding hotel desks. Thanks to our elite commercial insurance and certifications, we attend your guests' furry friends right inside their lodging or for customized walks."}
              </p>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span><strong>{language === 'fr' ? "Réactivité sous 1H" : "1h response guarantee"}</strong> {language === 'fr' ? "pour toutes vos demandes urgentes." : "for critical guest inquiries."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span><strong>{language === 'fr' ? "Chauffeur Privé agréé" : "Executive transfers"}</strong> {language === 'fr' ? "disponible pour amener l'animal chez le toiletteur / vétérinaire de luxe." : "available for any urgent luxury grooming appointments."}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                <span><strong>{language === 'fr' ? "Facturation simplifiée" : "Corporate invoicing"}</strong> {language === 'fr' ? "directe sur la chambre d'hôtel (PMS Integration)." : "direct on the room folio."}</span>
              </div>
            </div>

            <div className="text-center p-3.5 bg-riviera-light border border-riviera-azure/20 rounded-xl space-y-2">
              <p className="text-xs font-mono font-bold text-riviera-azure flex items-center justify-center gap-2">
                <PhoneCall className="h-3.5 w-3.5 animate-bounce" />
                <span>{language === 'fr' ? "Ligne Directe Concierges :" : "Direct Line for Concierges:"}</span>
              </p>
              <p className="text-base font-serif font-black text-charcoal-luxe text-center">
                +33 (0)7 63 20 87 13
              </p>
            </div>

            <div className="flex justify-end gap-3.5">
              <button
                onClick={() => setShowInquiryModal(false)}
                className="w-full py-3 bg-stone-750 hover:bg-stone-850 text-white rounded-xl text-xs font-bold uppercase transition-all shadow-sm cursor-pointer"
              >
                {language === 'fr' ? "Fermer" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
