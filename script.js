
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

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
