export type Page = 'home' | 'about' | 'services' | 'gallery' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Dentist {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}
