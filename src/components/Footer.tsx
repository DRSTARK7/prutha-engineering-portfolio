
import { Link } from 'react-router-dom';
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steel-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-2xl tracking-tight">
                Precision<span className="text-blue-400">Fab</span>
              </span>
            </Link>
            <p className="text-steel-300 mb-6">
              Precision engineering and fabrication solutions for industries that demand excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-steel-800 hover:bg-blue-800 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-steel-800 hover:bg-blue-800 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-steel-800 hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-steel-800 hover:bg-blue-800 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  VMC Machining
                </a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Metal Fabrication
                </a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Industrial Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Engineering Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-steel-300 hover:text-white flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all" />
                  Custom Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-blue-400 mr-2">Location:</span>
                <span className="text-steel-300">1234 Industrial Parkway, City, State 12345</span>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-2">Phone:</span>
                <a href="tel:+15551234567" className="text-steel-300 hover:text-white">+1 (555) 123-4567</a>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-2">Email:</span>
                <a href="mailto:info@precisionfab.com" className="text-steel-300 hover:text-white">info@precisionfab.com</a>
              </li>
              <li className="flex">
                <span className="text-blue-400 mr-2">Hours:</span>
                <span className="text-steel-300">Mon-Fri: 8am - 5pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-steel-800 text-center text-steel-400">
          <p>&copy; {currentYear} PrecisionFab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
