import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SkillData {
  skill: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

export const SkillRadarChart = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.3);

  const skills: SkillData[] = [
    { skill: 'React.js', level: 90, category: 'frontend' },
    { skill: 'PHP', level: 85, category: 'backend' },
    { skill: 'JavaScript', level: 85, category: 'frontend' },
    { skill: 'MySQL', level: 85, category: 'database' },
    { skill: 'Arduino/ESP32', level: 85, category: 'tools' },
    { skill: 'Laravel', level: 80, category: 'backend' },
    { skill: 'LoRa Communication', level: 80, category: 'tools' },
    { skill: 'Bootstrap', level: 80, category: 'frontend' },
    { skill: 'Smart Contracts', level: 70, category: 'other' },
    { skill: 'Node.js', level: 70, category: 'backend' },
  ];

  // Responsive dimensions
  const centerX = 150;
  const centerY = 150;
  const radius = 100; // Reduced for better mobile fit

  const getPointOnCircle = (index: number, total: number, level: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const distance = (radius * level) / 100;
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    };
  };

  const getLabelPosition = (index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const distance = radius + 25; // Reduced for better mobile fit
    return {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
    };
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      frontend: '#3b82f6',
      backend: '#10b981',
      database: '#f59e0b',
      tools: '#8b5cf6',
      other: '#ef4444',
    };
    return colors[category as keyof typeof colors] || '#6b7280';
  };

  const pathData = skills
    .map((skill, index) => {
      const point = getPointOnCircle(index, skills.length, skill.level);
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`;
    })
    .join(' ') + ' Z';

  return (
    <div ref={ref} className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <svg width="300" height="300" viewBox="0 0 300 300" className="w-full h-auto min-h-[200px] sm:min-h-[250px]">
          {/* Grid circles */}
          {[20, 40, 60, 80, 100].map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={(radius * level) / 100}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-20"
            />
          ))}

          {/* Grid lines */}
          {skills.map((_, index) => {
            const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
            const endX = centerX + Math.cos(angle) * radius;
            const endY = centerY + Math.sin(angle) * radius;
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-20"
              />
            );
          })}

          {/* Skill area */}
          <motion.path
            d={pathData}
            fill="url(#skillGradient)"
            stroke="#8b5cf6"
            strokeWidth="2"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={isVisible ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Skill points */}
          {skills.map((skill, index) => {
            const point = getPointOnCircle(index, skills.length, skill.level);
            return (
              <motion.circle
                key={skill.skill}
                cx={point.x}
                cy={point.y}
                r="6"
                fill={getCategoryColor(skill.category)}
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                className="cursor-pointer hover:scale-125 transition-transform"
              />
            );
          })}

          {/* Gradient definition */}
          <defs>
            <radialGradient id="skillGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>

        {/* Skill labels - Responsive */}
        {skills.map((skill, index) => {
          const labelPos = getLabelPosition(index, skills.length);
          return (
            <motion.div
              key={skill.skill}
              className="absolute text-xs sm:text-xs font-medium text-center"
              style={{
                left: labelPos.x - 30,
                top: labelPos.y - 12,
                width: '60px',
              }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
            >
              <div 
                className="text-foreground text-xs leading-tight"
                style={{ color: getCategoryColor(skill.category) }}
              >
                {skill.skill}
              </div>
              <div className="text-xs opacity-70 mt-0.5">{skill.level}%</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
