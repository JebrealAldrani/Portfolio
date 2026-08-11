"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const About = () => {
  const positionRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power3.out", // 🔥 أنعم من back
        },
      });

      // 👈 الاثنين يدخلوا بنفس الوقت
      tl.from(positionRef.current, {
        opacity: 0,
        x: -100,
      }).from(
        aboutRef.current,
        {
          opacity: 0,
          x: 100,
        },
        "<", // 🔥 نفس التوقيت
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-content-between gap-8 px-4 md:px-16">
      {/* Position Name */}
      <div ref={positionRef} className="w-full text-5xl font-bold md:w-2/6">
        <p className="text-white">Jebreal Aldrani</p>
        <span className="bg-linear-to-r from-[#0ebb73] to-green-300 bg-clip-text text-transparent">
          Fullstack Developer
        </span>
      </div>

      {/* About my Role */}
      <div
        ref={aboutRef}
        className=" w-full md:w-4/6 text-lg text-gray-400 flex flex-col gap-4"
      >
        <p>
          {" "}
          Full-Stack Developer specializing in Next.js, React.js, TypeScript,
          Node.js, and Express.js, focused on building scalable applications
          with clean architecture, powerful functionality, and exceptional user
          experiences.{" "}
        </p>

        <p>
          {" "}
          I combine modern UI libraries, APIs, databases, and third-party
          services to turn complex requirements into reliable, production-ready
          products. From intuitive interfaces to robust backend systems, I build
          software designed to perform, scale, and deliver real business
          value.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
