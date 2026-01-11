import { RefObject } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHomeAnimations = (containerRef: RefObject<HTMLElement>) => {
  useGSAP(
    () => {
      // Hero Section Animations
      const heroElements = [
        ".red-bubble",
        ".yellow-bubble",
        ".front-bubble",
        ".stars-left",
        ".stars-right",
        ".welcome",
        ".demon-cat",
        ".to-text",
        ".su-imt-text",
        ".title-background",
      ];
      const heroProps = [
        ".red-spike-landing",
        ".yellow-star-landing",
        ".green-spike-landing",
        ".green-arrow-landing",
        ".among-us",
        ".dragon",
        ".crown",
      ];

      // Animate Hero Elements On Load
      gsap.fromTo(
        heroElements,
        {
          opacity: 0,
          scale: 0.8,
          y: -50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        heroProps,
        {
          opacity: 0,
          scale: 0.8,
          y: -50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );

      // Student Union Section Scroll Animation
      gsap.fromTo(
        ".what-is-su-imt-text",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".container-student-union",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".su-imt-description",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".su-imt-description",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".learn-more-button",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".learn-more-button",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Competition Section Animations
      gsap.fromTo(
        ".competition-text",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".competition-wrapper",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Competition Cards Animation
      gsap.fromTo(
        ".competition-left-container",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".competition-right-left-container",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".competition-right-container",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".competition-right-left-container",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Services Section Animations
      gsap.fromTo(
        ".explore-text",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".explore-text",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service Cards with Staggered Animation
      gsap.fromTo(
        [
          ".home-service-card-left",
          ".home-service-card-center",
          ".home-service-card-right",
        ],
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".home-service-card-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".explore-button",
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".explore-button",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Footer Elements Animation
      gsap.fromTo(
        [".green-home-footer-left", ".yellow-spike-right"],
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".green-home-footer-left",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(".green-line", {
        rotation: 15,
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".competition-wrapper",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Hover Animations for Interactive Elements
      const learnMoreButton = document.querySelector(".learn-more-button");
      const exploreButton = document.querySelector(".explore-button");

      if (learnMoreButton) {
        learnMoreButton.addEventListener("mouseenter", () => {
          gsap.to(learnMoreButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        learnMoreButton.addEventListener("mouseleave", () => {
          gsap.to(learnMoreButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      if (exploreButton) {
        exploreButton.addEventListener("mouseenter", () => {
          gsap.to(exploreButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        exploreButton.addEventListener("mouseleave", () => {
          gsap.to(exploreButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Mobile Competition Card Animation
      gsap.fromTo(
        ".mobile-competition-container",
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 2,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".mobile-competition-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Laptop, Camera, and Book Animations
      gsap.fromTo(
        [".laptop-on-stick", ".camera", ".book-laptop"],
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".container-student-union",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Alternative: Individual Animations with Different Timings
      // If you want more control over each element:

      // Laptop Animation
      gsap.fromTo(
        ".laptop-on-stick",
        {
          opacity: 0,
          x: -50,
          rotation: -10,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".container-student-union",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Camera Animation
      gsap.fromTo(
        ".camera",
        {
          opacity: 0,
          x: 50,
          scale: 0.5,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: ".container-student-union",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Book Laptop Animation
      gsap.fromTo(
        ".book-laptop",
        {
          opacity: 0,
          y: 80,
          rotation: 5,
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 1.1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".container-student-union",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paper Cloud and Red Star Footer Animations
      gsap.fromTo(
        ".paper-cloud",
        {
          opacity: 0,
          x: -100,
          rotation: -10,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".paper-cloud",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".red-star-footer-left",
        {
          opacity: 0,
          x: -80,
          scale: 0.8,
          rotation: -20,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".red-star-footer-left",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Alternative: Combined Animation with Stagger
      gsap.fromTo(
        [".paper-cloud", ".red-star-footer-left"],
        {
          opacity: 0,
          x: -100,
          scale: 0.7,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".explore-text",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );
};
