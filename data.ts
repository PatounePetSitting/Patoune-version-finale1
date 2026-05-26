import { BlogPost, Testimonial, PricingTier, GalleryItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "pet-sitting-luxe-monaco",
    title: {
      fr: "Pet Sitting d'Excellence à Monaco : Choyer votre compagnon en Principauté",
      en: "Elite Pet Sitting in Monaco: Pampering Your VIP Companion in the Principality"
    },
    excerpt: {
      fr: "Faire garder son animal à Monaco exige discrétion, sécurité et amour inconditionnel. Découvrez nos conseils de garde prémium et notre approche sur-mesure de pet sitting.",
      en: "Caring for your companion in Monaco requires discretion, ultimate safety, and absolute affection. Discover our high-end pet sitting standards."
    },
    content: {
      fr: `Le rythme effréné de la Principauté de Monaco exige souvent pour vos compagnons à quatre pattes un service d'une flexibilité absolue et d'un professionnalisme sans faille. Que vous habitiez le quartier de Monte-Carlo, le Larvotto ou La Condamine, confier les clés de son domicile et, plus important encore, la santé de ses animaux est une décision de haute importance.

### Pourquoi choisir un pet sitter professionnel à Monaco ?
Contrairement aux pensions traditionnelles parfois bruyantes et stressantes, la garde à domicile (ou pet sitting) à Monaco permet à votre chien ou chat de conserver tous ses repères de confort quotidiens :
1. **Zéro stress pour les chats** : Les félins, créatures très territoriales, adorent la sérénité de leur salon de prestige.
2. **Promenades personnalisées** : Des parcours de balade adaptés aux jardins de Monaco et à l'ambiance portuaire.
3. **Sécurité accrue** : Une présence régulière chez vous dissuade également les imprévus domestiques.

### Nos engagements envers le référencement et la qualité locale
En tant que spécialiste certifié du pet sitting à Monaco, nous garantissons des points photo quotidiens, l'administration minutieuse de traitements médicaux (si requis) et une réactivité sous deux heures en cas de besoin.`,
      en: `The fast-paced life in the Principality of Monaco often demands a pet-sitting service with absolute flexibility and flawless professionalism. Whether you reside in Monte-Carlo, Larvotto, or La Condamine, entrusting your keys and the security of your pets is a high-level decision.

### Why Choose a Professional Pet Sitter in Monaco?
Unlike noisy, stress-inducing pet boarding kennels, premium home pet sitting in Monaco keeps your dog or cat in their serene home environment:
1. **Zero Stress for Cats**: Cats are highly territorial and thrive in their private luxury living rooms.
2. **Custom Dog Walks**: Carefully planned walking routes across Monaco's tranquil gardens and seaside docks.
3. **Home Security**: Regular, discrete visits ensure peace of mind for both your pet and property during your travels.

### Our Professional Guarantee
We deliver HD high-resolution photos and video reports on every single visit, administer veterinarian-approved medical instructions, and maintain an unwavering 2-hour response guarantee.`
    },
    keywords: ["pet sitting Monaco", "garde de chien Monaco", "cat sitter Monte-Carlo", "nounou animaux Monaco", "pet sitter Riviera"],
    date: "24 Mai 2026",
    readTime: "4 mins",
    category: {
      fr: "Prestige & Conseils",
      en: "Prestige & Guide"
    },
    image: "/src/assets/images/client_dog_stream_1779629873281.png"
  },
  {
    id: "2",
    slug: "garde-chat-cannes-stress-free",
    title: {
      fr: "Garde de chat à Cannes & Antibes : 5 conseils pour un voyage sans stress",
      en: "Cat Sitting in Cannes & Antibes: 5 Tips for a Worry-Free Trip"
    },
    excerpt: {
      fr: "Les chats sont de grands sensibles au changement d'environnement. Nos secrets de cat sitters professionnels à Cannes pour des vacances heureuses et zen.",
      en: "Cats are extremely sensitive to spatial changes. Discover our professional cat sitter keys in Cannes for peaceful and joyful vacations."
    },
    content: {
      fr: `Cannes, célèbre pour son festival et sa magnifique Croisette, est aussi le paradis de splendides chats d'appartement. Lorsque vous planifiez un déplacement professionnel ou un séjour à l'étranger, le bien-être de votre félin est votre priorité.

### Astuces de cat sitter pour favoriser une garde détendue :
- **Laissez des odeurs familières** : Ne lavez pas votre plaid préféré juste avant de partir. Votre odeur calmera instinctivement votre chat.
- **Le secret de l'herbe à chat** : Positionnez des jouets sensoriels ou des diffuseurs de phéromones apaisants dans les pièces principales.
- **Rationnez les jeux** : Un cat sitter qualifié saura dédier une partie de la visite à des séances de jeu interactif intense pour rompre la solitude.
- **Hydratation stimulée** : Les vagues de chaleur azuréennes rendent l'eau fraîche capitale. Nous nettoyons et changeons les bols à chaque passage.

En choisissant Patoune pour votre garde de chat à Cannes, vous optez pour des visites longues de 45 minutes entièrement dédiées aux câlins, au brossage et à l'affect pour un compagnon serein.`,
      en: `Cannes, famous for its grand beachfront La Croisette, is also a haven for gorgeous house cats. When coordinating professional business trips or seaside vacations, your cat's peace of mind is paramount.

### Dynamic Hacks for a Blissful Sitting Experience:
- **Keep Familiar Scents**: Avoid washing your favorite blankets right before departure; your comforting scent stays locked in the room.
- **Pheromone Diffusers**: Setting calm diffusers near favorite resting corners works wonders.
- **Interactive Engagements**: Our dedicated visits schedule play sessions using feathers and laser pointers to keep their minds sharp.
- **Stamina-Boosting Hydration**: With warm Riviera sunny weather, we guarantee fresh cold water and deep clean food bowls at every check-in.

Choosing Patoune for your cat sitting in Cannes ensures tailored, unhurried 45-minute sessions purely dedicated to affection and companionship.`
    },
    keywords: ["garde de chat Cannes", "cat sitter Antibes", "pet sitting Cannes", "visite chat Cannes", "garderie chat"],
    date: "18 Mai 2026",
    readTime: "3 mins",
    category: {
      fr: "Bien-être Félin",
      en: "Feline Wellness"
    },
    image: "/src/assets/images/client_maine_coon_1779629892210.png"
  },
  {
    id: "3",
    slug: "promenades-chien-nice-spots",
    title: {
      fr: "Où promener son chien à Nice ? Les meilleurs parcs secrets des Dog Sitters",
      en: "Top Dog Walks in Nice: Hidden Sitter-Approved Parks"
    },
    excerpt: {
      fr: "Découvrez les meilleurs parcs canins de Nice et de l'arrière-pays nicois. Des lieux d'exercice parfaits recommandés par votre pet sitter Patoune.",
      en: "Explore the most pet-friendly walking spots in Nice and surrounding hills, recommended by your premium pet sitting companion, Patoune."
    },
    content: {
      fr: `La ville de Nice regorge de coins magnifiques pour promener votre chien. Cependant, tous les espaces ne sont pas ouverts ou adaptés à nos compagnons de promenade. En tant que dresseur et marcheur professionnel dans le 06, nous vous livrons notre sélection préférée pour allier plaisir, liberté et sécurité :

1. **Le Parc de Vaugrenier (proche Villeneuve-Loubet)** : Un immense espace de forêt naturelle doté d'étangs et d'un grand cani-parc clôturé idéal pour la sociabilisation.
2. **Le Mont Boron** : Une vue imprenable sur le port de Nice et la ville, des sentiers à l'ombre des pins, le top mondial pour les journées modérées de printemps.
3. **Le Caniparc de Carol de Roumanie** : Entièrement clos et sécurisé, idéal à Nice Ouest pour laisser les grands loulous courir en toute quiétude.

Lors de nos prestations de garde de chien à Nice, chaque balade est minutieusement adaptée au physique et à la météo, pour garantir des pattes légères et un cœur joyeux !`,
      en: `Nice is packed with breathtaking lookouts for daily canine walks, though finding optimal off-leash havens and shaded areas is a subtle craft. Here are our high-energy recommendations for safety and play:

1. **Parc de Vaugrenier**: Features vast natural pine landscapes, dedicated lakes, and massive fenced off-leash zones ideal for safe canine social interaction.
2. **Mont Boron forest**: Offers stunning views of the Port of Nice with cool, fully shaded forest paths, keeping pups safe and breezy during summer days.
3. **Carol de Roumanie park**: Deeply fenced in West Nice, allowing larger dogs to gallop and play safely away from city streets.

For our dog walking and active sitting services in Nice, we track outdoor temperatures, carry dynamic hydration kits, and customize paths to keep dogs happy and healthy!`
    },
    keywords: ["promenade chien Nice", "dog sitter Nice", "garde de chien Nice", "cani-parc Nice 06", "balade canine"],
    date: "10 Mai 2026",
    readTime: "5 mins",
    category: {
      fr: "Balades & Nature",
      en: "Walks & Outdoor"
    },
    image: "/src/assets/images/client_terrier_forest_1779629909127.png"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Sophie de Monte-Carlo",
    location: "Monaco Larvotto",
    rating: 5,
    petName: "Aramis",
    petType: "cat",
    comment: {
      fr: "Patoune est incroyable de gentillesse et de professionnalisme. Mon Persan Aramis est d'habitude très peureux, mais il adore ses visites quotidiennes ! Je pars l'esprit totalement libre grâce aux photos reçues chaque matin.",
      en: "Patoune is incredibly gentle and professional. My Persian Cat Aramis is usually very shy, but he absolutely loves her daily visits! I travel with infinite peace of mind thanks to the premium photo updates sent every morning."
    },
    date: "Mai 2026"
  },
  {
    id: "t2",
    author: "Jean-Marc & Hélène",
    location: "Cannes Croisette",
    rating: 5,
    petName: "Toby",
    petType: "dog",
    comment: {
      fr: "Superbe dog-sitter ! Toby (notre Golden Retriever) a eu droit à des balades de rêve au Mont Boron et sur les plages de Cannes autorisées. Un suivi exceptionnel, de l'eau fraîche et une affection sincère. Recommandé à 1000 %.",
      en: "Amazing dog sitter! Toby (our Golden Retriever) had wonderful long walks in Mont Boron and Cannes' pet-friendly coast. Exceptional tracking, fresh water, and genuinely deep affection. Strongly recommended!"
    },
    date: "Avril 2026"
  },
  {
    id: "t3",
    author: "Priscillia",
    location: "Nice Cimiez",
    rating: 5,
    petName: "Milo & Nala",
    petType: "cat",
    comment: {
      fr: "Un service de garde exceptionnel pour mes deux chats. La litière est toujours impeccable, les bols nettoyés, et Milo a même eu droit à son brossage quotidien qu'il apprécie tant. On sent une vraie passion pour les animaux !",
      en: "An outstanding cat sitting service for my two furry cats. The litter box is clean, feed bowls spotless, and Milo loved the daily brushing. You can feel a real, deep passion for pets' happiness here!"
    },
    date: "Mai 2026"
  },
  {
    id: "t4",
    author: "Stéphane",
    location: "Saint-Jean-Cap-Ferrat",
    rating: 5,
    petName: "Samy",
    petType: "dog",
    comment: {
      fr: "Garde absolument exceptionnelle en villa pour mon Golden Retriever. Le pet sitting est d'un professionnalisme hors pair, très attentionné, avec des promenades sportives et des nouvelles régulières avec de magnifiques photos quotidiennes. On se sent en totale confiance !",
      en: "Absolutely exceptional villa care for my Golden Retriever. Incredible professionalism, extremely attentive, energetic long daily walks, and wonderful high-quality updates. Total peace of mind!"
    },
    date: "Mars 2026"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "p1",
    name: {
      fr: "Visite Douceur Chat & NAC",
      en: "Sweet Cat & NAC Visit"
    },
    price: "20",
    period: {
      fr: "par passage (45 min)",
      en: "per visit (45 min)"
    },
    features: {
      fr: [
        "Nourrissage complet et renouvellement d'eau fraîche",
        "Nettoyage soigneux de la litière ou cage de l'animal",
        "Séance de stimulation douce, brossage et câlins",
        "Rapport complet en direct par SMS / Email",
        "Prestations d'entretien gratuites (plantes, boîte aux lettres)"
      ],
      en: [
        "Full food feed and fresh daily water refresh",
        "Careful cleaning of litter box or pet enclosure",
        "Soft stimulation sessions, brushing and warm hugs",
        "Live check-in report via SMS or Email",
        "Complimentary light home-care (plants, mail check)"
      ]
    },
    icon: "Cat",
    popular: false
  },
  {
    id: "p2",
    name: {
      fr: "Visite Active Chien VIP",
      en: "VIP Active Dog Visit"
    },
    price: "30",
    period: {
      fr: "par passage (1h)",
      en: "per visit (1h)"
    },
    features: {
      fr: [
        "Balade active de 45 minutes (adaptée météo & rythme)",
        "Nourrissage, friandises de qualité et eau",
        "Rapport de promenade GPS / Photos de l'exercice",
        "Brossage doux pour démêler les nœuds",
        "Jeux d'éveil olfactif et stimulation mentale",
        "Retour calme et câlin à la maison"
      ],
      en: [
        "Active 45-min stroll (tailored to stamina & health)",
        "Feeding, premium snacks, and cold water supply",
        "GPS walking summary & beautiful outdoor photos",
        "Soft sensory brushing & coat detangling",
        "Olfactory stimulation and brain training games",
        "Peaceful transition back home with cuddles"
      ]
    },
    icon: "Dog",
    popular: true
  },
  {
    id: "p3",
    name: {
      fr: "Pension Résidentielle d'Élite",
      en: "Elite House Staycation"
    },
    price: "70",
    period: {
      fr: "par 24 heures de garde",
      en: "per 24 hours care"
    },
    features: {
      fr: [
        "Présence exclusive à votre domicile pour rassurer",
        "Promenades illimitées de jour et début de soirée",
        "Idéal pour animaux âgés, anxieux ou malades",
        "Administration de soins vétérinaires précis si nécessaire",
        "Rapport vidéo immersif matin et soir",
        "Maison surveillée, aérée et courrier géré securisé"
      ],
      en: [
        "Exclusive overnight stay inside your home",
        "Unlimited walks throughout morning, daytime & evening",
        "Formulated for senior, anxious, or recovering pets",
        "Precise veterinarian medication schedules administered",
        "Immersive video report morning and night",
        "Secure property check-ups, plant & mail management"
      ]
    },
    icon: "Home",
    popular: false
  }
];

export const GALLERY_ITEMS = (
  heroUrl: string,
  dogUrl: string,
  catUrl: string,
  clientBerneseUrl?: string,
  clientStreamUrl?: string,
  clientCatUrl?: string,
  clientKittenSofaUrl?: string,
  clientCowCatChairUrl?: string,
  clientWinkingGingerCatUrl?: string,
  clientTabbyTreatStandUrl?: string,
  clientFluffyOrangeCatUrl?: string,
  clientSmilingCreamDogUrl?: string,
  clientFrenchieTongueUrl?: string,
  clientCorgiFloorUrl?: string,
  clientDachshundPairUrl?: string
): GalleryItem[] => {
  const items: GalleryItem[] = [];

  if (clientBerneseUrl) {
    items.push({
      id: "g_client_bernese",
      src: clientBerneseUrl,
      alt: {
        fr: "Nos magnifiques pensionnaires (Bouvier Bernois et ses amis) réunis devant un portail ensoleillé",
        en: "Our stunning guests (Bernese Mountain Dog and friends) enjoying the sunny Riviera courtyard"
      },
      tag: "dogs",
      location: "Villefranche-sur-Mer"
    });
  }

  if (clientStreamUrl) {
    items.push({
      id: "g_client_stream",
      src: clientStreamUrl,
      alt: {
        fr: "Moment de rafraîchissement mérité dans un ruisseau d'eau fraîche pour notre loulou",
        en: "A refreshing swim for our lovely furry guest in a cool mountain stream"
      },
      tag: "dogs",
      location: "Nice Arrière-pays"
    });
  }

  if (clientCatUrl) {
    items.push({
      id: "g_client_cat",
      src: clientCatUrl,
      alt: {
        fr: "Le somptueux chat de race Maine Coon en vacances reposantes sur notre balcon sécurisé",
        en: "Majestic Maine Coon cat enjoying a peaceful balcony staycation on the sun-kissed coast"
      },
      tag: "cats",
      location: "Monaco Larvotto"
    });
  }

  if (clientKittenSofaUrl) {
    items.push({
      id: "g_client_kitten_sofa",
      src: clientKittenSofaUrl,
      alt: {
        fr: "Le doux petit chaton siamois se blottissant sur notre canapé bouclé ultra-confortable",
        en: "The sweet little Siamese-mix kitten cuddles on our cozy cloud sofa under careful eyes"
      },
      tag: "cats",
      location: "Cannes Croisette"
    });
  }

  if (clientCowCatChairUrl) {
    items.push({
      id: "g_client_cow_cat_chair",
      src: clientCowCatChairUrl,
      alt: {
        fr: "Un moment de sérénité pour notre adorable pensionnaire bicolore confortablement installé",
        en: "A peaceful moment for our lovely bicolor guest resting on the elegant dining chair"
      },
      tag: "cats",
      location: "Monaco Condamine"
    });
  }

  if (clientWinkingGingerCatUrl) {
    items.push({
      id: "g_client_winking_ginger_cat",
      src: clientWinkingGingerCatUrl,
      alt: {
        fr: "Un clin d'œil plein d'amour de notre ami roux pendant sa séance quotidienne de caresses",
        en: "A sweet loving wink from our orange tabby friend during their daily petting session"
      },
      tag: "cats",
      location: "Nice Cimiez"
    });
  }

  if (clientTabbyTreatStandUrl) {
    items.push({
      id: "g_client_tabby_treat_stand",
      src: clientTabbyTreatStandUrl,
      alt: {
        fr: "Le petit gourmand de Scottish Fold debout pour sa pause friandise liquide préférée",
        en: "The darling Scottish fold standing high for his favorite premium lickable treat"
      },
      tag: "cats",
      location: "Antibes Juan-les-Pins"
    });
  }

  if (clientFluffyOrangeCatUrl) {
    items.push({
      id: "g_client_fluffy_orange_cat",
      src: clientFluffyOrangeCatUrl,
      alt: {
        fr: "Portrait rapproché de l'irrésistible et très câlin chat roux à long poil de la villa",
        en: "Beautiful close-up of our fluffy long-haired ginger guest looking straight into the lens"
      },
      tag: "cats",
      location: "Cap d'Ail"
    });
  }

  if (clientSmilingCreamDogUrl) {
    items.push({
      id: "g_client_smiling_cream_dog",
      src: clientSmilingCreamDogUrl,
      alt: {
        fr: "Un grand sourire complice pour notre loulou couleur crème alangui sur la pelouse ensoleillée",
        en: "The happiest cream-colored retriever mix playing in the park on a bright summer afternoon"
      },
      tag: "dogs",
      location: "Nice Promenade"
    });
  }

  if (clientFrenchieTongueUrl) {
    items.push({
      id: "g_client_frenchie_tongue",
      src: clientFrenchieTongueUrl,
      alt: {
        fr: "Le pétillant bouledogue français noir respirant la joie de vivre après sa promenade active",
        en: "Our energetic black French bulldog guest looking up with dynamic enthusiasm during his stroll"
      },
      tag: "dogs",
      location: "Monaco Fontvieille"
    });
  }

  if (clientCorgiFloorUrl) {
    items.push({
      id: "g_client_corgi_floor",
      src: clientCorgiFloorUrl,
      alt: {
        fr: "Le craquant petit chiot Corgi sagement allongé sur le parquet après une grosse session d'éveil",
        en: "The adorable Corgi puppy chilling on the warm wood flooring after an active training session"
      },
      tag: "dogs",
      location: "Beaulieu-sur-Mer"
    });
  }

  if (clientDachshundPairUrl) {
    items.push({
      id: "g_client_dachshund_pair",
      src: clientDachshundPairUrl,
      alt: {
        fr: "Le joyeux duo de teckels prenant la pose de profil sur notre banquette extérieure ensoleillée",
        en: "The dynamic dachshund duo smiling together during their beachfront relaxation session"
      },
      tag: "dogs",
      location: "Cannes Midi Beach"
    });
  }

  return [
    ...items,
    {
      id: "g1",
      src: heroUrl,
      alt: {
        fr: "Chien et chat côte à côte devant la mer azur de la Côte d'Azur",
        en: "Dog and cat side by side facing the pristine blue of the French Riviera"
      },
      tag: "moments",
      location: "Nice Promenade"
    },
    {
      id: "g2",
      src: dogUrl,
      alt: {
        fr: "Magnifique petit Spitz câliné à Monaco",
        en: "Adorable little Spitz receiving loving cuddles in Monaco"
      },
      tag: "dogs",
      location: "Monaco Gardens"
    },
    {
      id: "g3",
      src: catUrl,
      alt: {
        fr: "Un magnifique chat persan sur un sofa en velours à Cannes",
        en: "Beautiful Persian cat relaxing on a velvet sofa in Cannes"
      },
      tag: "cats",
      location: "Cannes Croisette"
    },
    {
      id: "g4",
      src: "/src/assets/images/client_dog_stream_1779629873281.png",
      alt: {
        fr: "Chien joyeux qui court dans un parc canin",
        en: "Happy dog playing catching games in a dog park"
      },
      tag: "dogs",
      location: "Nice Cimiez"
    },
    {
      id: "g5",
      src: "/src/assets/images/cat_sitting_1779628668753.png",
      alt: {
        fr: "Chat trop mignon avec des lunettes de soleil au soleil",
        en: "Cool tabby kitten soaking up the Mediterranean sunshine"
      },
      tag: "cats",
      location: "Monaco Condamine"
    },
    {
      id: "g6",
      src: "/src/assets/images/dog_sitting_1779628649488.png",
      alt: {
        fr: "Golden retriever heureux recevant des grattouilles de ventre",
        en: "Thrilled golden retriever getting tummy scratches outdoors"
      },
      tag: "moments",
      location: "Cannes Midi Beach"
    }
  ];
};
