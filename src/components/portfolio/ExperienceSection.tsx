import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, Building2, ExternalLink } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  companyDescription: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    id: "padcare",
    title: "Founder's Office",
    company: "PadCare Labs",
    companyDescription: "PadCare Labs is a climate tech startup that built the world's first sanitary waste recycling machine",
    duration: "September 2023 - June 2025",
    location: "India / Remote",
    description: [
      "[CONTENT TO BE ADDED: Key responsibilities and achievements]",
      "[CONTENT TO BE ADDED: Impact metrics and outcomes]",
      "[CONTENT TO BE ADDED: Leadership and collaboration highlights]",
    ],
    skills: ["Circular Economy", "Waste Management", "Stakeholder Engagement", "Project Management", "Climate Tech"],
  },
  {
    id: "experience2",
    title: "[Job Title - To Be Added]",
    company: "[Company Name]",
    companyDescription: "[Brief company description to be added]",
    duration: "[Duration - To Be Added]",
    location: "[Location]",
    description: [
      "[CONTENT TO BE ADDED: Role description]",
      "[CONTENT TO BE ADDED: Key achievements]",
      "[CONTENT TO BE ADDED: Impact and outcomes]",
    ],
    skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"],
  },
];

const ExperienceCard = ({ experience, isFirst }: { experience: Experience; isFirst: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(isFirst);

  return (
    <motion.div
      layout
      className="card-elevated overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 md:p-8 text-left"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            {/* Company Logo Placeholder */}
            <div className="w-14 h-14 rounded-2xl bg-sage/10 border border-sage/20 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground">
                {experience.title}
              </h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {experience.duration}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>

              <p className="text-muted-foreground italic border-l-2 border-sage/30 pl-4">
                {experience.companyDescription}
              </p>

              <ul className="space-y-2">
                {experience.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-sage/10 text-primary border border-sage/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-sand-light" ref={ref}>
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Where I've Worked</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ExperienceCard experience={experience} isFirst={index === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
