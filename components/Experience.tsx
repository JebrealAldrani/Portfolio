"use client";

import { EXPERIENCES } from "../static/data";
import ExperienceCard from "./cards/ExperienceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Experience = () => {
  const experiencesRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate parent section
      if (experiencesRef.current) {
        gsap.from(experiencesRef.current, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: experiencesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animate children (cards)
      if (containerRef.current) {
        gsap.from(containerRef.current.children, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);
  return (
    <div
      ref={experiencesRef}
      id="companies"
      className="w-full flex flex-col my-20 scroll-mt-20"
    >
      <h2 className=" text-5xl bg-linear-to-r from-[#0ebb73] to-green-300 bg-clip-text text-transparent text-center mb-15 font-bold">
        Experience
      </h2>

      {/* Experience Container */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7"
      >
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.startDate} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
