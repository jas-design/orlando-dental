import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${currentPage !== 'home' ? 'bg-[#6c6c6c]' : ''}`}>
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-3">
        <a 
          href="tel:+14072736620" 
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </div>
  );
}
