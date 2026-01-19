import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "On the Side", href: "#on-the-side" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check visibility: show at Section 2 (About), hide before footer
      const aboutSection = document.getElementById("about");
      const footerSection = document.getElementById("contact");

      if (aboutSection && footerSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show nav when About section enters viewport, hide when Footer enters
        if (aboutRect.top < windowHeight && footerRect.top > windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }

      // Find active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Left Vine Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden lg:block fixed left-0 top-0 h-screen w-[88px] pointer-events-auto z-50"
            style={{
              background: "transparent",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* Vine Wrapper */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vine Line 1 */}
              <div
                className="absolute top-0 bottom-0 w-0.5"
                style={{
                  left: "26px",
                  backgroundColor: "rgba(120, 140, 110, 0.45)",
                  borderRadius: "999px",
                }}
              />
              
              {/* Vine Line 2 */}
              <div
                className="absolute top-0 bottom-0 w-0.5"
                style={{
                  left: "34px",
                  backgroundColor: "rgba(120, 140, 110, 0.45)",
                  borderRadius: "999px",
                }}
              />

              {/* Optional Leaves & Flowers - between vines and text */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Leaf between PA and About */}
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="absolute"
                  style={{ left: "20px", top: "80px" }}
                  animate={{
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <path
                    d="M 6 0 Q 8 2 9 4 Q 8 6 6 7 Q 4 6 3 4 Q 4 2 6 0"
                    fill="none"
                    stroke="rgba(120, 140, 110, 0.6)"
                    strokeWidth="1"
                  />
                </motion.svg>

                {/* Flower between PA and About */}
                <motion.svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="absolute"
                  style={{ left: "30px", top: "80px" }}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                  }}
                >
                  <circle cx="5" cy="5" r="3" fill="none" stroke="rgba(200, 180, 140, 0.5)" strokeWidth="1" />
                  <path d="M 5 2 L 5 8 M 2 5 L 8 5" stroke="rgba(200, 180, 140, 0.5)" strokeWidth="1" />
                  <circle cx="5" cy="5" r="1.5" fill="rgba(200, 180, 140, 0.4)" />
                </motion.svg>

                {/* Leaf between About and Case Studies */}
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="absolute"
                  style={{ left: "26px", top: "140px" }}
                  animate={{
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{
                    rotate: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  }}
                >
                  <path
                    d="M 6 0 Q 4 2 3 4 Q 4 6 6 7 Q 8 6 9 4 Q 8 2 6 0"
                    fill="none"
                    stroke="rgba(120, 140, 110, 0.6)"
                    strokeWidth="1"
                  />
                </motion.svg>

                {/* Leaf between Case Studies and On the Side */}
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="absolute"
                  style={{ left: "20px", top: "200px" }}
                  animate={{
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    rotate: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  }}
                >
                  <path
                    d="M 6 0 Q 8 2 9 4 Q 8 6 6 7 Q 4 6 3 4 Q 4 2 6 0"
                    fill="none"
                    stroke="rgba(120, 140, 110, 0.6)"
                    strokeWidth="1"
                  />
                </motion.svg>

                {/* Flower between On the Side and Blog */}
                <motion.svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className="absolute"
                  style={{ left: "30px", top: "260px" }}
                  animate={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  }}
                >
                  <circle cx="5" cy="5" r="3" fill="none" stroke="rgba(200, 180, 140, 0.5)" strokeWidth="1" />
                  <path d="M 5 2 L 5 8 M 2 5 L 8 5" stroke="rgba(200, 180, 140, 0.5)" strokeWidth="1" />
                  <circle cx="5" cy="5" r="1.5" fill="rgba(200, 180, 140, 0.4)" />
                </motion.svg>

                {/* Leaf between Blog and Contact */}
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="absolute"
                  style={{ left: "26px", top: "320px" }}
                  animate={{
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{
                    rotate: { duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                  }}
                >
                  <path
                    d="M 6 0 Q 4 2 3 4 Q 4 6 6 7 Q 8 6 9 4 Q 8 2 6 0"
                    fill="none"
                    stroke="rgba(120, 140, 110, 0.6)"
                    strokeWidth="1"
                  />
                </motion.svg>
              </div>
            </div>

            {/* Navigation Items - Text Only */}
            <div className="absolute inset-0 flex flex-col justify-center" style={{ left: "46px" }}>
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left mb-6 last:mb-0"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1",
                      color: isActive ? "rgba(120, 140, 110, 0.8)" : "hsl(var(--foreground) / 0.7)",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-full bg-background/90 backdrop-blur-md border border-border text-foreground transition-transform duration-200 hover:scale-110"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-heading font-medium text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
