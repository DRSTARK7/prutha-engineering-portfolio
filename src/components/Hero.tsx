
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-background z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-steel-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container-custom relative z-10 text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
          Precision Engineering & Fabrication
        </span>
        
        <h1 
          ref={titleRef} 
          className="heading-xl mb-6 reveal"
          style={{ animationDelay: "200ms" }}
        >
          Crafting the future with <br />
          <span className="text-blue-700">precision</span> and <span className="text-steel-700">innovation</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8 reveal" style={{ animationDelay: "400ms" }}>
          Transforming raw materials into sophisticated solutions through state-of-the-art 
          vertical machining centers and expert fabrication techniques.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{ animationDelay: "600ms" }}>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 focus-ring"
          >
            Get in Touch
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 border border-primary/20 rounded-md hover:bg-primary/5 transition-all hover:-translate-y-0.5 focus-ring"
          >
            Explore Our Services
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float focus-ring"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} className="text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
