
import { ArrowDown, Zap, Code2, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neonGreen/20 rounded-full filter blur-3xl animate-pulse-green"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-softGreen/20 rounded-full filter blur-3xl animate-pulse-green" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: 'linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(to right, #00FF00 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Futuristic Elements - Circuit-like patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100" stroke="#00FF00" strokeWidth="2" fill="none" />
          <path d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300" stroke="#00FF00" strokeWidth="2" fill="none" />
          <path d="M0,500 C150,600 350,400 500,500 C650,600 850,400 1000,500" stroke="#00FF00" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Diptesh</span> <span className="text-neonGreen">Mahajan</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6">
            <span className="text-white">Mechanical Design Engineer</span> | <span className="text-softGreen">CAD Expert</span> | <span className="text-neonGreen">Innovator</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
            Designing the future of electromechanical systems with precision and passion.
            Transforming concepts into engineered reality.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#about" className="flex items-center bg-charcoal/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-softGreen/20 hover:border-softGreen/50 transition-all duration-300 group">
            <Code2 size={18} className="mr-2 text-softGreen group-hover:text-neonGreen transition-colors" />
            <span>Technical Expertise</span>
          </a>
          <a href="#projects" className="flex items-center bg-charcoal/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-softGreen/20 hover:border-softGreen/50 transition-all duration-300 group">
            <Package size={18} className="mr-2 text-softGreen group-hover:text-neonGreen transition-colors" />
            <span>Project Portfolio</span>
          </a>
          <a href="#experience" className="flex items-center bg-charcoal/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-softGreen/20 hover:border-softGreen/50 transition-all duration-300 group">
            <Zap size={18} className="mr-2 text-softGreen group-hover:text-neonGreen transition-colors" />
            <span>Professional Journey</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <a href="#projects" className="button-green">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-softGreen text-softGreen rounded-md transition-all duration-300 hover:bg-softGreen hover:text-black transform hover:scale-105">
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-softGreen animate-bounce transition-colors duration-300 hover:text-neonGreen"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
