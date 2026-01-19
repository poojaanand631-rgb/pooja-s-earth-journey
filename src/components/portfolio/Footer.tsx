import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Heart, Leaf, ArrowUp } from "lucide-react";

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
    <footer id="contact" className="bg-charcoal text-sand-light py-20">
      {/* Main Content */}
      <div className="container-wide mx-auto px-6 md:px-12 lg:pr-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <Leaf className="w-6 h-6 text-sage-light transition-transform duration-300 ease-out hover:scale-110" />
              <span className="font-heading text-2xl font-normal">Pooja Anand</span>
            </div>
            <p className="text-sand-light/70 text-base leading-relaxed">
              Sustainability & Climate Change Professional
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 rounded-sm bg-sand-light/10 flex items-center justify-center text-sand-light/70 hover:bg-sage/30 hover:text-sage-light transition-all duration-300 ease-out hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand-light/10 mt-12">
        <div className="container-wide mx-auto px-6 md:px-12 lg:pr-24 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-sand-light/50 flex items-center gap-1">
              © 2025 Pooja Anand. Designed with
              <Heart className="w-3 h-3 text-terracotta inline" />
              and sustainability in mind.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-sand-light/10 hover:bg-sage/30 transition-all duration-300 ease-out hover:scale-110"
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
