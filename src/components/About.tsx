
import React from 'react';

const About = () => {
  return (
    <section className="section bg-light" id="about">
      <div className="container-custom">
        <div className="section-header text-center">
          <span className="badge">About Us</span>
          <h2 className="heading-lg">Excellence in Engineering Since 1995</h2>
          <p className="section-description">We combine cutting-edge technology with decades of manufacturing expertise to deliver exceptional results for our clients.</p>
        </div>
        
        <div className="feature-grid reveal">
          <div className="feature-card">
            <div className="feature-icon">
              <i data-lucide="settings" className="lucide-icon"></i>
            </div>
            <h3>Precision Machining</h3>
            <p>High-tolerance parts with exceptional surface finishes and dimensional accuracy.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i data-lucide="layers" className="lucide-icon"></i>
            </div>
            <h3>Metal Fabrication</h3>
            <p>Custom sheet metal and structural steel fabrication with precision welding.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i data-lucide="shield" className="lucide-icon"></i>
            </div>
            <h3>Quality Assurance</h3>
            <p>Rigorous inspection processes ensuring consistent quality across all projects.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i data-lucide="users" className="lucide-icon"></i>
            </div>
            <h3>Expert Team</h3>
            <p>Skilled engineers and technicians with decades of combined experience.</p>
          </div>
        </div>
        
        <div className="about-story">
          <div className="about-images reveal">
            <div className="image-main bg-steel-300 bg-grain">
              <div className="image-placeholder"></div>
            </div>
            <div className="image-secondary bg-blue-200 bg-grain">
              <div className="image-placeholder"></div>
            </div>
          </div>
          
          <div className="about-content reveal">
            <h3 className="heading-md">Our Commitment to Excellence</h3>
            <p>Founded in 1995, Prutha Engineering has established itself as a leader in precision manufacturing and metal fabrication. Our state-of-the-art facility equipped with advanced CNC machinery enables us to handle complex projects with exceptional accuracy.</p>
            <p>We take pride in our team of skilled engineers and technicians who bring decades of experience to every project. Our commitment to quality, precision, and customer satisfaction has earned us a reputation for excellence in the industry.</p>
            <a href="#contact" className="link-arrow">
              Learn More About Our Story
              <i data-lucide="arrow-right" className="lucide-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
