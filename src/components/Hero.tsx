
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
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-grid">
      {/* Hero background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80)',
          filter: 'brightness(0.4) contrast(1.1)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 via-transparent to-background z-0"></div>
      
      {/* Decorative elements - enhanced for desktop */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-steel-200/30 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container-custom relative z-10 text-center px-4 md:px-0">
        <span className="inline-block py-1 px-3 mb-4 text-xs md:text-sm font-semibold text-blue-300 bg-blue-950/50 rounded-full reveal">
          Prutha Engineering Company
        </span>
        
        <h1 
          ref={titleRef} 
          className="heading-xl mb-6 reveal text-white md:text-7xl lg:text-8xl"
          style={{ animationDelay: "200ms" }}
        >
          Crafting the future with <br className="hidden sm:block" />
          <span className="text-blue-300">precision</span> and <span className="text-steel-300">innovation</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8 reveal" style={{ animationDelay: "400ms" }}>
          Transforming raw materials into sophisticated solutions through state-of-the-art 
          vertical machining centers and expert fabrication techniques.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal" style={{ animationDelay: "600ms" }}>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-blue-600 text-white rounded-md shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 focus-ring text-base md:text-lg font-medium"
          >
            Get in Touch
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-blue-400/30 text-white rounded-md hover:bg-blue-400/10 transition-all hover:-translate-y-0.5 focus-ring text-base md:text-lg font-medium"
          >
            Explore Our Services
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float focus-ring text-white"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="text-white" />
      </button>
    </section>
  );
};

export default Hero;
