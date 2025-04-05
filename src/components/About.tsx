
import SkillBadge from './SkillBadge';

const About = () => {
  const skills = [
    { name: "AutoCAD", level: 5 },
    { name: "SolidWorks", level: 5 },
    { name: "Creo Parametric", level: 4 },
    { name: "Ansys Workbench", level: 4 },
    { name: "SAP", level: 3 },
    { name: "Microsoft Office", level: 4 },
    { name: "Product Design", level: 5 },
    { name: "IEC 61439", level: 5 },
    { name: "3D Modeling", level: 5 },
    { name: "Mechanical Engineering", level: 5 },
    { name: "Technical Documentation", level: 4 },
    { name: "Engineering Drawings", level: 5 }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
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
          </div>
          
          <div className="bg-charcoal/40 backdrop-blur-sm rounded-lg border border-softGreen/20 p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Engineering Technology" 
              className="w-full h-64 object-cover rounded-md mb-6" 
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-softGreen mb-1">Design Philosophy</h3>
                <p className="text-gray-400 text-sm">"Precision in every dimension"</p>
              </div>
              <div className="w-16 h-16 bg-softGreen/10 rounded-full flex items-center justify-center border border-softGreen/30">
                <span className="text-neonGreen text-2xl font-bold">6+</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-softGreen">Technical Expertise</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
        
        <div className="bg-charcoal/30 rounded-lg p-6 border-l-4 border-neonGreen">
          <h3 className="text-xl font-semibold mb-2 text-white">Core Competencies</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Switchboard and enclosure design per IEC 61439 standards</li>
            <li>3D modeling and assembly design using industry-standard CAD software</li>
            <li>Cross-functional collaboration with electrical and manufacturing teams</li>
            <li>Technical documentation, GTP preparation, and specification review</li>
            <li>Product development from concept to manufacturing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
