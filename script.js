
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const scrollDownBtn = document.getElementById('scroll-down-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('toast');
  const currentYearSpan = document.getElementById('currentYear');
  
  // Set current year
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Observe elements for reveal animations
  const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
  };
  
  // Handle navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    mobileNav.classList.toggle('open');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  };
  
  // Scroll to next section
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Filter projects
  const filterProjects = (category) => {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    projectCards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };
  
  // Show toast notification
  const showToast = (duration = 5000) => {
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  };
  
  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Change button text to indicate loading
    submitBtn.innerHTML = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate form submission (would be replaced with actual API call)
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Reset button
      submitBtn.innerHTML = 'Send Message <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';
      submitBtn.disabled = false;
      
      // Show success message
      showToast();
    }, 1500);
  };
  
  // Add event listeners
  window.addEventListener('scroll', handleScroll);
  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));
  scrollDownBtn.addEventListener('click', scrollToNextSection);
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      filterProjects(btn.dataset.filter);
    });
  });
  
  contactForm.addEventListener('submit', handleFormSubmit);
  
  // Initialize
  handleScroll();
  observeElements();
  
  // Create images folder and placeholder images
  const createImageFolder = () => {
    console.log('In a real implementation, create the images folder for the project images.');
    // This would typically be done server-side or during project setup
    
    // Simulated: Show image placeholders
    document.querySelectorAll('.image-placeholder, .project-image').forEach(placeholder => {
      // In a real implementation, these would be actual images
      placeholder.style.backgroundColor = '#b0c4de';
      placeholder.style.minHeight = '200px';
    });
  };
  
  createImageFolder();
});
