
import { Linkedin, Mail, Phone, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matteBlack border-t border-softGreen/20 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-neonGreen">DM<span className="text-white">.</span></h2>
            <p className="text-gray-400 mt-2">Mechanical Design Engineer | CAD Expert</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/diptesh-mahajan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-softGreen hover:bg-softGreen hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:dipteshmahajan@outlook.com" 
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-softGreen hover:bg-softGreen hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:+919604623765" 
              className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-softGreen hover:bg-softGreen hover:text-black transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Diptesh Mahajan. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-softGreen text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-softGreen text-sm">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-softGreen text-sm">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-softGreen text-sm">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-softGreen text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
