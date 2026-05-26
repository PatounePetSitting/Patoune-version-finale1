import { Shield, Sparkles, Home, Hotel, Heart, ChevronRight, Award, Compass, Search } from 'lucide-react';

interface LuxurySeoDirectoryProps {
  language: 'fr' | 'en';
}

export default function LuxurySeoDirectory({ language }: LuxurySeoDirectoryProps) {
  return (
    <div className="space-y-16">
      {/* SECTION 1: Focus d'honneur sur le Catsitting de Prestige & Garde de Chat de Luxe */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-stone-150 shadow-sm relative overflow-hidden">
        {/* Visual Luxury Decorative Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-pink-500 to-riviera-azure"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-150/50 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-amber-600 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>{language === 'fr' ? "Point d'Honneur : Nounou d'Exception pour Chats" : "Special Focus: 5-Star Prestige Cat Sitting"}</span>
            </div>

            <h3 className="text-2.5xl sm:text-3xl font-serif font-extrabold text-stone-900 tracking-tight leading-tight">
              {language === 'fr' 
                ? "Garde de Chat de Luxe & Services de Catsitting Premium sur la Côte d'Azur" 
                : "Luxury Cat Sitting & Elite Feline Care from Nice to Monaco"}
            </h3>

            <p className="text-stone-650 text-sm md:text-base leading-relaxed font-sans">
              {language === 'fr' 
                ? "Les chats de prestige méritent une attention sans concession. Qu'il s'agisse de Sacrés de Birmanie, Persans, Maine Coons ou chats de gouttière adorés, nous prodiguons des visites à domicile de 45 minutes entièrement dédiées à leur bien-être exclusif. Oubliez le stress des pensions traditionnelles : votre félin conserve ses habitudes impériales dans son environnement familier."
                : "Felines of distinction deserve uncompromised affection and tailored routines. Whether they are sacred Ragdolls, glorious Maine Coons, noble Persians, or beloved house cats, we offer unhurried 45-minute home companion visits dedicated strictly to their private comfort. Skip the anxiety of catteries: your cat retains its royal routine and habits at home."}
            </p>

            {/* Core Values / Specific techniques */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="text-xl shrink-0 select-none">💆</span>
                <div>
                  <h4 className="font-bold text-xs text-stone-900 font-sans">
                    {language === 'fr' ? "Brossage Sensoriel & Massages" : "Sensory Brushing & Massages"}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 font-sans leading-relaxed">
                    {language === 'fr' ? "Sélection de brosses adaptées et de gestes relaxants pour dénouer le stress." : "Selection of premium grooming guides and calming touch techniques."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="text-xl shrink-0 select-none">🧸</span>
                <div>
                  <h4 className="font-bold text-xs text-stone-900 font-sans">
                    {language === 'fr' ? "Jeux d'Éveil et Cligne-Yeux Doux" : "Agility & Instinct Stimulation"}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 font-sans leading-relaxed">
                    {language === 'fr' ? "Plumeaux luxueux, lasers intelligents et sessions d'interaction calmes." : "Feather play loops, light tracking and slow-blink reassurance."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="text-xl shrink-0 select-none">🩺</span>
                <div>
                  <h4 className="font-bold text-xs text-stone-900 font-sans">
                    {language === 'fr' ? "Traitements & Alimentation Spécifique" : "Special Diets & Medical Care"}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 font-sans leading-relaxed">
                    {language === 'fr' ? "Administration rigoureuse de comprimés, insuline et pesée exacte des repas." : "Precise insulin injection, custom tablets and weighed BARF feed."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-2xl border border-stone-100">
                <span className="text-xl shrink-0 select-none">📸</span>
                <div>
                  <h4 className="font-bold text-xs text-stone-900 font-sans">
                    {language === 'fr' ? "Nouvelles Photos & Vidéos HD Live" : "HD Live Photo & Video Updates"}
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5 font-sans leading-relaxed">
                    {language === 'fr' ? "Rapport détaillé envoyé en temps réel via votre canal de communication préféré." : "An unhurried status update sent directly after every caring visit."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Eye-catching visual illustration card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-charcoal-luxe to-stone-900 text-white rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden border border-stone-850 shadow-inner">
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-riviera-gold/10 rounded-full blur-2xl"></div>
            
            <div className="space-y-4">
              <span className="text-3xl select-none">🐈👑</span>
              <h4 className="text-xl font-serif font-extrabold text-white tracking-tight leading-snug">
                {language === 'fr' ? "Sérénité Garantie pour Propriétaires Exigeants" : "Ultimate Serenity for Discerning Owners"}
              </h4>
              <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                {language === 'fr' 
                  ? "Nous nous occupons de l'intégralité des rituels de soin de vos félins avec discrétion absolue et professionnalisme d'élite reconnu." 
                  : "We respect and mimic your cat's exact daily lifestyle with absolute discretion, luxury care, and verified professional standards."}
              </p>
            </div>

            <div className="space-y-2 text-xs border-t border-stone-800 pt-5">
              <div className="flex items-center gap-2 text-stone-200">
                <span className="text-riviera-gold font-bold">✓</span>
                <span>{language === 'fr' ? "Nettoyage quotidien et méticuleux de la litière" : "Daily thorough litterbox box sanitation"}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <span className="text-riviera-gold font-bold">✓</span>
                <span>{language === 'fr' ? "Eau renouvelée quotidiennement (fontaine inspectée)" : "Fresh filtered running water updates"}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-200">
                <span className="text-riviera-gold font-bold">✓</span>
                <span>{language === 'fr' ? "Aération des pièces et maintien de température" : "Ambient temperature monitoring in villas"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Les Hôtels 5 Étoiles, Palaces & Villas de Prestige */}
      <div className="bg-gradient-to-br from-charcoal-luxe to-stone-950 text-white rounded-3xl p-6 md:p-10 border border-stone-850 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-riviera-gold/5 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="space-y-4 bg-stone-900/50 p-6 rounded-2xl border border-stone-800/80">
              <div className="flex items-center gap-2 text-riviera-gold">
                <Hotel className="h-5 w-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">{language === 'fr' ? "Prestations Hôtelières & Résidences Privées" : "Hotel Stays & Private Estates"}</span>
              </div>

              <h4 className="text-base font-bold text-white font-sans">
                {language === 'fr' ? "Secteurs résidentiels couverts" : "Prestige residential sectors"}
              </h4>

              <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                {language === 'fr'
                  ? "Que vous résidiez temporairement dans l'un des somptueux établissements de la Côte d'Azur ou que vous passiez vos vacances dans une villa d'exception, nous intervenons directement et en toute discrétion sur votre lieu de séjour."
                  : "Whether you reside temporarily in one of the Riviera's premier suites or standard private villas, we deliver direct, highly discreet, and tailored premium care in your private space."}
              </p>

              <div className="border-t border-stone-800/80 pt-4 space-y-2 text-[11px] font-mono text-stone-300">
                <div className="flex items-center justify-between">
                  <span>📍 Nice</span>
                  <span className="text-stone-500">Villas Mont Boron, Cimiez, Gairaut</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>📍 Monaco</span>
                  <span className="text-stone-500">Monte-Carlo, suites d'hôtels & Larvotto</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>📍 Cannes</span>
                  <span className="text-stone-500">La Croisette, Palm Beach, Mougins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>📍 Caps d'Élite</span>
                  <span className="text-stone-500">Saint-Jean-Cap-Ferrat, Cap d'Antibes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content for luxury setups */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-800 rounded-full border border-stone-750 text-[10px] sm:text-xs font-mono font-bold tracking-wider text-riviera-gold uppercase">
              <Award className="h-3.5 w-3.5 text-riviera-gold" />
              <span>{language === 'fr' ? "Conciergerie & Discrétion Absolue" : "Concierge & Privacy Assured"}</span>
            </div>

            <h3 className="text-2.5xl sm:text-3xl font-serif font-extrabold text-white tracking-tight leading-tight">
              {language === 'fr' 
                ? "Garde Vip en Hôtels 5 Étoiles & Villas de Luxe de la French Riviera" 
                : "VIP Care in 5-Star Hotels, Palaces & Ultimate Private Estates"}
            </h3>

            <p className="text-stone-300 text-sm md:text-base leading-relaxed font-sans">
              {language === 'fr'
                ? "Nous collaborons régulièrement avec les concierges Clefs d'Or d'hôtels prestigieux et gérant de propriétés de luxe. Nous assurons la garde de vos compagnons fassent partie intégrante de votre séjour parfait. Notre assurance d'élite et nos certifications complètes offrent une protection totale de vos animaux de valeur et de votre vie privée."
                : "We collaborate seamlessly with Golden Keys ('Clefs d'or') hotel concierges and managers of exclusive private properties. Our pet care integrates smoothly into your high-end lifestyle. Our multi-verified business insurance, professional background checks, and certificates offer guaranteed security for your prized companions and complete privacy."}
            </p>

            <ul className="text-xs text-stone-300 gap-4 grid grid-cols-1 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✦</span>
                <span>{language === 'fr' ? "Discrétion totale (Non-disclosure agreements)" : "Complete privacy with optional NDAs"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✦</span>
                <span>{language === 'fr' ? "Matériel de transport haut de gamme" : "High-end sanitized transit materials"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✦</span>
                <span>{language === 'fr' ? "Garde de chiens et chats d'exposition" : "Specialist handler for show-breed animals"}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-rose-500">✦</span>
                <span>{language === 'fr' ? "Accompagnement de luxe complet 24h/7j" : "Full 5-star standard coverage 24/7"}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 3: Référencement Sémantiques des Villes et Communes de la Côte d'Azur */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-amber-600">
            {language === 'fr' ? "Près de chez vous sur la Riviera" : "Locations Covered Seamlessly"}
          </h4>
          <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-stone-900 tracking-tight">
            {language === 'fr' ? "Notre Secteur d'Intervention d'Élite" : "Our Exclusive Service Coverage"}
          </h3>
          <p className="text-xs text-stone-600 font-sans">
            {language === 'fr' 
              ? "Nous nous déplaçons sans frais kilométriques supplémentaires de Cannes à Menton, incluant Monaco et l'arrière-pays nicois."
              : "We travel meticulously from Cannes to the Italian border, covering Monaco, Cap-Ferrat and all inland hills."}
          </p>
        </div>

        {/* Dynamic Interactive-Looking Semantic Bento Directory Grid (Perfect for SEO with keywords) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-stone-150 space-y-3 shadow-xs">
            <span className="inline-block bg-sky-50 text-sky-600 p-2 rounded-xl text-base">🇲🇨</span>
            <div className="space-y-1">
              <h4 className="font-extrabold text-xs text-stone-900 uppercase font-sans tracking-wide">Monaco & Alentours</h4>
              <p className="text-[10px] text-stone-400 font-mono font-semibold">Prestige Area East</p>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
              {language === 'fr' 
                ? "Monte-Carlo, Larvotto, Carré d'Or, Beausoleil, Cap-d'Ail, Èze, Roquebrune-Cap-Martin, Menton et frontière Italienne." 
                : "Monte-Carlo, Larvotto, Beausoleil, Cap-d'Ail, Èze, Roquebrune-Cap-Martin, Menton, and premium Ligurian border spots."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-150 space-y-3 shadow-xs">
            <span className="inline-block bg-amber-50 text-amber-600 p-2 rounded-xl text-base">🌴</span>
            <div className="space-y-1">
              <h4 className="font-extrabold text-xs text-stone-900 uppercase font-sans tracking-wide">Nice & Caps Royaux</h4>
              <p className="text-[10px] text-stone-400 font-mono font-semibold">Core Capital Area</p>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
              {language === 'fr' 
                ? "Nice Centre, Promenade des Anglais, Cimiez, Mont Boron, Saint-Jean-Cap-Ferrat, Beaulieu-sur-Mer, Villefranche-sur-Mer." 
                : "Nice Promenade des Anglais, Cimiez, Mont Boron estates, Saint-Jean-Cap-Ferrat, Beaulieu-sur-Mer, bays of Villefranche."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-150 space-y-3 shadow-xs">
            <span className="inline-block bg-teal-50 text-teal-600 p-2 rounded-xl text-base">⛵</span>
            <div className="space-y-1">
              <h4 className="font-extrabold text-xs text-stone-900 uppercase font-sans tracking-wide">Antibes / Baie des Anges</h4>
              <p className="text-[10px] text-stone-400 font-mono font-semibold">Riviera West Core</p>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
              {language === 'fr' 
                ? "Antibes, Juan-les-Pins, Cap d'Antibes, Biot, Villeneuve-Loubet, Cagnes-sur-Mer, Saint-Laurent-du-Var." 
                : "Antibes, Juan-les-Pins, Cap d'Antibes villas, Biot medieval hills, Villeneuve-Loubet Marina, Cagnes-sur-Mer."}
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-150 space-y-3 shadow-xs">
            <span className="inline-block bg-purple-50 text-purple-600 p-2 rounded-xl text-base">👜</span>
            <div className="space-y-1">
              <h4 className="font-extrabold text-xs text-stone-900 uppercase font-sans tracking-wide">Cannes & Mougins</h4>
              <p className="text-[10px] text-stone-400 font-mono font-semibold">Cinema Coast & Hills</p>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed font-sans">
              {language === 'fr' 
                ? "Cannes Croisette, Palm Beach, Le Cannet, superbes villas panoramiques de Mougins, Mandelieu-la-Napoule, Vallauris." 
                : "Cannes Croisette penthouses, Palm Beach, Mougins high-end properties, Mandelieu-la-Napoule, Vallauris heights."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
