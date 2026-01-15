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
  size: "xl" | "lg" | "md" | "sm";
  color: "sage" | "terracotta" | "olive" | "charcoal";
}

const skills: Skill[] = [
  { name: "Circular Economy", icon: <Recycle className="w-8 h-8" />, size: "xl", color: "sage" },
  { name: "Waste Management", icon: <Trash2 className="w-8 h-8" />, size: "xl", color: "terracotta" },
  { name: "Climate Action", icon: <Globe className="w-7 h-7" />, size: "lg", color: "olive" },
  { name: "Life Cycle Assessment", icon: <RefreshCcw className="w-6 h-6" />, size: "md", color: "sage" },
  { name: "Stakeholder Engagement", icon: <Users className="w-7 h-7" />, size: "lg", color: "charcoal" },
  { name: "Project Management", icon: <ClipboardCheck className="w-6 h-6" />, size: "md", color: "terracotta" },
  { name: "Social Impact", icon: <Heart className="w-7 h-7" />, size: "lg", color: "sage" },
  { name: "Sustainability Reporting", icon: <FileBarChart className="w-5 h-5" />, size: "sm", color: "olive" },
  { name: "Supply Chain", icon: <Network className="w-5 h-5" />, size: "sm", color: "charcoal" },
  { name: "Environmental Policy", icon: <Leaf className="w-6 h-6" />, size: "md", color: "sage" },
  { name: "Impact Measurement", icon: <TrendingUp className="w-5 h-5" />, size: "sm", color: "terracotta" },
  { name: "Innovation Strategy", icon: <Lightbulb className="w-5 h-5" />, size: "sm", color: "olive" },
];

const sizeClasses = {
  xl: "text-2xl md:text-3xl lg:text-4xl font-bold",
  lg: "text-xl md:text-2xl lg:text-3xl font-semibold",
  md: "text-base md:text-lg lg:text-xl font-medium",
  sm: "text-sm md:text-base lg:text-lg font-normal",
};

const colorClasses = {
  sage: "text-primary",
  terracotta: "text-secondary",
  olive: "text-olive",
  charcoal: "text-charcoal",
};

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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer select-none"
    >
      {/* Icon above word on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 ${colorClasses[skill.color]}`}
      >
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          {skill.icon}
        </motion.div>
      </motion.div>
      
      <motion.span
        animate={{
          scale: isHovered ? 1.15 : 1,
          y: isHovered ? -4 : 0,
          filter: isAnyHovered && !isHovered ? "blur(2px)" : "blur(0px)",
          opacity: isAnyHovered && !isHovered ? 0.4 : 1,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className={`font-heading ${sizeClasses[skill.size]} ${colorClasses[skill.color]} transition-colors duration-300 whitespace-nowrap inline-block`}
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

  return (
    <section id="skills" className="h-screen flex flex-col justify-center bg-sand-light overflow-hidden" ref={ref}>
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

        {/* Word Cloud Layout - clustered together */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-6 md:gap-y-8 lg:gap-y-10 max-w-4xl mx-auto pt-8">
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
