
import React from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="bg-gradient"></div>
      <div className="decorative-element top-left"></div>
      <div className="decorative-element bottom-right"></div>
      
      <div className="hero-content">
        <div className="badge">Premium Engineering Solutions</div>
        <h1 className="heading-xl">Crafting the future with <span className="text-accent">precision</span> and <span className="text-accent-secondary">innovation</span></h1>
        <p className="hero-description">We specialize in high-precision machining and metal fabrication services for industries requiring exceptional quality and reliability.</p>
        
        <div className="button-group">
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a href="#services" className="btn-secondary">Our Services</a>
        </div>
      </div>
      
      <button className="scroll-down-btn" id="scroll-down-btn" onClick={scrollToAbout}>
        <i data-lucide="chevron-down" className="lucide-icon"></i>
      </button>
    </section>
  );
};

export default Hero;
