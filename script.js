
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.menu-icon');

  menuBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-nav a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      menuBtn.classList.remove('active');
    });
  });

  // Scroll to sections
  const scrollDownBtn = document.querySelector('.scroll-down-btn');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Reveal animations
  const revealElements = document.querySelectorAll('.reveal');
  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
      const revealTop = element.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  window.addEventListener('load', checkReveal);

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.querySelector('.projects-grid');

  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Precision Milled Components',
      category: 'vmc',
      description: 'High-precision aluminum components for aerospace applications with tight tolerances.',
      image: 'bg-steel-200'
    },
    {
      id: 2,
      title: 'Custom Steel Fabrication',
      category: 'fabrication',
      description: 'Custom steel structures designed and fabricated for industrial equipment.',
      image: 'bg-steel-300'
    },
    {
      id: 3,
      title: 'CNC Machined Parts',
      category: 'vmc',
      description: 'Complex geometries machined from solid blocks for the automotive industry.',
      image: 'bg-blue-200'
    },
    {
      id: 4,
      title: 'Sheet Metal Assembly',
      category: 'fabrication',
      description: 'Precision sheet metal components with complex bends and welded assemblies.',
      image: 'bg-blue-300'
    },
    {
      id: 5,
      title: 'Multi-axis Machining',
      category: 'vmc',
      description: 'Multi-axis machined components with intricate features and surface finishes.',
      image: 'bg-steel-200'
    },
    {
      id: 6,
      title: 'Metal Framework',
      category: 'fabrication',
      description: 'Structural steel framework with precision welding and surface treatments.',
      image: 'bg-blue-200'
    }
  ];

  // Generate project cards
  function renderProjects(projectsToRender) {
    projectsGrid.innerHTML = '';
    
    projectsToRender.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card reveal';
      projectCard.style.animationDelay = `${index * 100}ms`;
      
      const bgColor = project.category === 'vmc' ? 'bg-blue-50' : 'bg-gray-50';
      const textColor = project.category === 'vmc' ? 'text-blue-700' : 'text-gray-700';
      const categoryLabel = project.category === 'vmc' ? 'VMC' : 'Fabrication';
      
      projectCard.innerHTML = `
        <div class="project-image ${project.image}"></div>
        <div class="project-content">
          <div class="project-header">
            <h3>${project.title}</h3>
            <span class="project-category ${bgColor} ${textColor}">${categoryLabel}</span>
          </div>
          <p>${project.description}</p>
          <div class="project-footer">
            <a href="#" class="link-with-arrow">
              View Project Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
    
    // Re-check reveal elements after rendering projects
    checkReveal();
  }

  // Initialize with all projects
  renderProjects(projects);

  // Filter projects
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active filter button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      // Filter projects
      let filteredProjects = projects;
      if (filterValue !== 'all') {
        filteredProjects = projects.filter(project => project.category === filterValue);
      }
      
      // Render filtered projects
      renderProjects(filteredProjects);
    });
  });

  // Add services data
  const servicesGrid = document.querySelector('.services-grid');
  const services = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="14.31" y1="8" x2="20.05" y2="17.94"/><line x1="9.69" y1="8" x2="21.17" y2="8"/><line x1="7.38" y1="12" x2="13.12" y2="2.06"/><line x1="9.69" y1="16" x2="3.95" y2="6.06"/><line x1="14.31" y1="16" x2="2.83" y2="16"/><line x1="16.62" y1="12" x2="10.88" y2="21.94"/></svg>',
      title: 'Vertical Machining',
      description: 'Precision machining with our state-of-the-art vertical machining centers, capable of handling complex geometries and tight tolerances.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>',
      title: 'Metal Fabrication',
      description: 'Custom metal fabrication services including cutting, bending, welding, and assembly for various industrial applications.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
      title: 'Engineering Design',
      description: 'Comprehensive engineering design services including CAD modeling, analysis, and optimization for manufacturability.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
      title: 'Prototype Development',
      description: 'Rapid prototype development services to help you test and refine your designs before moving to full production.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5v2"/><path d="M15 11v2"/><path d="M15 17v2"/><path d="M19 5h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/></svg>',
      title: 'Surface Treatments',
      description: 'Professional surface treatment solutions including anodizing, powder coating, plating, and other finishes for various materials.'
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
      title: 'Custom Solutions',
      description: 'Tailored engineering solutions for specialized industrial requirements and unique project challenges.'
    }
  ];

  // Render services
  if (servicesGrid) {
    services.forEach((service, index) => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card reveal';
      serviceCard.style.animationDelay = `${index * 100}ms`;
      
      serviceCard.innerHTML = `
        <div class="service-icon">
          ${service.icon}
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      `;
      
      servicesGrid.appendChild(serviceCard);
    });
  }

  // Add CSS for service cards
  const style = document.createElement('style');
  style.textContent = `
    .service-card {
      background-color: white;
      padding: 2rem;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    
    .service-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
      transform: translateY(-4px);
    }
    
    .service-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      background-color: var(--blue-50);
      border-radius: 0.75rem;
      margin-bottom: 1.5rem;
      color: var(--blue-700);
    }
    
    .service-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .service-card p {
      color: var(--muted-foreground);
    }
    
    .project-card {
      overflow: hidden;
      border-radius: var(--radius);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      background-color: white;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }
    
    .project-card:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transform: translateY(-4px);
    }
    
    .project-image {
      height: 200px;
      position: relative;
    }
    
    .bg-steel-200 {
      background-color: #e2e8f0;
    }
    
    .bg-steel-300 {
      background-color: #cbd5e1;
    }
    
    .bg-blue-200 {
      background-color: #bfdbfe;
    }
    
    .bg-blue-300 {
      background-color: #93c5fd;
    }
    
    .project-content {
      padding: 1.5rem;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }
    
    .project-header h3 {
      font-size: 1.125rem;
      font-weight: 600;
    }
    
    .project-category {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
    }
    
    .bg-blue-50 {
      background-color: #eff6ff;
    }
    
    .text-blue-700 {
      color: #1d4ed8;
    }
    
    .bg-gray-50 {
      background-color: #f9fafb;
    }
    
    .text-gray-700 {
      color: #374151;
    }
    
    .project-content p {
      color: var(--muted-foreground);
      margin-bottom: 1rem;
    }
    
    .project-footer {
      padding-top: 1rem;
      border-top: 1px solid var(--border);
    }
  `;
  document.head.appendChild(style);

  // Add contact info content
  const contactInfo = document.querySelector('.contact-info');
  if (contactInfo) {
    contactInfo.innerHTML = `
      <h3>Contact Information</h3>
      <div class="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <div>
          <h4>Address</h4>
          <p>123 Engineering Way, Techville, TX 75001</p>
        </div>
      </div>
      <div class="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <div>
          <h4>Phone</h4>
          <p>(555) 123-4567</p>
        </div>
      </div>
      <div class="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <div>
          <h4>Email</h4>
          <p>info@pruthaengineering.com</p>
        </div>
      </div>
      <div class="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <div>
          <h4>Hours</h4>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    `;
  }

  // Add contact form content
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.innerHTML = `
      <h3>Send us a message</h3>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
      </div>
      <button type="submit" class="primary-btn w-full">Send Message</button>
    `;
  }

  // Add footer contact info
  const footerContact = document.querySelector('.footer-contact');
  if (footerContact) {
    footerContact.innerHTML = `
      <h3>Contact Us</h3>
      <div class="footer-contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <span>123 Engineering Way, Techville, TX 75001</span>
      </div>
      <div class="footer-contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>(555) 123-4567</span>
      </div>
      <div class="footer-contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>info@pruthaengineering.com</span>
      </div>
    `;
  }

  // Add form and contact styles
  const formStyle = document.createElement('style');
  formStyle.textContent = `
    .contact-item {
      display: flex;
      margin-bottom: 1.5rem;
    }
    
    .contact-item svg {
      flex-shrink: 0;
      margin-right: 1rem;
      color: var(--blue-700);
    }
    
    .contact-item h4 {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .contact-item p {
      color: var(--muted-foreground);
    }
    
    .contact-info h3, .contact-form h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.25rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .form-group input, .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background-color: white;
    }
    
    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--blue-700);
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }
    
    .w-full {
      width: 100%;
    }
    
    .footer-contact-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: #94a3b8;
    }
    
    .footer-contact-item svg {
      margin-right: 0.75rem;
    }
  `;
  document.head.appendChild(formStyle);
});
