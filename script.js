
// Make sure the DOM is fully loaded
function initializeWebsite() {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  // Set current year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('open');
      
      // Change icon between menu and x
      const icon = mobileMenuBtn.querySelector('.lucide-icon');
      if (icon) {
        if (mobileNav.classList.contains('open')) {
          icon.setAttribute('data-lucide', 'x');
        } else {
          icon.setAttribute('data-lucide', 'menu');
        }
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
    });
  
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        const icon = mobileMenuBtn.querySelector('.lucide-icon');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }
      });
    });
  }
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Scroll down button
  const scrollDownBtn = document.getElementById('scroll-down-btn');
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Sample project data
  const projectsData = [
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
  
  // Render projects
  function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = `project-card reveal`;
      projectCard.setAttribute('data-category', project.category);
      projectCard.style.animationDelay = `${index * 100}ms`;
      
      projectCard.innerHTML = `
        <div class="project-image ${project.image} bg-grain">
          <div class="image-placeholder"></div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3>${project.title}</h3>
            <span class="project-category ${project.category === 'vmc' ? 'blue' : 'steel'}">
              ${project.category === 'vmc' ? 'VMC' : 'Fabrication'}
            </span>
          </div>
          <p>${project.description}</p>
          <div class="project-footer">
            <button class="link-arrow">
              View Project Details
              <svg class="arrow-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
    
    // Initialize scroll animations after adding projects
    initIntersectionObserver();
  }
  
  // Filter projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter projects
      if (filter === 'all') {
        renderProjects(projectsData);
      } else {
        const filteredProjects = projectsData.filter(project => project.category === filter);
        renderProjects(filteredProjects);
      }
    });
  });
  
  // Initialize projects
  renderProjects(projectsData);
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const toast = document.getElementById('toast');
  
  if (contactForm && submitBtn && toast) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show processing state
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Processing...';
      
      // Simulate form submission (would be replaced with actual AJAX in production)
      setTimeout(() => {
        // Show success message
        toast.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i data-lucide="send" class="lucide-icon"></i>';
        if (window.lucide) {
          window.lucide.createIcons();
        }
        
        // Hide toast after 5 seconds
        setTimeout(() => {
          toast.classList.remove('show');
        }, 5000);
      }, 1500);
    });
  }
  
  // Intersection Observer for scroll animations
  function initIntersectionObserver() {
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
  }
  
  // Initialize scroll animations
  initIntersectionObserver();
}

// Check if document is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
  // If DOMContentLoaded has already fired, run initializeWebsite immediately
  setTimeout(initializeWebsite, 0);
}

// Add a fallback to ensure the website initializes
window.addEventListener('load', initializeWebsite);

// For React applications, also check for root element changes
const observer = new MutationObserver(function(mutations) {
  if (document.getElementById('root') && document.getElementById('root').children.length > 0) {
    initializeWebsite();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
