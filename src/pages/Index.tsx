
import { useEffect } from 'react';

const Index = () => {
  // Use useEffect to ensure the DOM is loaded before script execution
  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
    
    // Load the script manually to ensure it runs after React has rendered
    const scriptElement = document.querySelector('script[src="script.js"]');
    if (!scriptElement) {
      const script = document.createElement('script');
      script.src = 'script.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* The content will be handled by the HTML in index.html and script.js */}
    </div>
  );
};

export default Index;
