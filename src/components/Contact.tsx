
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="section" id="contact">
      <div className="container-custom">
        <div className="section-header text-center">
          <span className="badge">Contact Us</span>
          <h2 className="heading-lg">Get in Touch with Our Team</h2>
          <p className="section-description">Reach out to discuss your project requirements or request a quote for our precision engineering services.</p>
        </div>
        
        <div className="contact-grid">
          <div className="info-card">
            <h3 className="heading-sm">Contact Information</h3>
            <p>We're here to assist you with any questions about our services or to discuss your project requirements.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon blue">
                  <i data-lucide="map-pin" className="lucide-icon"></i>
                </div>
                <div>
                  <h4>Our Location</h4>
                  <p>1234 Industrial Parkway<br />Metropolis, CA 90001</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon blue">
                  <i data-lucide="phone" className="lucide-icon"></i>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon blue">
                  <i data-lucide="mail" className="lucide-icon"></i>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>info@pruthaengineering.com</p>
                </div>
              </div>
            </div>
            
            <div className="business-hours">
              <h4>Business Hours</h4>
              <div className="hours-item">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Saturday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
          
          <div className="form-card">
            <h3 className="heading-sm">Send Us a Message</h3>
            <p>Complete the form below and we'll get back to you as soon as possible.</p>
            
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name <span className="required">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="CNC Machining">CNC Machining</option>
                  <option value="Metal Fabrication">Metal Fabrication</option>
                  <option value="Welding & Assembly">Welding & Assembly</option>
                  <option value="Engineering Support">Engineering Support</option>
                  <option value="Other">Other Services</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message <span className="required">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary" 
                id="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Send Message'}
                {!isSubmitting && <i data-lucide="send" className="lucide-icon ml-2"></i>}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className={`toast ${showToast ? 'show' : ''}`} id="toast">
        <div className="toast-content">
          <h4 className="toast-title">Message Sent!</h4>
          <p className="toast-message">Thank you for contacting us. We'll get back to you soon.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
