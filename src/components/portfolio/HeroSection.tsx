import { motion } from "framer-motion";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
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

      <div className="container-wide mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">Available to Work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6"
            >
              POOJA ANAND
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-heading font-medium text-primary mb-4"
            >
              Sustainability & Climate Change Professional
            </motion.p>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-6 max-w-lg"
            >
              Thinking of ways to save the planet, one solution at a time
            </motion.p>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 border border-sage/20">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Singapore</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 border border-sage/20">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Environmental Management @ NUS</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <button onClick={scrollToExperience} className="btn-outline">
                View My Work
              </button>
            </motion.div>
          </div>

          {/* Right - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-gradient-to-br from-sage/20 to-sand relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-sage/20 mb-4 flex items-center justify-center">
                    <span className="text-5xl">👩🏽‍💼</span>
                  </div>
                  <p className="text-sm text-muted-foreground">[Hero Image Placeholder]</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-terracotta/20 blur-xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-sage/30 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
