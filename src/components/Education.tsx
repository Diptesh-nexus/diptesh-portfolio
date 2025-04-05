
import { BookIcon, Award, BookOpen, GraduationCap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

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
      year: "2012 - 2016",
      details: "First Class",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      degree: "Master Diploma in Mechanical CAD",
      institution: "Edu-CADD Institute",
      year: "2015",
      details: "A+ Grade",
      logo: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
    {
      id: 3,
      degree: "High School (HSC)",
      institution: "Maharashtra Board",
      year: "2010 - 2012",
      details: "First Class",
      logo: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    },
  ];

  const certifications = [
    "Basic SAP Certification",
    "SolidWorks - 2023 Certification",
    "Microsoft Office Certification",
    "AutoCAD - 2025 Certification",
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-charcoal to-matteBlack relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #00FF00 1px, transparent 1px), radial-gradient(circle, #00FF00 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        ></div>
        
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-deepBlack/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <GraduationCap size={20} className="mr-2 text-neonGreen" />
              <span>Academic Background</span>
            </h3>
            
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Award size={20} className="mr-2 text-neonGreen" />
              <span>Professional Certifications</span>
            </h3>
            
            <div className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6">
              <motion.ul 
                className="space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  },
                  hidden: {}
                }}
              >
                {certifications.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 }
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-neonGreen mr-3"></div>
                    <span className="text-gray-300">{cert}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div 
                className="mt-8 p-4 bg-matteBlack rounded-lg border border-softGreen/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <BookOpen size={16} className="mr-2 text-neonGreen" />
                  Continuing Education
                </h4>
                <p className="text-gray-400 text-sm">
                  Regularly participating in professional development workshops and industry seminars to stay
                  current with the latest advances in mechanical engineering and design technologies.
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-6 p-4 bg-darkGreen/20 rounded-lg border border-neonGreen/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h4 className="text-white font-medium mb-2 flex items-center">
                  <Lightbulb size={16} className="mr-2 text-neonGreen" />
                  Skills Development Approach
                </h4>
                <p className="text-gray-300 text-sm">
                  "I believe in continuous learning and skill enhancement. Engineering is an evolving field, 
                  and staying at the forefront requires dedication to lifelong learning and practical application."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
