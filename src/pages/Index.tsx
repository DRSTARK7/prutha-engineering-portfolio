
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

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
    <div>
      <div id="hero">
        <Hero />
      </div>
      <div id="about" className="reveal section-padding">
        <AboutSection />
      </div>
      <div id="services" className="reveal section-padding">
        <ServicesSection />
      </div>
      <div id="projects" className="reveal section-padding">
        <ProjectsSection />
      </div>
      <div id="contact" className="reveal section-padding">
        <ContactSection />
      </div>
      
      {/* Side navigation dots for desktop */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col space-y-4">
          {["hero", "about", "services", "projects", "contact"].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
