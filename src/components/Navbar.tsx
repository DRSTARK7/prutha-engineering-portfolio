
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-custom">
        <a href="#" className="logo">Prutha <span>Engineering</span></a>
        
        <nav className="desktop-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#" className="btn-primary">Request Quote</a>
        </nav>
        
        <button className="mobile-menu-btn" id="mobile-menu-btn" onClick={toggleMenu}>
          <i data-lucide={isMenuOpen ? 'x' : 'menu'} className="lucide-icon"></i>
        </button>
        
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`} id="mobile-nav">
          <div className="mobile-nav-links">
            <a href="#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Request Quote</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
