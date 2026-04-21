import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowRight, Instagram, Globe } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] pt-24 pb-12 text-[#999999]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* About Column */}
        <div className="space-y-6">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setPage('home')}
          >
            <div className="flex flex-col -space-y-1">
              <span className="text-white font-extrabold text-3xl tracking-tighter uppercase italic">Orlando Dental Care</span>
              <span className="text-primary text-[10px] tracking-[0.3em] font-black uppercase">Dentist Studio</span>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed font-bold uppercase tracking-wider opacity-80">
            Professional dental services in Orlando, FL. Dr. A. Viviana Santos provides world-class smile transformations with a patient-first approach.
          </p>
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-[11px] font-bold text-white/70">
              <Phone size={14} className="text-primary" />
              (407) 273-6620
            </div>
            <div className="flex items-center gap-3 text-[11px] font-bold text-white/70">
              <MapPin size={14} className="text-primary" />
              1000 N Alafaya Trail #100, Orlando
            </div>
          </div>
          <div className="pt-4 flex items-center gap-4 text-white">
            <Facebook size={14} className="hover:text-primary cursor-pointer transition-colors" />
            <Instagram size={14} className="hover:text-primary cursor-pointer transition-colors" />
            <Globe size={14} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Departments */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 border-b-2 border-primary inline-block pb-1">
            Departments
          </h4>
          <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest">
            {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Oral Surgery', 'Pediatric Dentistry'].map((item) => (
              <li key={item} className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
                <ArrowRight size={12} className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 border-b-2 border-primary inline-block pb-1">
            Information
          </h4>
          <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest">
            {[
              { label: 'About Us', value: 'about' as Page },
              { label: 'Our Services', value: 'services' as Page },
              { label: 'Contact Us', value: 'contact' as Page },
              { label: 'Faq', value: 'home' as Page },
              { label: 'Login', value: 'home' as Page }
            ].map((item) => (
              <li key={item.label} className="group cursor-pointer hover:text-primary transition-colors">
                <button 
                  onClick={() => setPage(item.value)}
                  className="flex items-center gap-2"
                >
                  <ArrowRight size={12} className="text-primary" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
           <h4 className="text-white font-black text-sm uppercase tracking-widest mb-10 border-b-2 border-primary inline-block pb-1">
             Newsletter
           </h4>
           <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
             Join our newsletter and keep up to date with health and dental treatments.
           </p>
           <div className="flex bg-white/5 p-1 rounded-sm border border-white/10">
              <input 
                type="email" 
                placeholder="YOUR E-MAIL" 
                className="bg-transparent border-none px-4 py-2 text-[10px] font-black w-full outline-none text-white placeholder:text-gray-600"
              />
              <button className="bg-primary text-white p-2 hover:bg-primary-dark transition-all">
                 <ArrowRight size={16} />
              </button>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-widest">
          © {currentYear} <span className="text-white">Orange County Dentist</span>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
          <span className="hover:text-primary cursor-pointer">Conditions</span>
          <span className="hover:text-primary cursor-pointer">Terms of Use</span>
          <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
