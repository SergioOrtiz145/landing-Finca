import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-verde-dark/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* TODO: Reemplazar con el nombre real de la finca */}
        <h1 className={`font-display text-2xl md:text-3xl font-bold ${
          isScrolled ? 'text-crema-light' : 'text-white text-shadow'
        }`}>
          Finca San Marcos
        </h1>
        
        <button
          onClick={scrollToContact}
          className={`bg-verde hover:bg-verde-light text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg tracking-wider uppercase text-sm`}
        >
          Reservar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
