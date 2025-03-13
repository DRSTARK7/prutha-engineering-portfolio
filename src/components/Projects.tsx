
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Sample project data with real images
    const sampleProjects: Project[] = [
      {
        id: 1,
        title: 'Precision Milled Components',
        category: 'vmc',
        description: 'High-precision aluminum components for aerospace applications with tight tolerances.',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 2,
        title: 'Custom Steel Fabrication',
        category: 'fabrication',
        description: 'Custom steel structures designed and fabricated for industrial equipment.',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 3,
        title: 'CNC Machined Parts',
        category: 'vmc',
        description: 'Complex geometries machined from solid blocks for the automotive industry.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 4,
        title: 'Sheet Metal Assembly',
        category: 'fabrication',
        description: 'Precision sheet metal components with complex bends and welded assemblies.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 5,
        title: 'Multi-axis Machining',
        category: 'vmc',
        description: 'Multi-axis machined components with intricate features and surface finishes.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 6,
        title: 'Metal Framework',
        category: 'fabrication',
        description: 'Structural steel framework with precision welding and surface treatments.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
      }
    ];

    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
  }, []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

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

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
            Our Projects
          </span>
          <h2 className="heading-lg mb-6 reveal">Featured work showcasing our capabilities</h2>
          <p className="text-lg text-muted-foreground mb-8 reveal">
            Explore our portfolio of precision fabrication and machining projects across various industries.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
            <button
              onClick={() => filterProjects('all')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => filterProjects('vmc')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeFilter === 'vmc'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              VMC Machining
            </button>
            <button
              onClick={() => filterProjects('fabrication')}
              className={`px-4 py-2 rounded-md transition-all ${
                activeFilter === 'fabrication'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              Fabrication
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg shadow-sm border border-border hover:shadow-md transition-all reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <span className={`text-xs font-semibold py-1 px-2 rounded-full ${
                    project.category === 'vmc' 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'bg-steel-50 text-steel-700'
                  }`}>
                    {project.category === 'vmc' ? 'VMC' : 'Fabrication'}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <button className="text-blue-700 hover:text-blue-800 font-medium text-sm flex items-center">
                    View Project Details
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
