
import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-background z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 md:w-[32rem] md:h-[32rem] bg-blue-200/30 rounded-full filter blur-3xl"></div>
      
      <div className="container-custom relative z-10 text-center px-4 md:px-0">
        <span className="inline-block py-1 px-3 mb-4 text-xs md:text-sm font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
          Prutha Engineering Company
        </span>
        
        <h1 className="heading-xl mb-6 reveal md:text-7xl lg:text-8xl">
          Crafting the future with <br className="hidden sm:block" />
          <span className="text-blue-700">precision</span> and <span className="text-blue-800">innovation</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 reveal">
          Transforming raw materials into sophisticated solutions through state-of-the-art 
          vertical machining centers and expert fabrication techniques.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground rounded-md shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 focus-ring text-base md:text-lg font-medium"
          >
            Get in Touch
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border border-primary/20 rounded-md hover:bg-primary/5 transition-all hover:-translate-y-0.5 focus-ring text-base md:text-lg font-medium"
          >
            Explore Our Services
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus-ring"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
