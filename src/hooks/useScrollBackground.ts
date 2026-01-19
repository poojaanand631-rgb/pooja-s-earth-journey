import { useEffect } from "react";

export const useScrollBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", bg: "hsl(48 33% 97%)" },
        { id: "about", bg: "hsl(100 18% 92%)" },
        { id: "case-studies", bg: "hsl(85 15% 85%)" },
        { id: "on-the-side", bg: "hsl(14 35% 90%)" },
        { id: "blog", bg: "hsl(48 33% 97%)" },
        { id: "contact", bg: "hsl(24 10% 23%)" },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentBg = "hsl(48 33% 97%)";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentBg = section.bg;
            break;
          }
        }
      }

      // Smoothly transition body background
      document.body.style.transition = "background-color 0.6s ease-out";
      document.body.style.backgroundColor = currentBg;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
