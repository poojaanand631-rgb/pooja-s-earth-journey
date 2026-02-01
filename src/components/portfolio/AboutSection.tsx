import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import AboutImageSection from "./AboutImageSection";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section 
        id="about" 
        className="section-seamless section-bg-about min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16" 
        ref={ref}
        style={{
          marginTop: "-5vh"
        }}
      >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Text Content */}
        <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-left"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">Get to know me</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight text-left">
            A little about me
          </h2>
        </motion.div>

        {/* Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            A menstrual cup was the start of my obsession with sustainability. What started as a desire to make a personal change, shaped my entire career. That small decision opened my eyes to the profound impact our everyday choices have on the planet—and ignited a passion I couldn't ignore.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Over the past <strong className="text-foreground font-medium">4+ years</strong>, I've dedicated myself to 
            social impact and climate action, with a particular focus on <strong className="text-foreground font-medium">waste management</strong>. 
            My journey has taken me from grassroots NGOs to innovative social enterprises, each experience 
            teaching me that meaningful change requires both ground-level action and systemic thinking.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I've worked on initiatives that have helped divert plastic waste from landfills, championed 
            circular economy solutions, and collaborated with diverse stakeholders to build sustainable 
            practices. Now, pursuing my Master's at NUS, I'm ready to bring this blend of hands-on 
            experience and strategic insight to new challenges.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
            className="pt-6"
          >
            <a
              href="mailto:pooja.anand@example.com"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Let's Get in Touch
            </a>
          </motion.div>
        </motion.div>
        </div>

        {/* Right - Placeholder Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-sage/10 border-2 border-dashed border-sage/30 flex items-center justify-center">
            <span className="text-sage/50 text-sm font-medium">Image Placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
    
    {/* Full-screen Image Section */}
    <AboutImageSection />
    </>
  );
};

export default AboutSection;
