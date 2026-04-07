"use client";

import { SKILLS } from "../static/data";
import Skill from "./Skill";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillList = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(containerRef.current?.children || [], {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // يبدأ لما القسم يدخل الشاشة
          end: "top 30%",
          toggleActions: "play none none none",
          // markers: true, // 👈 شغلها للتجربة
        },
      });

      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert(); // تنظيف
  }, []);
  return (
    <div
      ref={sectionRef}
      id="technologies"
      className="w-full flex flex-col scroll-mt-20"
    >
      <h2 className=" text-5xl bg-linear-to-r from-[#0ebb73] to-green-300 bg-clip-text text-transparent text-center mb-15 font-bold">
        Skills
      </h2>
      {/* Skills Container */}
      <div ref={containerRef} className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => (
          <Skill
            key={skill.name}
            skill={skill.name}
            icon={skill.icon}
            svg={skill.svg}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
