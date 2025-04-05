
import SkillBadge from './SkillBadge';
import { motion } from 'framer-motion';
import { BookOpen, Award, Zap } from 'lucide-react';

const About = () => {
  const coreSkills = [
    { name: "3D Modeling", level: 5 },
    { name: "Product Design", level: 5 },
    { name: "Technical Documentation", level: 4 },
    { name: "Engineering Drawings", level: 5 },
    { name: "Mechanical Engineering", level: 5 },
    { name: "IEC 61439", level: 5 }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-neonGreen/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-softGreen/5 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #00FF00 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-6 text-gray-300 leading-relaxed">
              Mechanical Engineer with <span className="green-highlight">6+ years of experience</span> in low voltage switchboard design, 
              enclosure development per IEC 61439, and CAD-based product engineering. 
            </p>
            <p className="mb-6 text-gray-300 leading-relaxed">
              I specialize in translating complex technical requirements into precise mechanical designs, 
              working closely with multidisciplinary teams to deliver innovative solutions that meet industry standards 
              and exceed client expectations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My passion lies in the intersection of <span className="green-highlight">precision engineering</span> and 
              <span className="green-highlight"> creative problem-solving</span>, where I constantly seek to improve product 
              design and functionality through meticulous attention to detail and innovative thinking.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-charcoal/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-softGreen/20 flex items-center">
                <BookOpen size={18} className="text-neonGreen mr-2" />
                <span>IEC 61439 Specialist</span>
              </div>
              <div className="bg-charcoal/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-softGreen/20 flex items-center">
                <Award size={18} className="text-neonGreen mr-2" />
                <span>Certified CAD Expert</span>
              </div>
              <div className="bg-charcoal/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-softGreen/20 flex items-center">
                <Zap size={18} className="text-neonGreen mr-2" />
                <span>Technical Innovator</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6 transform hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="h-64 w-full mb-6 rounded-md overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                alt="Futuristic Engineering Concept" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matteBlack/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white">Future of Design</h3>
                <p className="text-softGreen text-sm">Combining precision with innovation</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-softGreen mb-1">Design Philosophy</h3>
                <p className="text-gray-400 text-sm">"Precision in every dimension"</p>
              </div>
              <div className="w-16 h-16 bg-softGreen/10 rounded-full flex items-center justify-center border border-softGreen/30">
                <span className="text-neonGreen text-2xl font-bold">6+</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-softGreen">Core Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {coreSkills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="bg-charcoal/30 backdrop-blur-sm rounded-lg p-6 border-l-4 border-neonGreen">
            <h3 className="text-xl font-semibold mb-2 text-white">Professional Focus</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Switchboard and enclosure design per IEC 61439 standards</li>
              <li>3D modeling and assembly design using industry-standard CAD software</li>
              <li>Cross-functional collaboration with electrical and manufacturing teams</li>
              <li>Technical documentation, GTP preparation, and specification review</li>
              <li>Product development from concept to manufacturing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
