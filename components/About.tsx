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
          Frontend Developer
        </span>
      </div>

      {/* About my Role */}
      <div
        ref={aboutRef}
        className=" w-full md:w-4/6 text-lg text-gray-400 flex flex-col gap-4"
      >
        <p>
          Frontend Developer experienced in building responsive and scalable web
          applications using Next.js, React.js, TypeScript, and modern
          JavaScript technologies. Skilled in developing dynamic user
          interfaces, integrating APIs, and creating clean, maintainable code.
        </p>
        <p>
          worked on projects including dashboards, system management, scheduling
          platforms, and e-commerce applications, focusing on performance,
          usability, and modern UI/UX practices.
        </p>
      </div>
    </div>
  );
};

export default About;
