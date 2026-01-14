import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Tag, Target, Lightbulb, BarChart3 } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: string;
  challenge: string;
  solution: string;
  impact: string;
  skills: string[];
  color: "sage" | "terracotta" | "olive";
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Case Study Title 1",
    tagline: "[Brief description of the project and its goals - to be added]",
    category: "Waste Management",
    challenge: "[CONTENT TO BE ADDED: What was the problem or opportunity?]",
    solution: "[CONTENT TO BE ADDED: What approach was taken to address it?]",
    impact: "[CONTENT TO BE ADDED: What were the measurable outcomes?]",
    skills: ["Circular Economy", "Stakeholder Engagement", "Project Management"],
    color: "sage",
  },
  {
    id: "2",
    title: "Case Study Title 2",
    tagline: "[Brief description of the project and its goals - to be added]",
    category: "Climate Action",
    challenge: "[CONTENT TO BE ADDED: What was the problem or opportunity?]",
    solution: "[CONTENT TO BE ADDED: What approach was taken to address it?]",
    impact: "[CONTENT TO BE ADDED: What were the measurable outcomes?]",
    skills: ["Climate Policy", "Data Analysis", "Reporting"],
    color: "terracotta",
  },
  {
    id: "3",
    title: "Case Study Title 3",
    tagline: "[Brief description of the project and its goals - to be added]",
    category: "Social Impact",
    challenge: "[CONTENT TO BE ADDED: What was the problem or opportunity?]",
    solution: "[CONTENT TO BE ADDED: What approach was taken to address it?]",
    impact: "[CONTENT TO BE ADDED: What were the measurable outcomes?]",
    skills: ["Community Engagement", "Behavior Change", "Partnerships"],
    color: "olive",
  },
];

const CaseStudyCard = ({ study, onClick }: { study: CaseStudy; onClick: () => void }) => {
  const colorClasses = {
    sage: "from-sage/20 to-sage/5 group-hover:from-sage/30",
    terracotta: "from-terracotta/20 to-terracotta/5 group-hover:from-terracotta/30",
    olive: "from-olive/20 to-olive/5 group-hover:from-olive/30",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="card-elevated overflow-hidden h-full">
        {/* Image placeholder */}
        <div className={`aspect-[4/3] bg-gradient-to-br ${colorClasses[study.color]} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-background/80 backdrop-blur mb-3 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-sm text-muted-foreground">[Project Image]</p>
            </div>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium flex items-center gap-2">
              View Case Study
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sage/10 text-primary mb-3">
            {study.category}
          </span>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {study.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {study.tagline}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudyModal = ({ study, onClose }: { study: CaseStudy; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-background rounded-3xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b border-border flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-sage/10 text-primary">
            {study.category}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image placeholder */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-sage/20 to-sand flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-background/80 mb-3 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <p className="text-sm text-muted-foreground">[Project Images / Visuals]</p>
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {study.title}
          </h2>
          <p className="text-muted-foreground">{study.tagline}</p>

          {/* Challenge */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-secondary">
              <Target className="w-5 h-5" />
              <h3 className="font-heading font-semibold">The Challenge</h3>
            </div>
            <p className="text-muted-foreground pl-7">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="w-5 h-5" />
              <h3 className="font-heading font-semibold">The Solution</h3>
            </div>
            <p className="text-muted-foreground pl-7">{study.solution}</p>
          </div>

          {/* Impact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-olive">
              <BarChart3 className="w-5 h-5" />
              <h3 className="font-heading font-semibold">The Impact</h3>
            </div>
            <p className="text-muted-foreground pl-7">{study.impact}</p>
          </div>

          {/* Skills */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-medium">Skills Applied</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {study.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CaseStudiesSection = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding bg-background" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Case Studies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A selection of projects showcasing impact-driven work in sustainability and climate action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <CaseStudyCard study={study} onClick={() => setSelectedStudy(study)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudiesSection;
