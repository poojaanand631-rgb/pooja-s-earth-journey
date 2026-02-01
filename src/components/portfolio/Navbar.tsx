import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "On the Side", href: "#on-the-side" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) for the first viewport height
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / viewportHeight, 1);
      setScrollProgress(progress);

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
  };

  // Calculate opacity and blur based on scroll
  const navOpacity = scrollProgress;
  const navBlur = scrollProgress * 12; // 0 to 12px blur
  const spacing = Math.max(0, 1 - scrollProgress); // spacing decreases as we scroll

  return (
    <>
      {/* Desktop Top Navigation */}
      <motion.nav
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          className="mx-auto px-6 md:px-12 lg:px-24 py-6 transition-all duration-700 ease-out"
          style={{
            paddingTop: `${24 + spacing * 24}px`, // More spacing initially
          }}
        >
          <div className="relative pointer-events-auto">
            {/* Glass morphism background - fades in on scroll */}
            <motion.div
              className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
              style={{
                background: `rgba(250, 248, 245, ${navOpacity * 0.7})`,
                backdropFilter: `blur(${navBlur}px)`,
                border: `1px solid rgba(120, 140, 110, ${navOpacity * 0.15})`,
                boxShadow: navOpacity > 0.5 ? `0 4px 24px -4px rgba(120, 140, 110, ${navOpacity * 0.12})` : 'none',
              }}
            />

            {/* Navigation content */}
            <div
              className="relative flex items-center justify-between transition-all duration-700 ease-out"
              style={{
                gap: `${spacing * 120}px`, // Loose initially, compact on scroll
                padding: `${12 + spacing * 8}px ${24 + spacing * 12}px`,
              }}
            >
              {/* Logo - Left */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                style={{
                  opacity: 0.7 + navOpacity * 0.3,
                }}
              >
                <Leaf 
                  className="transition-all duration-700 ease-out"
                  style={{ 
                    width: `${20 + spacing * 4}px`,
                    height: `${20 + spacing * 4}px`,
                  }} 
                />
                <span 
                  className="font-heading font-normal tracking-wide transition-all duration-700 ease-out"
                  style={{
                    fontSize: `${18 + spacing * 6}px`,
                    letterSpacing: `${spacing * 0.1}em`,
                  }}
                >
                  PA
                </span>
              </button>

              {/* Navigation Links - Right */}
              <div
                className="flex items-center transition-all duration-700 ease-out"
                style={{
                  gap: `${32 + spacing * 24}px`, // Loose initially, compact on scroll
                }}
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="relative font-medium transition-all duration-300 ease-out"
                      style={{
                        fontSize: `${14 + spacing * 2}px`,
                        color: isActive 
                          ? "hsl(100 15% 56%)" 
                          : `rgba(62, 56, 48, ${0.6 + navOpacity * 0.2})`,
                        letterSpacing: `${0.02 + spacing * 0.04}em`,
                        opacity: 0.7 + navOpacity * 0.3,
                      }}
                    >
                      {item.label}
                      
                      {/* Active indicator - subtle underline */}
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Simple overlay */}
      <AnimatePresence>
        {scrollProgress > 0.3 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden fixed top-0 left-0 right-0 z-50 pointer-events-auto"
          >
            <div className="mx-6 mt-6 p-4 rounded-full bg-background/80 backdrop-blur-md border border-sage/20 shadow-sm">
              <div className="flex items-center justify-between">
                {/* Mobile Logo */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 text-foreground"
                >
                  <Leaf className="w-5 h-5" />
                  <span className="font-heading text-lg">PA</span>
                </button>

                {/* Mobile Menu - Simplified */}
                <div className="flex items-center gap-4 text-xs">
                  {navItems.slice(0, 3).map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
