import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder image data - replace with actual image URLs
// Using earthy, nature-inspired images that match the portfolio theme
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80&fit=crop",
    alt: "Sustainable nature",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=80&fit=crop",
    alt: "Environmental conservation",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1464226187124-b2b3a3ae048a?w=1920&q=80&fit=crop",
    alt: "Sustainability journey",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&fit=crop",
    alt: "Nature connection",
  },
];

const AboutImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="h-screen w-full relative overflow-hidden"
      style={{ background: "var(--bg-about)" }}
    >
      <AnimatePresence mode="wait">
        {images.map(
          (image, index) =>
            index === currentIndex && (
              <motion.div
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a gradient if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.background =
                        "linear-gradient(135deg, hsl(var(--sage) / 0.1), hsl(var(--terracotta) / 0.1))";
                    }
                  }}
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Subtle indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutImageSection;
