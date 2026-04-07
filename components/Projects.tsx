"use client";

import { PROJECTS } from "../static/data";
import ProjectCard from "./cards/ProjectCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(projectsRef.current?.children || [], {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full flex flex-col my-20">
      <h2 className=" text-5xl bg-linear-to-r from-[#0ebb73] to-green-300 bg-clip-text text-transparent text-center mb-15 font-bold">
        Projects
      </h2>

      {/* Projects Container */}
      <div
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7"
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link}
            skills={project.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
