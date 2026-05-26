import { useState } from 'react';
import { Phone, Mail, MessageCircle, Copy, Check, Sparkles, Heart, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactVipProps {
  language: 'fr' | 'en';
}

export default function ContactVip({ language }: ContactVipProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = "contact@patounecoteazur.fr";
  const phoneNumber = "+33763208713";
  const formattedPhone = "+33 (0)7 63 20 87 13";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const whatsAppMessage = language === 'fr'
    ? "Bonjour Sophie ! 🐾 J'aimerais faire garder mon compagnon et obtenir des renseignements sur vos formules haut de gamme."
    : "Hello Sophie! 🐾 I would love to arrange luxury pet sitting care for my companion and request information about your packages.";

  const encodedMessage = encodeURIComponent(whatsAppMessage);
  const whatsAppUrl = `https://wa.me/33763208713?text=${encodedMessage}`;

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 text-xs font-bold font-mono px-3.5 py-1.5 rounded-full border border-amber-500/20 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
          <span>{language === 'fr' ? "RÉPONSE SOUS 2 HEURES GARANTIES" : "GUARANTEED RESPONSE WITHIN 2 HOURS"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-charcoal-luxe tracking-tight">
          {language === 'fr' ? "Prendre Directement Contact" : "Get In Touch Directly"}
        </h2>
        <p className="text-stone-600 text-sm md:text-base leading-relaxed">
          {language === 'fr'
            ? "Pour planifier une garde d'exception, discuter des besoins uniques de vos fidèles compagnons ou demander un devis sur-mesure. Sans intermédiaire."
            : "To schedule a premium stay, discuss your faithful companion's unique needs, or request a custom estimate. Direct & private."}
        </p>
      </div>

      {/* Main Luxury Direct Contact Grid (Two Cards or single elegant pane) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
        
        {/* Phone & WhatsApp Card */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-lg flex flex-col justify-between space-y-6 transition-all"
        >
          <div className="space-y-5">
            <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20">
              <Phone className="h-6 w-6 text-amber-600" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 font-bold">
                {language === 'fr' ? "Appels & Messages Directs" : "Direct Calls & Texts"}
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                {language === 'fr' ? "Téléphone & Messagerie" : "Phone & Instant Messaging"}
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                {language === 'fr'
                  ? "Joignable par appel vocal direct, SMS classique ou via l'application de messagerie WhatsApp."
                  : "Available via direct cellular phone call, text message (SMS), or WhatsApp messaging."}
              </p>
            </div>

            {/* Giant Phone Display Container */}
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-150 flex items-center justify-between gap-3 group">
              <div className="space-y-1">
                <span className="block text-[10px] text-stone-400 font-mono uppercase tracking-wider">
                  {language === 'fr' ? "Ligne Directe de Sophie" : "Sophie's Direct Line"}
                </span>
                <span className="block text-lg sm:text-xl font-mono font-bold text-stone-900 tracking-tight">
                  {formattedPhone}
                </span>
              </div>

              <button 
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-500 hover:text-amber-600 hover:border-amber-300 transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
                title={language === 'fr' ? "Copier le numéro" : "Copy number"}
              >
                {copiedPhone ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-100">
            {/* Quick Call Button */}
            <a 
              href={`tel:${phoneNumber}`}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-stone-900 border border-stone-950 hover:bg-stone-850 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all duration-200 active:translate-y-0.5"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>{language === 'fr' ? "Appeler maintenant" : "Call Phone Now"}</span>
            </a>

            {/* Quick WhatsApp Button */}
            <a 
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all duration-200 active:translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{language === 'fr' ? "Démarrer sur WhatsApp" : "Chat on WhatsApp"}</span>
            </a>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div 
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-lg flex flex-col justify-between space-y-6 transition-all"
        >
          <div className="space-y-5">
            <div className="w-12 h-12 bg-riviera-azure/10 rounded-2xl flex items-center justify-center border border-riviera-azure/20">
              <Mail className="h-6 w-6 text-riviera-azure" />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#2563eb] bg-[#eff6ff] px-2.5 py-1 rounded border border-[#dbeafe] font-bold">
                {language === 'fr' ? "Courrier Électronique" : "E-Mail Communications"}
              </span>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                {language === 'fr' ? "Adresse E-mail Professionnelle" : "Professional Email Address"}
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                {language === 'fr'
                  ? "Idéal pour l'envoi de plannings détaillés, de fiches de soins vétérinaires complexes, ou de demandes de devis."
                  : "Perfect for sending precise date patterns, detailed veterinary treatment files, or custom travel contracts."}
              </p>
            </div>

            {/* Giant Email Display Container */}
            <div className="bg-gradient-to-r from-stone-50 to-stone-100 rounded-2xl p-5 sm:p-6 border-2 border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 group shadow-inner">
              <div className="space-y-1.5 text-center sm:text-left w-full">
                <span className="inline-flex bg-riviera-azure/10 text-riviera-azure px-2.5 py-1 text-[10px] font-bold font-mono uppercase tracking-wider rounded border border-riviera-azure/20">
                  {language === 'fr' ? "E-mail Direct en Grand" : "Direct Email (Highlighted)"}
                </span>
                <span className="block text-xl sm:text-2xl md:text-2.5xl lg:text-3xl font-mono font-black text-riviera-azure tracking-tight break-all select-all pt-1">
                  {emailAddress}
                </span>
              </div>

              <button 
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-250 text-stone-700 hover:text-amber-600 hover:border-amber-300 transition-all cursor-pointer shadow flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 shrink-0"
                title={language === 'fr' ? "Copier l'adresse email" : "Copy email address"}
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span className="text-xs font-bold font-mono text-emerald-700">{language === 'fr' ? "Copié !" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-stone-500" />
                    <span className="text-xs font-bold font-mono">{language === 'fr' ? "Copier" : "Copy"}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-100 flex flex-col justify-end">
            {/* Quick Email open Button */}
            <a 
              href={`mailto:${emailAddress}?subject=${encodeURIComponent(language === 'fr' ? "Demande de garde de compagnie - Côte d'Azur" : "Premium Grooming/Sitting Enquiry - Riviera")}`}
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 bg-stone-900 border border-stone-950 hover:bg-stone-850 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shadow-md transition-all duration-200 active:translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              <span>{language === 'fr' ? "Envoyer un e-mail" : "Send direct Email"}</span>
            </a>

            <div className="text-center py-2 text-[11px] text-stone-400 font-mono">
              {language === 'fr' ? "Réception en direct 24h/24 • Réponse rapide" : "Monitored 24/7 • Fast callback"}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Trust badging footer under contact */}
      <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200/60 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="p-3 bg-white rounded-full border border-stone-150 shrink-0 shadow-2xs">
          <Shield className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-bold text-stone-800 font-sans">
            {language === 'fr' ? "Confidentialité & Discrétion Absolue" : "Absolute Safety & Full Discretion"}
          </p>
          <p className="text-[11px] text-stone-500 leading-normal">
            {language === 'fr'
              ? "Vos informations personnelles de contact restent strictement privées et ne font l'objet d'aucune vente ou base commerciale."
              : "Your private details are strictly protected, never stored, and are used solely to establish high-end companion care."}
          </p>
        </div>
      </div>
    </div>
  );
}
