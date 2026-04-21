import { useState, useEffect } from 'react';
import { Phone, Menu, X, Facebook, Twitter, ChevronDown, Search, Globe, Instagram } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Header({ currentPage, setPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => setPage('home')}
        >
          <img 
            src="images/oc_smiles_brand_horizontal26f7.png" 
            alt="Orange County Smiles Logo" 
            className="{`h-12 md:h-16 w-auto transition-all `}"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setPage(link.value)}
              className={`text-[13px] font-bold transition-all hover:text-primary relative group cursor-pointer ${
                currentPage === 'home' ? (isScrolled ? 'text-navy' : 'text-white') : 'text-[#1a2333]'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                currentPage === link.value ? 'w-full' : ''
              } ${currentPage === 'home' ? 'bg-primary' : 'bg-[#737778]'}`}></span>
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className={`hidden xl:flex flex-col items-end mr-2 transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
            <span className="text-[10px] font-bold uppercase opacity-70">Emergency Call</span>
            <span className="text-sm font-black">(407) 273-6620</span>
          </div>
          <button 
            onClick={() => setPage('contact')}
            className={`hidden md:flex dentia-button !bg-primary !border-none !rounded-full !px-8 !py-3 !text-[13px] !font-bold !normal-case tracking-normal hover:!bg-primary-dark shadow-orange-200 shadow-lg active:scale-95 transition-all ${
              !isScrolled && 'shadow-none'
            }`}
          >
            Book Appointment
          </button>
          
          <button 
            className={`p-2 transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-navy/95 flex flex-col items-center justify-center text-white backdrop-blur-md">
           <button 
             className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors"
             onClick={() => setIsMenuOpen(false)}
           >
              <X size={32} />
           </button>
           <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <button 
                   key={link.label}
                   onClick={() => {
                     setPage(link.value);
                     setIsMenuOpen(false);
                   }}
                   className="text-2xl font-black hover:text-primary transition-colors tracking-tight"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setPage('contact');
                  setIsMenuOpen(false);
                }}
                className="mt-4 bg-primary text-white text-lg font-bold px-10 py-4 rounded-full"
              >
                Book Appointment
              </button>
           </nav>
        </div>
      )}
    </header>
  );
}
