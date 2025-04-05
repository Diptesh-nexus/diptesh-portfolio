
import { ArrowRight, Layers, Lock, ZoomIn, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectDetail = {
  title: string;
  description: string;
  image?: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  details: string[];
  fullDetails?: ProjectDetail[];
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Composite Structure Switchboards",
      description: "Innovative switchboard enclosures for Schneider Electric with improved aesthetics and IEC 61439 compliance.",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      category: "Design",
      details: [
        "Created innovative composite structures for switchboards",
        "Implemented design improvements for better aesthetics",
        "Ensured full compliance with IEC 61439 standards",
        "Optimized material usage and manufacturing processes"
      ],
      fullDetails: [
        {
          title: "Design Challenge",
          description: "Creating a new generation of switchboard enclosures that combine structural integrity with modern aesthetic appeal while maintaining full compliance with IEC 61439 standards.",
          image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
        },
        {
          title: "Solution",
          description: "Developed composite material structures that reduced weight by 15% while increasing strength. Incorporated modular design elements for easier assembly and maintenance access.",
        },
        {
          title: "Results",
          description: "The new switchboard designs received positive client feedback for their innovative appearance and improved functionality. Manufacturing efficiency increased by 12% due to optimized material usage and assembly processes.",
        }
      ]
    },
    {
      id: 2,
      title: "Flameproof Equipment Design",
      description: "Explosion-proof junction boxes and control panels for Prateek Explosionproof compliant with industrial safety standards.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Safety",
      details: [
        "Engineered explosion-proof equipment for hazardous environments",
        "Designed according to strict safety standards and regulations",
        "Created detailed CAD models and manufacturing drawings",
        "Conducted testing and validation of prototypes"
      ],
      fullDetails: [
        {
          title: "Safety Requirements",
          description: "Creating explosion-proof enclosures that prevent internal explosions from igniting the external atmosphere in hazardous industrial environments.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        },
        {
          title: "Technical Approach",
          description: "Implemented flame path designs with precise tolerances to allow pressure release while preventing flame propagation. Used specialized materials and sealing techniques to ensure enclosure integrity under extreme conditions.",
        },
        {
          title: "Implementation",
          description: "The flameproof equipment was successfully deployed in petrochemical facilities, with zero safety incidents reported. The design received certification for use in Zone 1 and Zone 2 hazardous areas.",
        }
      ]
    },
    {
      id: 3,
      title: "1200kV Transmission Hardware",
      description: "High-voltage transmission components for Mosdorfer India designed using advanced CAD technologies.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Engineering",
      details: [
        "Designed high-voltage transmission components for up to 1200kV",
        "Utilized SolidWorks and AutoCAD for precise modeling",
        "Prepared manufacturing documentation for forging and fabrication",
        "Collaborated with testing teams for performance validation"
      ],
      fullDetails: [
        {
          title: "Technical Specifications",
          description: "Developing hardware components for ultra-high voltage transmission lines capable of handling up to 1200kV, requiring precise engineering for electrical and mechanical performance.",
          image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        },
        {
          title: "Design Process",
          description: "Created detailed 3D models in SolidWorks with comprehensive stress analysis. Optimized designs for forging and fabrication processes to ensure cost-effective manufacturing without compromising performance.",
        },
        {
          title: "Testing & Validation",
          description: "Components underwent rigorous mechanical and electrical testing, including corona discharge testing and mechanical load tests to verify performance under extreme conditions.",
        }
      ]
    },
    {
      id: 4,
      title: "ACB/MCCB Link Work Optimization",
      description: "Redesigned power distribution components for Schneider Electric to improve efficiency and reduce material usage.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Optimization",
      details: [
        "Optimized link designs for power distribution panels",
        "Reduced material usage while maintaining electrical performance",
        "Improved thermal characteristics for better current handling",
        "Enhanced manufacturability with simplified designs"
      ],
      fullDetails: [
        {
          title: "Optimization Goals",
          description: "Reducing material costs and improving electrical performance of ACB/MCCB link work components while maintaining full compliance with safety standards.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
        },
        {
          title: "Engineering Approach",
          description: "Used computational analysis to identify optimal material distribution for current flow. Redesigned connection points to reduce contact resistance and improve thermal performance.",
        },
        {
          title: "Outcomes",
          description: "The optimized components achieved 18% material reduction, improved temperature performance by 7°C under full load, and simplified the assembly process, reducing manufacturing time.",
        }
      ]
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-matteBlack to-charcoal relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(#00FF00 2px, transparent 2px)',
            backgroundSize: '50px 50px' 
          }}
        ></div>
        
        <div className="absolute top-0 right-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,20 Q50,40 0,20 Z" fill="#00FF00" fillOpacity="0.03" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category 
                  ? 'bg-neonGreen text-black font-medium'
                  : 'bg-charcoal text-softGreen hover:bg-darkGreen'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`bg-matteBlack/80 backdrop-blur-sm border border-softGreen/10 rounded-lg overflow-hidden 
                         hover:border-softGreen/40 transition-all duration-300 ${expandedProject === project.id ? 'md:col-span-2' : ''}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-2 right-2 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-softGreen">
                  {project.category}
                </div>
                
                {/* Overlay with icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-matteBlack to-transparent opacity-70"></div>
                
                {/* Project title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="overflow-hidden transition-all duration-300">
                  <ul className="text-gray-400 text-sm mt-4 space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-neonGreen mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="mt-6 text-sm text-softGreen flex items-center hover:text-neonGreen transition-colors"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <span>{expandedProject === project.id ? 'Show Less' : 'View Details'}</span>
                  <ArrowRight size={16} className="ml-2 transition-transform" />
                </button>
              </div>
              
              {/* Expanded project details */}
              {expandedProject === project.id && project.fullDetails && (
                <div className="p-6 pt-0">
                  <div className="h-px bg-softGreen/20 my-4"></div>
                  
                  <div className="space-y-6">
                    {project.fullDetails.map((detail, idx) => (
                      <div key={idx} className="bg-charcoal/40 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-2 flex items-center">
                          {idx === 0 && <Layers size={16} className="mr-2 text-neonGreen" />}
                          {idx === 1 && <Lock size={16} className="mr-2 text-neonGreen" />}
                          {idx === 2 && <ZoomIn size={16} className="mr-2 text-neonGreen" />}
                          {detail.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{detail.description}</p>
                        
                        {detail.image && (
                          <div className="mt-3">
                            <img 
                              src={detail.image} 
                              alt={detail.title} 
                              className="w-full h-40 object-cover rounded-md" 
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <a 
                      href="#contact" 
                      className="flex items-center text-neonGreen hover:underline transition-all"
                    >
                      <span>Contact me about this project</span>
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
