
import { Linkedin, Mail, Phone, ExternalLink, Github, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matteBlack border-t border-softGreen/20 py-12 px-6 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, transparent 40px, #00FF00 1px), linear-gradient(to bottom, transparent 40px, #00FF00 1px)',
            backgroundSize: '41px 41px' 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-neonGreen">DM<span className="text-white">.</span></h2>
            <p className="text-gray-400 mt-2">Mechanical Design Engineer | CAD Expert</p>
            <p className="text-gray-500 mt-1 flex items-center text-sm">
              <MapPin size={14} className="mr-1" />
              Maharashtra, India
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © {currentYear} Diptesh Mahajan. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-softGreen text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-softGreen text-sm">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-softGreen text-sm">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-softGreen text-sm">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-softGreen text-sm">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-softGreen text-sm">Contact</a></li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="#home"
            className="text-neonGreen hover:text-white transition-colors inline-flex items-center text-sm"
          >
            <span>Back to top</span>
            <ExternalLink size={12} className="ml-1" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
