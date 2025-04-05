
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Cog, Wrench, Ruler, Layers, Box, GanttChart } from 'lucide-react';
import SkillBadge from './SkillBadge';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', icon: <Cpu size={16} /> },
    { id: 'CAD', icon: <Box size={16} /> },
    { id: 'Analysis', icon: <Code2 size={16} /> },
    { id: 'Documentation', icon: <GanttChart size={16} /> },
    { id: 'Software', icon: <Cog size={16} /> },
  ];

  const skillsByCategory = {
    'CAD': [
      { name: "AutoCAD", level: 5 },
      { name: "SolidWorks", level: 5 },
      { name: "Creo Parametric", level: 4 },
      { name: "3D Modeling", level: 5 },
    ],
    'Analysis': [
      { name: "Ansys Workbench", level: 4 },
      { name: "Structural Analysis", level: 4 },
      { name: "Prototyping", level: 3 },
      { name: "R&D", level: 4 },
    ],
    'Documentation': [
      { name: "Technical Drawings", level: 5 },
      { name: "Engineering Drawings", level: 5 },
      { name: "Technical Documentation", level: 4 },
      { name: "GTP Preparation", level: 4 },
    ],
    'Software': [
      { name: "SAP", level: 3 },
      { name: "Microsoft Office", level: 4 },
      { name: "IEC 61439", level: 5 },
      { name: "Product Design", level: 5 },
    ],
  };

  // Calculate all skills for the "All" category
  const allSkills = Object.values(skillsByCategory).flat();
  
  // Get the skills for the active category
  const skills = activeCategory === 'All' ? allSkills : skillsByCategory[activeCategory] || [];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-matteBlack to-deepBlack relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-neonGreen"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full border border-softGreen"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-neonGreen opacity-20"></div>
        </div>
        
        {/* Grid patterns */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'linear-gradient(#00FF00 1px, transparent 1px), linear-gradient(to right, #00FF00 1px, transparent 1px)',
            backgroundSize: '30px 30px' 
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="flex justify-center mb-10">
          <div className="bg-charcoal/40 backdrop-blur-sm rounded-full p-1 flex space-x-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center rounded-full px-4 py-2 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-neonGreen text-black font-medium'
                    : 'text-softGreen hover:bg-darkGreen/50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.id}</span>
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillBadge skill={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 bg-charcoal/30 rounded-lg p-6 border-l-4 border-neonGreen backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
            <Layers size={20} className="mr-2 text-neonGreen" />
            <span>Design Philosophy</span>
          </h3>
          <p className="text-gray-300 leading-relaxed italic">
            "My approach to mechanical design combines precision engineering with innovative problem-solving. 
            Each project is an opportunity to optimize functionality while maintaining aesthetic appeal. 
            I believe in designing systems that not only perform efficiently but also enhance user experience."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
