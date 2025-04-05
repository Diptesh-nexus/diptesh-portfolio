
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';

type ExperienceItem = {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Lauritz Knudsen",
      position: "Mechanical Design Engineer",
      period: "2021 - Present",
      description: "Leading LV switchboard design, including ACB/MCCB layouts and comprehensive SAP documentation. Ensuring full compliance with IEC 61439 standards while optimizing product design for manufacturability.",
      skills: ["Switchboard Design", "ACB/MCCB Layout", "SAP Documentation", "IEC 61439"],
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 2,
      company: "Mosdorfer India",
      position: "Design Engineer",
      period: "2020 - 2021",
      description: "Specialized in overhead line hardware design for high-voltage applications. Responsible for tender costing, GTP (Guaranteed Technical Particulars) management, and technical documentation for transmission hardware components.",
      skills: ["Overhead Line Hardware", "Tender Costing", "GTP Management", "Technical Documentation"],
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 3,
      company: "Prateek Explosionproof",
      position: "Mechanical Engineer",
      period: "2018 - 2020",
      description: "Designed flameproof panels and equipment for hazardous environments. Led casting/fabrication work and contributed to product development initiatives focused on safety and reliability.",
      skills: ["Flameproof Panel Design", "Casting/Fabrication", "Product Development", "Safety Standards"],
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Experience Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-softGreen/30 transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
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
                    <div className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6 hover:border-softGreen/40 transition-all duration-300">
                      <div className="flex items-start">
                        {experience.logo && (
                          <div className="hidden sm:block w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
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
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2 py-1 bg-matteBlack text-softGreen rounded">
                            {skill}
                          </span>
                        ))}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
