import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Heart, Mic, Globe, Sparkles, Camera, Users } from "lucide-react";

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

const CarouselCard = ({ project, onClick }: { project: SideProject; onClick: () => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      className="cursor-pointer group flex-shrink-0 w-[280px] md:w-[320px]"
    >
      <div className={`aspect-square rounded-lg bg-gradient-to-br ${colorVariants[project.color]} overflow-hidden relative`}>
        {/* Placeholder content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-14 h-14 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center mb-4 text-foreground">
            {project.icon}
          </div>
          <p className="text-xs text-muted-foreground">[Image Placeholder]</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-xs font-medium text-background/70 uppercase tracking-widest mb-3">
            {project.category}
          </span>
          <h3 className="font-heading text-xl font-normal text-background leading-tight">
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
  const [scrollX, setScrollX] = useState(0);
  const scrollXRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [blurredIndices, setBlurredIndices] = useState<Set<number>>(new Set());

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...sideProjects, ...sideProjects];

  // Sync ref with state
  useEffect(() => {
    scrollXRef.current = scrollX;
  }, [scrollX]);

  useEffect(() => {
    const cardWidth = 320 + 24; // card width + gap

    const updateBlur = () => {
      const currentScrollX = scrollXRef.current;
      const blurred = new Set<number>();
      const viewportRight = window.innerWidth;
      
      duplicatedProjects.forEach((_, index) => {
        const cardLeft = -currentScrollX + index * cardWidth;
        const cardRight = cardLeft + 320;
        
        // Blur if card is at or beyond viewport edges (leftmost or rightmost visible)
        const isLeftmost = cardLeft < 0 && cardRight > 0;
        const isRightmost = cardLeft < viewportRight && cardRight > viewportRight;
        
        if (isLeftmost || isRightmost) {
          blurred.add(index);
        }
      });
      
      setBlurredIndices(blurred);
    };

    // Update blur immediately on mount
    updateBlur();

    // Update blur on resize
    const handleResize = () => {
      updateBlur();
    };
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setScrollX((prev) => {
        const totalWidth = cardWidth * sideProjects.length;
        const newValue = prev + 1;
        const nextValue = newValue >= totalWidth ? 0 : newValue;
        scrollXRef.current = nextValue;
        updateBlur();
        return nextValue;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="on-the-side" className="section-seamless section-bg-on-the-side min-h-screen flex flex-col justify-center py-16" ref={ref}>
      {/* Header with padding */}
      <div className="px-6 md:px-12 lg:pr-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">Beyond Work</span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight mb-6">
            On the Side
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A glimpse into what drives me beyond the 9-to-5
          </p>
        </motion.div>
      </div>

      {/* Full-width Carousel - extends to edges */}
      <div className="relative w-full overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex gap-6"
          style={{ x: -scrollX }}
        >
          {duplicatedProjects.map((project, index) => {
            const isBlurred = blurredIndices.has(index);
            return (
              <div
                key={`${project.id}-${index}`}
                className="flex-shrink-0 transition-all duration-300"
                style={{
                  filter: isBlurred ? 'blur(3px)' : 'none',
                  opacity: isBlurred ? 0.5 : 1,
                }}
              >
                <CarouselCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            );
          })}
        </motion.div>
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
