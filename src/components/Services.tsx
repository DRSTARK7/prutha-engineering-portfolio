
import React from 'react';

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container-custom">
        <div className="section-header text-center">
          <span className="badge">Our Services</span>
          <h2 className="heading-lg">Comprehensive Engineering Solutions</h2>
          <p className="section-description">We offer a wide range of precision machining and fabrication services to meet the diverse needs of our clients across multiple industries.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-header blue">
              <div className="service-icon">
                <i data-lucide="cog" className="lucide-icon"></i>
              </div>
            </div>
            <div className="service-content">
              <h3>CNC Machining</h3>
              <p>High-precision multi-axis CNC machining for complex parts with tight tolerances.</p>
              <ul className="service-list">
                <li>3, 4 & 5-axis machining</li>
                <li>Prototyping & production</li>
                <li>Complex geometries</li>
                <li>Various materials</li>
              </ul>
            </div>
          </div>
          
          <div className="service-card reveal">
            <div className="service-header steel">
              <div className="service-icon">
                <i data-lucide="tool" className="lucide-icon"></i>
              </div>
            </div>
            <div className="service-content">
              <h3>Metal Fabrication</h3>
              <p>Custom sheet metal and structural steel fabrication with precision finishing.</p>
              <ul className="service-list">
                <li>Laser & plasma cutting</li>
                <li>Precision bending</li>
                <li>Custom assemblies</li>
                <li>Prototype to production</li>
              </ul>
            </div>
          </div>
          
          <div className="service-card reveal">
            <div className="service-header blue">
              <div className="service-icon">
                <i data-lucide="zap" className="lucide-icon"></i>
              </div>
            </div>
            <div className="service-content">
              <h3>Welding & Assembly</h3>
              <p>Advanced welding processes and assembly services for complete fabrications.</p>
              <ul className="service-list">
                <li>TIG, MIG & stick welding</li>
                <li>Certified welders</li>
                <li>Complex assemblies</li>
                <li>Quality inspections</li>
              </ul>
            </div>
          </div>
          
          <div className="service-card reveal">
            <div className="service-header steel">
              <div className="service-icon">
                <i data-lucide="file-text" className="lucide-icon"></i>
              </div>
            </div>
            <div className="service-content">
              <h3>Engineering Support</h3>
              <p>Comprehensive engineering support from concept development to final production.</p>
              <ul className="service-list">
                <li>Design for manufacturing</li>
                <li>Prototyping support</li>
                <li>Material selection</li>
                <li>Production optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="custom-solutions reveal">
          <div className="solutions-content">
            <h3 className="heading-md">Custom Solutions for Every Industry</h3>
            <p>At Prutha Engineering, we understand that each industry has unique requirements. Our team works closely with clients to develop tailored solutions that meet their specific needs and challenges.</p>
            <a href="#contact" className="link-arrow">
              Discuss Your Project Requirements
              <i data-lucide="arrow-right" className="lucide-icon"></i>
            </a>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-item blue">
              <div className="solution-marker"></div>
              <h4>Aerospace & Defense</h4>
              <p>High-precision components with rigorous quality control and material traceability.</p>
            </div>
            
            <div className="solution-item steel">
              <div className="solution-marker"></div>
              <h4>Medical Equipment</h4>
              <p>Clean room manufacturing capabilities for medical-grade components and assemblies.</p>
            </div>
            
            <div className="solution-item blue">
              <div className="solution-marker"></div>
              <h4>Industrial Machinery</h4>
              <p>Durable components and assemblies for demanding industrial applications.</p>
            </div>
            
            <div className="solution-item steel">
              <div className="solution-marker"></div>
              <h4>Automotive</h4>
              <p>Precision parts with high-volume capabilities and consistent quality control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
