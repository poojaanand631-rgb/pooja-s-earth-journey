import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail } from "lucide-react";
import AboutImageSection from "./AboutImageSection";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<string | null>(null);

  const handleTextHover = (videoFileName: string) => {
    setHoveredText(videoFileName);
    setVideoFile(videoFileName);
  };

  const handleTextLeave = () => {
    setHoveredText(null);
    setVideoFile(null);
  };

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
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-widest mb-4 block">Get to know me</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-tight">
            A little about me
          </h2>
        </motion.div>

        {/* Editorial Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 relative"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            Hi! I'm Pooja 👋
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            My sustainability journey started with a ✨{' '}
            <span
              className="underline decoration-sage/40 decoration-2 underline-offset-4 cursor-pointer transition-colors hover:decoration-sage/60"
              onMouseEnter={() => handleTextHover("Menstrual cup.gif")}
              onMouseLeave={handleTextLeave}
            >
              menstrual cup
            </span>{' '}
            ✨ Sounds a bit weird right? But it's true. After working on grassroots work, I shifted to social enterprises to make systemic change, focusing on{' '}
            <span
              className="underline decoration-sage/40 decoration-2 underline-offset-4 cursor-pointer transition-colors hover:decoration-sage/60"
              onMouseEnter={() => handleTextHover("Circular Models.gif")}
              onMouseLeave={handleTextLeave}
            >
              circular models
            </span>{' '}
            and helping businesses increase their impact. I'm currently doing my{' '}
            <span
              className="underline decoration-sage/40 decoration-2 underline-offset-4 cursor-pointer transition-colors hover:decoration-sage/60"
              onMouseEnter={() => handleTextHover("Masters in Environmental management.gif")}
              onMouseLeave={handleTextLeave}
            >
              masters in Environmental Management in NUS
            </span>
            , Singapore.
          </p>

          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            Throughout my journey, I have strived to always ask myself "how can I increase the impact I am creating?"{' '}
            <span
              className="underline decoration-sage/40 decoration-2 underline-offset-4 cursor-pointer transition-colors hover:decoration-sage/60"
              onMouseEnter={() => handleTextHover("Let's answer that question together.gif")}
              onMouseLeave={handleTextLeave}
            >
              Let's answer that question together
            </span>
            .
          </p>

          {/* GIF Display */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hoveredText ? 1 : 0.6, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 min-h-[200px] flex items-center justify-center"
            onMouseLeave={handleTextLeave}
          >
            {hoveredText && videoFile ? (
              <img
                src={`/assets/${videoFile}`}
                alt={hoveredText}
                className="max-w-md md:max-w-lg lg:max-w-xl max-h-[60vh] w-auto h-auto object-contain"
              />
            ) : (
              <div className="text-muted-foreground text-sm italic">
                Hover on the underlined text!
              </div>
            )}
          </motion.div>

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
    </section>
    
    {/* Full-screen Image Section */}
    <AboutImageSection />
    </>
  );
};

export default AboutSection;
