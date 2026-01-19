import { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  Recycle,
  Trash2,
  RefreshCcw,
  Users,
  ClipboardCheck,
  Globe,
  Heart,
  FileBarChart,
  Network,
  Leaf,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  Zap,
  Shield,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  fontSize: string;
  color: string;
  position: { x: number; y: number };
  rotation: number;
}

// Generate randomized positions for word cloud
const generatePositions = (count: number, width: number = 100, height: number = 100) => {
  const positions: { x: number; y: number; rotation: number }[] = [];
  const minDistance = 8; // Minimum distance between words in percentage
  const edgeMargin = 8; // Margin from edges to prevent cutoff
  
  for (let i = 0; i < count; i++) {
    let attempts = 0;
    let x: number, y: number;
    let validPosition = false;
    
    // Try to find a non-overlapping position
    while (!validPosition && attempts < 200) {
      x = edgeMargin + Math.random() * (width - edgeMargin * 2); // Keep margin from edges
      y = edgeMargin + Math.random() * (height - edgeMargin * 2);
      attempts++;
      
      // Check if position is far enough from existing ones
      validPosition = positions.every(pos => {
        const dx = pos.x - x;
        const dy = pos.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance >= minDistance;
      });
      
      // If we've tried many times, just use the position anyway
      if (attempts > 150) {
        validPosition = true;
      }
    }
    
    const rotation = (Math.random() - 0.5) * 12; // Random rotation between -6 and 6 degrees
    
    positions.push({ x, y, rotation });
  }
  
  return positions;
};

// Word cloud with relevant terms from the portfolio, using website's color palette
const skillsData = [
  { 
    name: "Sustainability", 
    icon: <Leaf className="w-10 h-10" />, 
    fontSize: "text-5xl md:text-6xl lg:text-7xl",
    weight: "font-bold",
    color: "text-primary",
  },
  { 
    name: "Climate Action", 
    icon: <Globe className="w-9 h-9" />, 
    fontSize: "text-4xl md:text-5xl lg:text-6xl",
    weight: "font-bold",
    color: "text-secondary",
  },
  { 
    name: "Waste Management", 
    icon: <Trash2 className="w-8 h-8" />, 
    fontSize: "text-3xl md:text-4xl lg:text-5xl",
    weight: "font-semibold",
    color: "text-primary",
  },
  { 
    name: "Circular Economy", 
    icon: <Recycle className="w-7 h-7" />, 
    fontSize: "text-2xl md:text-3xl lg:text-4xl",
    weight: "font-semibold",
    color: "text-secondary",
  },
  { 
    name: "Impact", 
    icon: <TrendingUp className="w-7 h-7" />, 
    fontSize: "text-2xl md:text-3xl lg:text-4xl",
    weight: "font-semibold",
    color: "text-olive",
  },
  { 
    name: "Stakeholder Engagement", 
    icon: <Users className="w-6 h-6" />, 
    fontSize: "text-xl md:text-2xl lg:text-3xl",
    weight: "font-medium",
    color: "text-primary",
  },
  { 
    name: "Climate Policy", 
    icon: <Shield className="w-6 h-6" />, 
    fontSize: "text-xl md:text-2xl lg:text-3xl",
    weight: "font-medium",
    color: "text-secondary",
  },
  { 
    name: "Social Impact", 
    icon: <Heart className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl",
    weight: "font-medium",
    color: "text-olive",
  },
  { 
    name: "Project Management", 
    icon: <ClipboardCheck className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl",
    weight: "font-medium",
    color: "text-charcoal",
  },
  { 
    name: "Data Analysis", 
    icon: <BarChart3 className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    weight: "font-normal",
    color: "text-primary",
  },
  { 
    name: "Reporting", 
    icon: <FileBarChart className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    weight: "font-normal",
    color: "text-secondary",
  },
  { 
    name: "Environmental Management", 
    icon: <Leaf className="w-4 h-4" />, 
    fontSize: "text-sm md:text-base lg:text-lg",
    weight: "font-normal",
    color: "text-olive",
  },
  { 
    name: "Innovation", 
    icon: <Lightbulb className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl",
    weight: "font-medium",
    color: "text-primary",
  },
  { 
    name: "LCA", 
    icon: <RefreshCcw className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    weight: "font-normal",
    color: "text-secondary",
  },
  { 
    name: "Green Finance", 
    icon: <TrendingUp className="w-4 h-4" />, 
    fontSize: "text-sm md:text-base lg:text-lg",
    weight: "font-normal",
    color: "text-olive",
  },
  { 
    name: "Community Engagement", 
    icon: <Users className="w-4 h-4" />, 
    fontSize: "text-sm md:text-base lg:text-lg",
    weight: "font-normal",
    color: "text-charcoal",
  },
  { 
    name: "Climate Tech", 
    icon: <Zap className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    weight: "font-normal",
    color: "text-primary",
  },
  { 
    name: "Sustainability Assessment", 
    icon: <Target className="w-4 h-4" />, 
    fontSize: "text-sm md:text-base lg:text-lg",
    weight: "font-normal",
    color: "text-secondary",
  },
  { 
    name: "EIA", 
    icon: <FileBarChart className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    weight: "font-normal",
    color: "text-olive",
  },
  { 
    name: "Partnerships", 
    icon: <Network className="w-4 h-4" />, 
    fontSize: "text-sm md:text-base lg:text-lg",
    weight: "font-normal",
    color: "text-charcoal",
  },
];

const SkillWord = ({ skill, index, isAnyHovered, onHover, onLeave }: { 
  skill: Skill; 
  index: number;
  isAnyHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onLeave();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute cursor-pointer select-none"
      style={{
        left: `${skill.position.x}%`,
        top: `${skill.position.y}%`,
        transform: `translate(-50%, -50%) rotate(${skill.rotation}deg)`,
        transformOrigin: 'center center',
      }}
    >
      {/* Icon above word on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          y: isHovered ? -8 : 5,
        }}
        transition={{ duration: 0.2 }}
        className={`absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 ${skill.color} z-20`}
      >
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.4 }}
        >
          {skill.icon}
        </motion.div>
      </motion.div>
      
      <motion.span
        animate={{
          scale: isHovered ? 1.15 : 1,
          filter: isAnyHovered && !isHovered ? "blur(3px)" : "blur(0px)",
          opacity: isAnyHovered && !isHovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`font-heading ${skill.fontSize} ${skill.color} transition-all duration-200 leading-none hover:drop-shadow-md whitespace-nowrap`}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate randomized positions for word cloud
  const skills = useMemo(() => {
    const positions = generatePositions(skillsData.length, 90, 80);
    
    return skillsData.map((skillData, index) => ({
      ...skillData,
      fontSize: `${skillData.fontSize} ${skillData.weight}`,
      position: positions[index],
      rotation: positions[index].rotation,
      icon: skillData.icon,
    })) as Skill[];
  }, []);

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center bg-sand-light py-12 md:py-20" ref={ref}>
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Along the Way, I've Picked Up...
          </h2>
        </motion.div>

        {/* Word Cloud - randomized positioning with website colors */}
        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] lg:h-[700px] min-h-[400px]">
          {skills.map((skill, index) => (
            <SkillWord 
              key={skill.name} 
              skill={skill} 
              index={index}
              isAnyHovered={hoveredIndex !== null}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
