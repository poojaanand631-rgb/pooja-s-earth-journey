import { useState, useEffect } from "react";

export const useNavVisibility = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const footerSection = document.getElementById("contact");

      if (aboutSection && footerSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show nav when About section enters viewport, hide when Footer enters
        if (aboutRect.top < windowHeight && footerRect.top > windowHeight) {
          setIsNavVisible(true);
        } else {
          setIsNavVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isNavVisible;
};
