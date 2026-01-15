import { useRef, useState } from "react";
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
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  fontSize: string;
  color: string;
  position: { x: number; y: number };
}

// Positioned like a real word cloud - tightly packed with varying sizes
const skills: Skill[] = [
  { 
    name: "Data", 
    icon: <Recycle className="w-10 h-10" />, 
    fontSize: "text-5xl md:text-6xl lg:text-7xl font-bold",
    color: "text-primary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Insights", 
    icon: <Globe className="w-9 h-9" />, 
    fontSize: "text-4xl md:text-5xl lg:text-6xl font-bold",
    color: "text-charcoal",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Circular Economy", 
    icon: <Recycle className="w-8 h-8" />, 
    fontSize: "text-3xl md:text-4xl lg:text-5xl font-semibold",
    color: "text-secondary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Waste", 
    icon: <Trash2 className="w-7 h-7" />, 
    fontSize: "text-2xl md:text-3xl lg:text-4xl font-semibold",
    color: "text-olive",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Climate", 
    icon: <Globe className="w-6 h-6" />, 
    fontSize: "text-xl md:text-2xl lg:text-3xl font-medium",
    color: "text-primary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Impact", 
    icon: <TrendingUp className="w-7 h-7" />, 
    fontSize: "text-2xl md:text-3xl lg:text-4xl font-semibold",
    color: "text-secondary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Stakeholder", 
    icon: <Users className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl font-medium",
    color: "text-charcoal",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Policy", 
    icon: <Leaf className="w-6 h-6" />, 
    fontSize: "text-xl md:text-2xl lg:text-3xl font-medium",
    color: "text-olive",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Social", 
    icon: <Heart className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl font-medium",
    color: "text-primary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Project", 
    icon: <ClipboardCheck className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    color: "text-secondary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Reporting", 
    icon: <FileBarChart className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    color: "text-charcoal",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Supply Chain", 
    icon: <Network className="w-4 h-4" />, 
    fontSize: "text-sm md:text-base lg:text-lg",
    color: "text-olive",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Innovation", 
    icon: <Lightbulb className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl font-medium",
    color: "text-primary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "LCA", 
    icon: <RefreshCcw className="w-4 h-4" />, 
    fontSize: "text-base md:text-lg lg:text-xl",
    color: "text-secondary",
    position: { x: 0, y: 0 }
  },
  { 
    name: "Management", 
    icon: <ClipboardCheck className="w-5 h-5" />, 
    fontSize: "text-lg md:text-xl lg:text-2xl font-medium",
    color: "text-charcoal",
    position: { x: 0, y: 0 }
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
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer select-none inline-block"
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
          scale: isHovered ? 1.1 : 1,
          filter: isAnyHovered && !isHovered ? "blur(3px)" : "blur(0px)",
          opacity: isAnyHovered && !isHovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`font-heading ${skill.fontSize} ${skill.color} transition-colors duration-200 leading-none`}
      >
        {skill.name}
      </motion.span>
    </motion.span>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="h-screen flex flex-col justify-center bg-sand-light overflow-hidden" ref={ref}>
      <div className="container-wide mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-2">
            Along the Way, I've Picked Up...
          </h2>
        </motion.div>

        {/* Word Cloud - tightly packed like the reference */}
        <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-3 gap-y-1 md:gap-y-2 max-w-4xl mx-auto leading-tight pt-4">
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
