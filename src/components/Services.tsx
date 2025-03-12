
import { useEffect } from 'react';
import { Settings, Wrench, Layers, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
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
  }, []);

  const serviceCategories = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'VMC Machining',
      description: 'High-precision vertical machining center operations for complex components.',
      services: [
        'CNC Milling and Turning',
        'Multi-axis Machining',
        'Precision Parts Manufacturing',
        'Prototype Development'
      ],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Metal Fabrication',
      description: 'Comprehensive metal fabrication services from raw materials to finished products.',
      services: [
        'Custom Sheet Metal Fabrication',
        'Welding and Assembly',
        'Laser and Plasma Cutting',
        'Metal Forming and Bending'
      ],
      color: 'bg-steel-50 text-steel-700'
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'Industrial Solutions',
      description: 'End-to-end industrial solutions tailored to specific industry requirements.',
      services: [
        'Production Line Components',
        'Industrial Automation Parts',
        'Custom Machinery Components',
        'Specialized Industrial Fixtures'
      ],
      color: 'bg-blue-50 text-blue-700'
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: 'Engineering Services',
      description: 'Advanced engineering services to optimize designs for manufacturability.',
      services: [
        'Design for Manufacturing (DFM)',
        'Reverse Engineering',
        'Technical Consulting',
        '3D Modeling and CAD Services'
      ],
      color: 'bg-steel-50 text-steel-700'
    }
  ];

  return (
    <section id="services" className="section bg-steel-50/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
            Our Services
          </span>
          <h2 className="heading-lg mb-6 reveal">Comprehensive fabrication and machining solutions</h2>
          <p className="text-lg text-muted-foreground reveal">
            We offer a wide range of precision manufacturing services utilizing state-of-the-art 
            vertical machining centers and advanced fabrication technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-md transition-all reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn("p-4 flex items-center justify-center", category.color)}>
                <div className="w-12 h-12 flex items-center justify-center">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-8 rounded-lg shadow-sm border border-border reveal">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h3 className="heading-md mb-4">Custom solutions for your specific needs</h3>
              <p className="text-muted-foreground mb-6">
                Can't find exactly what you're looking for? Our team specializes in 
                developing custom solutions tailored to your unique requirements.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md shadow-sm hover:shadow transition-all hover:-translate-y-0.5 focus-ring"
              >
                Request Custom Service
              </a>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg">
                <div className="h-1 w-16 bg-blue-600 mb-4"></div>
                <h4 className="font-semibold mb-2">Industry-Specific Solutions</h4>
                <p className="text-sm text-muted-foreground">
                  Specialized manufacturing solutions for aerospace, automotive, medical, and industrial sectors.
                </p>
              </div>
              <div className="flex flex-col p-4 bg-steel-50 rounded-lg">
                <div className="h-1 w-16 bg-steel-600 mb-4"></div>
                <h4 className="font-semibold mb-2">Material Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Extensive experience working with steel, aluminum, titanium, stainless steel, and specialty alloys.
                </p>
              </div>
              <div className="flex flex-col p-4 bg-steel-50 rounded-lg">
                <div className="h-1 w-16 bg-steel-600 mb-4"></div>
                <h4 className="font-semibold mb-2">Tolerance Capabilities</h4>
                <p className="text-sm text-muted-foreground">
                  Precision machining with tolerances as tight as ±0.0005" for critical applications.
                </p>
              </div>
              <div className="flex flex-col p-4 bg-blue-50 rounded-lg">
                <div className="h-1 w-16 bg-blue-600 mb-4"></div>
                <h4 className="font-semibold mb-2">Volume Flexibility</h4>
                <p className="text-sm text-muted-foreground">
                  Scalable manufacturing capabilities for both small prototype runs and high-volume production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
