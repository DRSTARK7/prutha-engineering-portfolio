
import { useEffect } from 'react';
import { Clock, Shield, Users, BadgeCheck } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and commit to delivering projects on schedule without compromising quality.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality checks to ensure precision, durability, and compliance with industry standards.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Team',
      description: 'Our workforce comprises skilled engineers and technicians with extensive experience in fabrication and machining.'
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-blue-600" />,
      title: 'Certified Processes',
      description: 'We adhere to industry-certified processes and maintain stringent quality control measures throughout production.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full reveal">
            About Us
          </span>
          <h2 className="heading-lg mb-6 reveal">Precision engineered for excellence</h2>
          <p className="text-lg text-muted-foreground reveal">
            With over two decades of experience, we specialize in high-precision fabrication and 
            vertical machining center operations, delivering exceptional quality and innovative solutions 
            for diverse industrial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-steel-200 bg-grain">
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] rounded-lg overflow-hidden bg-blue-100 bg-grain">
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-700 bg-blue-50 rounded-full">
              Our Story
            </span>
            <h3 className="heading-md mb-6">Crafting precision since 2003</h3>
            <p className="text-muted-foreground mb-6">
              Founded with a vision to revolutionize metal fabrication, our company has evolved into 
              a trusted partner for industries requiring precision-engineered components. Our journey 
              has been marked by continuous innovation and an unwavering commitment to quality.
            </p>
            <p className="text-muted-foreground mb-6">
              We've invested in cutting-edge vertical machining centers and developed proprietary 
              techniques that enable us to tackle complex projects with exceptional accuracy and efficiency.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
            >
              Discover our capabilities
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
