
import { BookIcon } from 'lucide-react';

type EducationItem = {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details: string;
  logo?: string;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: "B.E. Mechanical Engineering",
      institution: "Mumbai University",
      year: "2017",
      details: "First Class",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      degree: "Master Diploma in Mechanical CAD",
      institution: "EduCADD",
      year: "2018",
      details: "A+ Grade",
      logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
  ];

  const certifications = [
    "IEC 61439 Standards Certification",
    "SolidWorks Professional Certification",
    "AutoCAD Professional Certification",
    "Industrial Safety Standards & Compliance",
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-charcoal to-matteBlack">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <BookIcon size={20} className="mr-2 text-neonGreen" />
              <span>Academic Background</span>
            </h3>
            
            <div className="space-y-8">
              {educationItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6 hover:border-softGreen/40 transition-all duration-300"
                >
                  <div className="flex items-start">
                    {item.logo && (
                      <div className="hidden sm:block w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 bg-softGreen/10">
                        <img 
                          src={item.logo} 
                          alt={`${item.institution} Logo`} 
                          className="w-full h-full object-cover opacity-70" 
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                      <p className="text-softGreen">{item.institution}</p>
                      <div className="mt-2 flex justify-between">
                        <span className="text-gray-400">{item.year}</span>
                        <span className="text-neonGreen font-medium">{item.details}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <BookIcon size={20} className="mr-2 text-neonGreen" />
              <span>Professional Certifications</span>
            </h3>
            
            <div className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-neonGreen mr-3"></div>
                    <span className="text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-matteBlack rounded-lg border border-softGreen/10">
                <h4 className="text-white font-medium mb-2">Continuing Education</h4>
                <p className="text-gray-400 text-sm">
                  Regularly participating in professional development workshops and industry seminars to stay
                  current with the latest advances in mechanical engineering and design technologies.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-darkGreen/20 rounded-lg border border-neonGreen/20">
                <h4 className="text-white font-medium mb-2">Skills Development Approach</h4>
                <p className="text-gray-300 text-sm">
                  "I believe in continuous learning and skill enhancement. Engineering is an evolving field, 
                  and staying at the forefront requires dedication to lifelong learning and practical application."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
