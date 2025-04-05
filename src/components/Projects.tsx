
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  details: string[];
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Composite Structure Design for Switchboards",
      description: "Developed concept switchboard enclosures for improved aesthetics and compliance with IEC 61439.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Design",
      details: [
        "Created innovative composite structures for switchboards",
        "Implemented design improvements for better aesthetics",
        "Ensured full compliance with IEC 61439 standards",
        "Optimized material usage and manufacturing processes"
      ]
    },
    {
      id: 2,
      title: "Flameproof Equipment Design",
      description: "Designed flameproof junction boxes and control panels per industrial safety standards.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Safety",
      details: [
        "Engineered explosion-proof equipment for hazardous environments",
        "Designed according to strict safety standards and regulations",
        "Created detailed CAD models and manufacturing drawings",
        "Conducted testing and validation of prototypes"
      ]
    },
    {
      id: 3,
      title: "Overhead Transmission Hardware (up to 1200kV)",
      description: "Created forging/fabrication components using SolidWorks and AutoCAD for high-voltage applications.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Engineering",
      details: [
        "Designed high-voltage transmission components for up to 1200kV",
        "Utilized SolidWorks and AutoCAD for precise modeling",
        "Prepared manufacturing documentation for forging and fabrication",
        "Collaborated with testing teams for performance validation"
      ]
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-matteBlack to-charcoal">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-matteBlack border border-softGreen/10 rounded-lg overflow-hidden group hover:border-softGreen/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-2 right-2 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-softGreen">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                  <ul className="text-gray-400 text-sm mt-4 space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-neonGreen mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-6 text-sm text-softGreen flex items-center hover:text-neonGreen transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
