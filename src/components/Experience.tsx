
import { BriefcaseIcon, CalendarIcon, Building2, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type ExperienceItem = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
  logo?: string;
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Schneider Electric India",
      position: "Mechanical Design Engineer",
      period: "2021 - Present",
      description: "Leading LV switchboard design, including ACB/MCCB layouts and comprehensive SAP documentation. Ensuring full compliance with IEC 61439 standards while optimizing product design for manufacturability.",
      skills: ["Switchboard Design", "ACB/MCCB Layout", "SAP Documentation", "IEC 61439"],
      achievements: [
        "Optimized link works design for ACBs and MCCBs",
        "Developed sheet metal components for enclosures",
        "Created BOM and manufacturing drawings",
        "Enhanced switchboard aesthetics with modern design"
      ],
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 2,
      company: "Mosdorfer India",
      position: "Design Engineer",
      period: "2020 - 2021",
      description: "Specialized in overhead line hardware design for high-voltage applications up to 1,200kV. Responsible for tender costing, GTP (Guaranteed Technical Particulars) management, and technical documentation for transmission hardware components.",
      skills: ["Overhead Line Hardware", "Tender Costing", "GTP Management", "Technical Documentation"],
      achievements: [
        "Designed transmission line hardware for up to 1,200kV",
        "Used SolidWorks for forging & fabrication component design",
        "Created BOMs and technical specifications",
        "Managed project documentation and costing"
      ],
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 3,
      company: "Prateek Explosionproof",
      position: "Mechanical Engineer",
      period: "2018 - 2020",
      description: "Designed flameproof panels and equipment for hazardous environments. Led casting/fabrication work and contributed to product development initiatives focused on safety and reliability.",
      skills: ["Flameproof Panel Design", "Casting/Fabrication", "Product Development", "Safety Standards"],
      achievements: [
        "Designed flameproof junction boxes & control panels",
        "Created SolidWorks models for casting & fabricated components",
        "Contributed to manufacturing process improvements",
        "Developed new explosion-proof products"
      ],
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #00FF00 1px, transparent 1px), linear-gradient(to bottom, #00FF00 1px, transparent 1px)',
            backgroundSize: '60px 60px' 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience Timeline</h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-softGreen/30 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id} 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-neonGreen rounded-full transform -translate-x-1.5 md:-translate-x-2 animate-pulse-green"></div>
                
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Date marker for mobile */}
                  <div className="md:hidden flex items-center mb-4 text-softGreen">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>{experience.period}</span>
                  </div>
                  
                  {/* Content box */}
                  <div className={`ml-6 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6 hover:border-softGreen/40 transition-all duration-300 group">
                      <div className="flex items-start">
                        {experience.logo && (
                          <div className="hidden sm:block w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-softGreen/10">
                            <img 
                              src={experience.logo} 
                              alt={`${experience.company} Logo`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                          <p className="text-neonGreen font-medium">{experience.company}</p>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-300">{experience.description}</p>
                      
                      <div className="mt-4 mb-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-matteBlack text-softGreen rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 p-3 bg-matteBlack/70 rounded-md">
                        <h4 className="text-softGreen font-medium flex items-center text-sm mb-2">
                          <BarChart3 size={14} className="mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-start">
                              <ArrowRight size={10} className="mt-1 mr-1 text-neonGreen flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Date marker for desktop */}
                  <div className="hidden md:flex items-center justify-center w-2/12 text-softGreen">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>{experience.period}</span>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
