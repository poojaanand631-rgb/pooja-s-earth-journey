import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Quote } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Get to know me</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            A Little About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted relative">
              {/* Placeholder for headshot */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sage/20 to-sand">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-sage/20 mb-4 flex items-center justify-center">
                    <span className="text-4xl">👩🏽‍💼</span>
                  </div>
                  <p className="text-sm text-muted-foreground">[Professional Headshot]</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-terracotta/10 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-sage/20 blur-xl" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Pull Quote */}
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-terracotta/30" />
              <blockquote className="pl-8 border-l-4 border-terracotta/50 py-2">
                <p className="text-xl md:text-2xl font-heading font-medium text-foreground italic">
                  A menstrual cup was the start of my obsession with sustainability.
                </p>
              </blockquote>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a desire to make a personal change, shaped my entire career. That small decision 
              opened my eyes to the profound impact our everyday choices have on the planet—and ignited a passion 
              I couldn't ignore.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past <strong className="text-foreground">4+ years</strong>, I've dedicated myself to 
              social impact and climate action, with a particular focus on <strong className="text-foreground">waste management</strong>. 
              My journey has taken me from grassroots NGOs to innovative social enterprises, each experience 
              teaching me that meaningful change requires both ground-level action and systemic thinking.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked on initiatives that have helped divert plastic waste from landfills, championed 
              circular economy solutions, and collaborated with diverse stakeholders to build sustainable 
              practices. Now, pursuing my Master's at NUS, I'm ready to bring this blend of hands-on 
              experience and strategic insight to new challenges.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4"
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
      </div>
    </section>
  );
};

export default AboutSection;
