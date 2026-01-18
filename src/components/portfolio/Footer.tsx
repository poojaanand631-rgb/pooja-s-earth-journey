import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, MapPin, Heart, Leaf, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "On the Side", href: "#on-the-side" },
  { label: "Blog", href: "#blog" },
];

const socialLinks = [
  { label: "Email", href: "mailto:pooja.anand@example.com", icon: <Mail className="w-5 h-5" /> },
  { label: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
  { label: "Twitter", href: "#", icon: <Twitter className="w-5 h-5" /> },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="min-h-screen flex flex-col bg-charcoal text-sand-light">
      {/* Main CTA Section */}
      <div className="section-padding pb-12">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Let's Build a Sustainable Future Together
            </h2>

            {/* Location badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {["Singapore", "ASEAN", "Dubai"].map((location) => (
                <span
                  key={location}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/20 text-sage-light text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  {location}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="mailto:pooja.anand@example.com"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
                </span>
                Available to Work
              </a>
              <a
                href="mailto:pooja.anand@example.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-sand-light/30 text-sand-light hover:bg-sand-light/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-sand-light/10">
        <div className="container-wide mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-sage-light" />
                <span className="font-heading text-xl font-bold">Pooja Anand</span>
              </div>
              <p className="text-sand-light/60 text-sm leading-relaxed">
                Sustainability & Climate Change Professional passionate about creating meaningful environmental impact.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold mb-4 text-sage-light">Quick Links</h3>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-sand-light/60 hover:text-sand-light transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading font-semibold mb-4 text-sage-light">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-sage/30 hover:text-sage-light transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand-light/10">
        <div className="container-wide mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sand-light/50 flex items-center gap-1">
              © 2025 Pooja Anand. Designed with
              <Heart className="w-3 h-3 text-terracotta inline" />
              and sustainability in mind.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-sand-light/10 hover:bg-sage/30 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
