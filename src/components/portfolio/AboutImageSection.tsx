import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    url: "/About me pictures/about me 4.png",
    alt: "About me 4",
  },
  {
    id: 2,
    url: "/About me pictures/About me 3.png",
    alt: "About me 3",
  },
  {
    id: 3,
    url: "/About me pictures/about me 2.png",
    alt: "About me 2",
  },
  {
    id: 4,
    url: "/About me pictures/About me -1.png",
    alt: "About me 1",
  },
];

const AboutImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  };

  // Calculate position, scale, and blur for each image based on distance from current
  const getImageStyle = (index: number) => {
    let distance = index - currentIndex;
    
    // Handle wrapping for circular carousel
    if (distance > images.length / 2) {
      distance = distance - images.length;
    } else if (distance < -images.length / 2) {
      distance = distance + images.length;
    }

    const absDistance = Math.abs(distance);
    
    // Center image (distance = 0)
    if (distance === 0) {
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        zIndex: 10,
      };
    }
    
    // Side images - left (negative) and right (positive)
    const baseOffset = 380; // Horizontal offset
    const scaleFactor = 0.85 - (absDistance * 0.05); // Larger side images
    const opacityFactor = 0.85 - (absDistance * 0.2);
    const blurFactor = absDistance * 2.5;
    
    return {
      x: distance * baseOffset,
      scale: Math.max(0.65, scaleFactor),
      opacity: Math.max(0.5, opacityFactor),
      blur: Math.min(8, blurFactor),
      zIndex: 10 - absDistance,
    };
  };

  return (
    <div className="relative w-full mx-auto mt-8 mb-16">
      <div
        className="relative h-[500px] flex items-center justify-center"
        style={{ overflow: "visible" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Render all images */}
        {images.map((image, index) => {
          const style = getImageStyle(index);
          const isActive = index === currentIndex;
          
          return (
            <motion.div
              key={image.id}
              className="absolute"
              initial={false}
              animate={{
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
                filter: `blur(${style.blur}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                mass: 1,
              }}
              style={{
                zIndex: style.zIndex,
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`${isActive ? 'h-[500px]' : 'h-[450px]'} w-auto object-contain rounded-lg shadow-lg`}
                loading="lazy"
              />
            </motion.div>
          );
        })}

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-md border border-sage/20 text-foreground hover:bg-background/95 transition-all duration-300 shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur-md border border-sage/20 text-foreground hover:bg-background/95 transition-all duration-300 shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 4000);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImageSection;
