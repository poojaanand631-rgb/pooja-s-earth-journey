import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Heart, Mic, Globe, Sparkles, Camera, Users, Coffee } from "lucide-react";

interface SideProject {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: "sage" | "terracotta" | "olive" | "sand";
}

const sideProjects: SideProject[] = [
  {
    id: "1",
    title: "Personal Project",
    category: "Creative",
    description: "[CONTENT TO BE ADDED: Description of personal project, passion work, or side hustle]",
    icon: <Sparkles className="w-6 h-6" />,
    color: "sage",
  },
  {
    id: "2",
    title: "Volunteer Work",
    category: "Community",
    description: "[CONTENT TO BE ADDED: Description of volunteer work and community involvement]",
    icon: <Heart className="w-6 h-6" />,
    color: "terracotta",
  },
  {
    id: "3",
    title: "Singing",
    category: "Hobby",
    description: "[CONTENT TO BE ADDED: Share about passion for singing and music]",
    icon: <Mic className="w-6 h-6" />,
    color: "olive",
  },
  {
    id: "4",
    title: "Travel Adventures",
    category: "Exploration",
    description: "[CONTENT TO BE ADDED: Memorable travel experiences and cultural learnings]",
    icon: <Globe className="w-6 h-6" />,
    color: "sage",
  },
  {
    id: "5",
    title: "Behind the Scenes",
    category: "Work Life",
    description: "[CONTENT TO BE ADDED: A glimpse into daily work life and team moments]",
    icon: <Camera className="w-6 h-6" />,
    color: "terracotta",
  },
  {
    id: "6",
    title: "Community Building",
    category: "Networking",
    description: "[CONTENT TO BE ADDED: Events, meetups, and community connections]",
    icon: <Users className="w-6 h-6" />,
    color: "olive",
  },
];

const colorVariants = {
  sage: "from-sage/30 to-sage/10",
  terracotta: "from-terracotta/30 to-terracotta/10",
  olive: "from-olive/30 to-olive/10",
  sand: "from-sand to-sand-light",
};

const ProjectCard = ({ project, onClick, index }: { project: SideProject; onClick: () => void; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className={`aspect-square rounded-3xl bg-gradient-to-br ${colorVariants[project.color]} overflow-hidden relative`}>
        {/* Placeholder content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center mb-4 text-foreground">
            {project.icon}
          </div>
          <p className="text-sm text-muted-foreground">[Image Placeholder]</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-xs font-medium text-background/70 uppercase tracking-wider mb-2">
            {project.category}
          </span>
          <h3 className="font-heading text-lg font-semibold text-background">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: SideProject; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-background rounded-3xl shadow-lg max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div className={`aspect-video bg-gradient-to-br ${colorVariants[project.color]} relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-background/80 flex items-center justify-center text-foreground">
              {project.icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-sage/10 text-primary">
            {project.category}
          </span>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {project.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const OnTheSideSection = () => {
  const [selectedProject, setSelectedProject] = useState<SideProject | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="on-the-side" className="section-padding bg-sand-light" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Beyond Work</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            On the Side
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A glimpse into what drives me beyond the 9-to-5
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sideProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default OnTheSideSection;
