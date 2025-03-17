
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">Prutha <span>Engineering</span></a>
            <p>Delivering precision machining and metal fabrication services with exceptional quality and reliability since 1995.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i data-lucide="facebook" className="lucide-icon"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i data-lucide="linkedin" className="lucide-icon"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i data-lucide="twitter" className="lucide-icon"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i data-lucide="instagram" className="lucide-icon"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Request Quote</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#services">CNC Machining</a></li>
              <li><a href="#services">Metal Fabrication</a></li>
              <li><a href="#services">Welding & Assembly</a></li>
              <li><a href="#services">Engineering Support</a></li>
              <li><a href="#services">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <span>Address:</span>
                <span>1234 Industrial Parkway, Metropolis, CA 90001</span>
              </li>
              <li>
                <span>Phone:</span>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:info@pruthaengineering.com">info@pruthaengineering.com</a>
              </li>
              <li>
                <span>Hours:</span>
                <span>Mon-Fri: 8am-5pm, Sat: 9am-1pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© <span id="current-year">{currentYear}</span> Prutha Engineering Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
