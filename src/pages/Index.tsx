
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for scroll animations
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

    // Observe all elements with the 'reveal' class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Cleanup on component unmount
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-expo-out py-4 px-6 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container-custom flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <span className="font-display font-bold text-2xl tracking-tight">
              Prutha<span className="text-blue-700">Engineering</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-medium transition-colors hover:text-primary focus-ring">Home</a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary focus-ring">About</a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary focus-ring">Services</a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary focus-ring">Projects</a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary focus-ring">Contact</a>
            <a href="#contact" className="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 focus-ring">
              Get Started
            </a>
          </div>

          <button className="md:hidden focus-ring rounded-full p-2" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-background z-0"></div>
        <div className="container-custom relative z-10 text-center px-4 md:px-0">
          <span className="inline-block py-1 px-3 mb-4 text-xs md:text-sm font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
            Prutha Engineering Company
          </span>
          
          <h1 className="heading-xl mb-6 reveal md:text-7xl lg:text-8xl">
            Crafting the future with <br className="hidden sm:block" />
            <span className="text-blue-700">precision</span> and <span className="text-steel-700">innovation</span>
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
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
              About Us
            </span>
            <h2 className="text-4xl font-bold mb-6 reveal">Precision engineered for excellence</h2>
            <p className="text-lg text-gray-600 reveal">
              With over two decades of experience, we specialize in high-precision fabrication and 
              vertical machining center operations, delivering exceptional quality and innovative solutions 
              for diverse industrial needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
              Our Services
            </span>
            <h2 className="text-4xl font-bold mb-6 reveal">Comprehensive fabrication and machining solutions</h2>
            <p className="text-lg text-gray-600 reveal">
              We offer a wide range of precision manufacturing services utilizing state-of-the-art 
              vertical machining centers and advanced fabrication technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
              Our Projects
            </span>
            <h2 className="text-4xl font-bold mb-6 reveal">Featured work showcasing our capabilities</h2>
            <p className="text-lg text-gray-600 reveal">
              Explore our portfolio of precision fabrication and machining projects across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
              Contact Us
            </span>
            <h2 className="text-4xl font-bold mb-6 reveal">Get in touch with our team</h2>
            <p className="text-lg text-gray-600 reveal">
              Have a project in mind or need a quote? Reach out to us and one of our experts will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Prutha Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
