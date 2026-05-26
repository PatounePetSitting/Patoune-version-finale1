export interface BlogPost {
  id: string;
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  keywords: string[];
  date: string;
  readTime: string;
  category: {
    fr: string;
    en: string;
  };
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  petName: string;
  petType: 'dog' | 'cat' | 'other';
  comment: {
    fr: string;
    en: string;
  };
  date: string;
}

export interface PricingTier {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  price: string;
  period: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
  icon: string;
  popular?: boolean;
}

export interface Booking {
  id: string;
  ownerName: string;
  petName: string;
  petType: 'dog' | 'cat' | 'other';
  email: string;
  phone: string;
  city: 'Nice' | 'Cannes' | 'Monaco' | 'Villefranche-sur-Mer' | 'Antibes';
  startDate: string;
  endDate: string;
  serviceType: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: {
    fr: string;
    en: string;
  };
  tag: 'dogs' | 'cats' | 'moments';
  location: string;
}
