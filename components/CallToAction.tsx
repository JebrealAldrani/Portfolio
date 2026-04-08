"use client";

import { IoMdDownload } from "react-icons/io";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ctaRef}
      className="px-8 py-4 rounded-md bg-[#0ebb7360] flex items-center gap-4 w-full my-12"
    >
      <a
        href="/files/Jebreal_Aldrani_Resume.pdf"
        download
        className="bg-white text-[#074B2F] font-bold py-2 px-4 rounded-md hover:bg-gray-200 flex items-center gap-2 transition"
      >
        Download
        <IoMdDownload />
      </a>
      <p className="text-white text-xl font-medium ">Install My CV</p>
    </div>
  );
};

export default CallToAction;
