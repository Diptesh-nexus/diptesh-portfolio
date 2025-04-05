
import { motion } from 'framer-motion';

type SkillBadgeProps = {
  skill: string;
  level?: number; // 1-5 skill level
};

const SkillBadge = ({ skill, level = 0 }: SkillBadgeProps) => {
  return (
    <div className="skill-badge group relative">
      <span>{skill}</span>
      
      {level > 0 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-charcoal/90 backdrop-blur-sm px-2 py-1 rounded text-xs 
                      opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i < level ? 'bg-neonGreen' : 'bg-gray-600'}`}
                initial={{ scale: i < level ? 0 : 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              ></motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBadge;
