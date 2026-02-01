import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.85]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const blobScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  const blobOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 md:pt-32"
      style={{ 
        background: "var(--gradient-hero)",
        paddingBottom: "0"
      }}
    >
      {/* Overlapping gradient layer for smooth transition */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "30vh",
          background: "linear-gradient(to bottom, transparent 0%, hsl(100 20% 92% / 0.5) 50%, hsl(100 20% 92%) 100%)",
        }}
      />
      {/* Decorative organic shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sage-light/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-terracotta-light/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sand/50 blur-3xl"
        />
      </div>

      <div className="container-wide mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-card border border-border/50 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-xs font-medium text-foreground uppercase tracking-wider">Available to Work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight mb-6 leading-[1.1]"
            >
              POOJA ANAND
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl font-heading font-normal text-primary mb-5 leading-relaxed"
            >
              Sustainability & Climate Change Professional
            </motion.p>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Thinking of ways to save the planet, one solution at a time
            </motion.p>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-sage/10 border border-sage/20">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Singapore</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-sage/10 border border-sage/20">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Environmental Management @ NUS</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <button onClick={scrollToAbout} className="btn-outline">
                View My Work
              </button>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            {/* Organic Blob Background */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: blobOpacity,
                scale: blobScale,
              }}
            >
              <motion.svg
                initial={{ scale: 0.8, opacity: 0, rotate: 315 }}
                animate={{ scale: 1, opacity: 1, rotate: 315 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                viewBox="0 0 500 500"
                className="w-full h-full"
                style={{ 
                  filter: "drop-shadow(0 8px 30px rgba(210, 150, 120, 0.2))"
                }}
              >
                {/* Thick rectangular brush stroke tilted 315 degrees */}
                <motion.rect
                  x="50"
                  y="80"
                  width="400"
                  height="340"
                  rx="25"
                  ry="25"
                  fill="hsl(14 50% 75%)"
                  opacity="0.9"
                  animate={{
                    width: [400, 405, 400],
                    height: [340, 345, 340],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            </motion.div>

            {/* Image Container */}
            <motion.div 
              className="aspect-[4/5] max-w-lg mx-auto lg:max-w-xl rounded-lg overflow-hidden relative z-10"
              style={{ 
                background: "transparent",
                opacity: imageOpacity,
                scale: imageScale,
                y: imageY,
              }}
            >
              <img
                src="/Hero-img.png"
                alt="Pooja Anand - Sustainability & Climate Change Professional"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
