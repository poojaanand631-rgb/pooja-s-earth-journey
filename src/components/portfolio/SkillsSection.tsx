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
  { name: "Circular Economy", icon: <Recycle className="w-5 h-5" />, size: "xl", color: "sage" },
  { name: "Waste Management", icon: <Trash2 className="w-5 h-5" />, size: "xl", color: "terracotta" },
  { name: "Climate Action", icon: <Globe className="w-5 h-5" />, size: "lg", color: "olive" },
  { name: "Life Cycle Assessment", icon: <RefreshCcw className="w-4 h-4" />, size: "md", color: "sage" },
  { name: "Stakeholder Engagement", icon: <Users className="w-4 h-4" />, size: "lg", color: "charcoal" },
  { name: "Project Management", icon: <ClipboardCheck className="w-4 h-4" />, size: "md", color: "terracotta" },
  { name: "Social Impact", icon: <Heart className="w-4 h-4" />, size: "lg", color: "sage" },
  { name: "Sustainability Reporting", icon: <FileBarChart className="w-3 h-3" />, size: "sm", color: "olive" },
  { name: "Supply Chain", icon: <Network className="w-3 h-3" />, size: "sm", color: "charcoal" },
  { name: "Environmental Policy", icon: <Leaf className="w-4 h-4" />, size: "md", color: "sage" },
  { name: "Impact Measurement", icon: <TrendingUp className="w-3 h-3" />, size: "sm", color: "terracotta" },
  { name: "Innovation Strategy", icon: <Lightbulb className="w-3 h-3" />, size: "sm", color: "olive" },
];

const sizeClasses = {
  xl: "text-3xl md:text-4xl lg:text-5xl font-bold",
  lg: "text-2xl md:text-3xl font-semibold",
  md: "text-lg md:text-xl font-medium",
  sm: "text-base md:text-lg font-normal",
};

const colorClasses = {
  sage: "text-primary hover:text-sage-dark",
  terracotta: "text-secondary hover:text-secondary/80",
  olive: "text-olive hover:text-olive/80",
  charcoal: "text-charcoal hover:text-charcoal/80",
};

const SkillWord = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center gap-2 cursor-pointer select-none"
    >
      <motion.span
        animate={{
          scale: isHovered ? 1.1 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        className={`font-heading ${sizeClasses[skill.size]} ${colorClasses[skill.color]} transition-colors duration-300 whitespace-nowrap`}
      >
        {skill.name}
      </motion.span>
      
      {/* Icon appears on hover */}
      <motion.span
        initial={{ opacity: 0, scale: 0, x: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
          rotate: isHovered ? [0, -15, 15, -10, 10, 0] : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`${colorClasses[skill.color]}`}
      >
        {skill.icon}
      </motion.span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Create a scattered layout pattern
  const positions = [
    "justify-center", // Circular Economy
    "justify-end pr-12", // Waste Management  
    "justify-start pl-8", // Climate Action
    "justify-center", // Life Cycle Assessment
    "justify-end pr-20", // Stakeholder Engagement
    "justify-start pl-16", // Project Management
    "justify-center", // Social Impact
    "justify-end pr-4", // Sustainability Reporting
    "justify-start pl-24", // Supply Chain
    "justify-center", // Environmental Policy
    "justify-end pr-16", // Impact Measurement
    "justify-start pl-4", // Innovation Strategy
  ];

  return (
    <section id="skills" className="section-padding bg-sand-light" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Along the Way, I've Picked Up...
          </h2>
        </motion.div>

        {/* Word Cloud Layout */}
        <div className="flex flex-col gap-4 md:gap-6 items-center max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className={`w-full flex ${positions[index]}`}>
              <SkillWord skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
