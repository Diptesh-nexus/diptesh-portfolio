
import { ArrowDown } from 'lucide-react';

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

      <div className="container relative z-10 px-6 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Diptesh</span> <span className="text-neonGreen">Mahajan</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <span className="text-white">Mechanical Design Engineer</span> | <span className="text-softGreen">CAD Expert</span> | <span className="text-neonGreen">Innovator</span>
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-300 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Designing the future of electromechanical systems with precision and passion.
          Transforming concepts into engineered reality.
        </p>
        
        <div className="flex justify-center space-x-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <a href="#projects" className="button-green">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-softGreen text-softGreen rounded-md transition-all duration-300 hover:bg-softGreen hover:text-black transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-softGreen animate-bounce transition-colors duration-300 hover:text-neonGreen"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
