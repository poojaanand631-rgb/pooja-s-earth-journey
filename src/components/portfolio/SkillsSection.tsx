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
  description: string;
  size: "sm" | "md" | "lg";
}

const skills: Skill[] = [
  {
    name: "Circular Economy",
    icon: <Recycle className="w-6 h-6" />,
    description: "Designing systems that eliminate waste and maximize resource value",
    size: "lg",
  },
  {
    name: "Waste Management",
    icon: <Trash2 className="w-6 h-6" />,
    description: "End-to-end waste solutions from collection to recycling",
    size: "lg",
  },
  {
    name: "Life Cycle Assessment",
    icon: <RefreshCcw className="w-6 h-6" />,
    description: "Evaluating environmental impacts across product lifecycles",
    size: "md",
  },
  {
    name: "Stakeholder Engagement",
    icon: <Users className="w-6 h-6" />,
    description: "Building partnerships with diverse communities and organizations",
    size: "md",
  },
  {
    name: "Project Management",
    icon: <ClipboardCheck className="w-6 h-6" />,
    description: "Leading cross-functional teams to deliver impact",
    size: "md",
  },
  {
    name: "Climate Action",
    icon: <Globe className="w-6 h-6" />,
    description: "Implementing solutions to combat climate change",
    size: "lg",
  },
  {
    name: "Social Impact",
    icon: <Heart className="w-6 h-6" />,
    description: "Creating positive change in communities",
    size: "md",
  },
  {
    name: "Sustainability Reporting",
    icon: <FileBarChart className="w-6 h-6" />,
    description: "ESG frameworks, GRI, and impact measurement",
    size: "sm",
  },
  {
    name: "Supply Chain Analysis",
    icon: <Network className="w-6 h-6" />,
    description: "Sustainable sourcing and logistics optimization",
    size: "sm",
  },
  {
    name: "Environmental Policy",
    icon: <Leaf className="w-6 h-6" />,
    description: "Understanding and shaping regulatory frameworks",
    size: "sm",
  },
  {
    name: "Impact Measurement",
    icon: <TrendingUp className="w-6 h-6" />,
    description: "Quantifying and communicating sustainability outcomes",
    size: "sm",
  },
  {
    name: "Innovation Strategy",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Developing novel solutions for environmental challenges",
    size: "sm",
  },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "col-span-1",
    md: "col-span-1 md:col-span-2",
    lg: "col-span-1 md:col-span-2 lg:col-span-3",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${sizeClasses[skill.size]} relative`}
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="h-full p-6 rounded-2xl bg-card border border-border cursor-pointer overflow-hidden relative group"
      >
        <div className="flex items-start gap-4">
          <motion.div
            animate={{ 
              rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
              scale: isHovered ? 1.1 : 1 
            }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-xl bg-sage/10 border border-sage/20 flex items-center justify-center text-primary shrink-0"
          >
            {skill.icon}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
              {skill.name}
            </h3>
            <motion.p
              initial={{ opacity: 0.7 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              {skill.description}
            </motion.p>
          </div>
        </div>

        {/* Hover gradient effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-sage/5 to-transparent pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-sand-light" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Along the Way, I've Picked Up...
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A diverse skill set shaped by hands-on experience across NGOs, social enterprises, and climate tech startups
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
