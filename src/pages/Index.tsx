
import { useEffect } from "react";
import { Typography, Layout, Anchor } from "antd";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const { Content } = Layout;
const { Link } = Anchor;

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
    <Layout>
      <style>
        {`
          .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .reveal.active {
            opacity: 1;
            transform: translateY(0);
          }
          
          .section-padding {
            padding: 64px 24px;
          }
          
          .anchor-container {
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1000;
          }
          
          @media (max-width: 768px) {
            .anchor-container {
              display: none;
            }
          }
        `}
      </style>
      
      <div className="anchor-container">
        <Anchor>
          <Link href="#hero" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#services" title="Services" />
          <Link href="#projects" title="Projects" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </div>
      
      <Content>
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
      </Content>
    </Layout>
  );
};

export default Index;
