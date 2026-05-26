import { PricingTier } from '../types';
import { Cat, Dog, Home as HomeIcon, Check, Star } from 'lucide-react';

interface PricingCardsProps {
  tiers: PricingTier[];
  onSelectTier: (tierName: string) => void;
  language: 'fr' | 'en';
  translations: any;
}

export default function PricingCards({ tiers, onSelectTier, language, translations }: PricingCardsProps) {
  // Map string to icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cat':
        return <Cat className="h-8 w-8 text-riviera-azure" />;
      case 'Dog':
        return <Dog className="h-8 w-8 text-riviera-azure" />;
      default:
        return <HomeIcon className="h-8 w-8 text-riviera-azure" />;
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3 font-sans">
        <h2 className="text-3.5xl font-serif font-extrabold text-charcoal-luxe tracking-tight">
          {translations[language].pricingTitle}
        </h2>
        <p className="text-stone-600 text-sm md:text-base">
          {translations[language].pricingSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-6 md:p-8 flex flex-col justify-between border transition-all duration-300 ${
              tier.popular
                ? 'bg-gradient-to-b from-riviera-light/40 to-white border-riviera-azure/80 shadow-xl shadow-riviera-deep/5 scale-100 md:scale-105 z-10'
                : 'bg-white border-stone-150 shadow-sm hover:shadow-md'
            }`}
          >
            {/* Tag popular */}
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-riviera-gold text-white px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Star className="h-3 w-3 fill-current text-white" />
                {translations[language].popularTag}
              </span>
            )}

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-riviera-light rounded-2xl border border-riviera-azure/10 inline-block">
                  {getIcon(tier.icon)}
                </span>
              </div>

              <h3 className="text-lg font-serif font-black text-charcoal-luxe">{tier.name[language]}</h3>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-serif font-black text-charcoal-luxe tracking-tight">{tier.price}€</span>
                <span className="ml-2 text-xs text-stone-500 font-mono uppercase tracking-wider font-semibold">{tier.period[language]}</span>
              </div>

              {/* Feature list */}
              <ul className="mt-8 space-y-3.5 border-t border-stone-100 pt-6">
                {tier.features[language].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-650 leading-relaxed">
                    <Check className="h-4 w-4 text-emerald-500 mt-1 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTier(tier.name[language])}
              className={`mt-8 w-full py-3.5 px-6 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                tier.popular
                  ? 'bg-riviera-azure hover:bg-riviera-deep text-white shadow-lg shadow-riviera-azure/20 active:translate-y-0.5 font-extrabold'
                  : 'bg-stone-100 text-stone-800 hover:bg-riviera-light hover:text-riviera-azure hover:border-riviera-azure/20 border border-transparent active:translate-y-0.5'
              }`}
            >
              {translations[language].bookBtn}
            </button>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-stone-550 text-center max-w-xl mx-auto font-mono uppercase tracking-wider">
        {translations[language].pricingNote}
      </p>
    </div>
  );
}
