
import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Project data
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

  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Apply filter when it changes
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => project.category === filter);
      setFilteredProjects(filtered);
    }
  }, [filter]);

  // Initialize intersection observer for animations
  useEffect(() => {
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

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section className="section bg-light" id="projects">
      <div className="container-custom">
        <div className="section-header text-center">
          <span className="badge">Our Projects</span>
          <h2 className="heading-lg">Featured Engineering Projects</h2>
          <p className="section-description">Explore our portfolio of precision machining and fabrication projects delivered to clients across various industries.</p>
        </div>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'vmc' ? 'active' : ''}`} 
            onClick={() => setFilter('vmc')}
          >
            VMC Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'fabrication' ? 'active' : ''}`} 
            onClick={() => setFilter('fabrication')}
          >
            Fabrication Projects
          </button>
        </div>
        
        <div className="projects-grid" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card reveal`} 
              data-category={project.category}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`project-image ${project.image} bg-grain`}>
                <div className="image-placeholder"></div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-category ${project.category === 'vmc' ? 'blue' : 'steel'}`}>
                    {project.category === 'vmc' ? 'VMC' : 'Fabrication'}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="project-footer">
                  <button className="link-arrow">
                    View Project Details
                    <svg className="arrow-icon" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
