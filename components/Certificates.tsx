"use client";

import { CERTIFICATES } from "@/static/data";
import CertificateCard from "./cards/CertificateCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Certificates = () => {
  const certificatesRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(certificatesRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: certificatesRef.current,
          start: "top 80%",
          end: "top 30%",
          // markers: true, // optional, for debugging
        },
      });

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

    return () => ctx.revert();
  }, []);
  return (
    <div
      id="certificates"
      ref={certificatesRef}
      className="w-full flex flex-col my-20 scroll-mt-20"
    >
      <h2 className=" text-5xl bg-linear-to-r from-[#0ebb73] to-green-300 bg-clip-text text-transparent text-center mb-15 font-bold">
        Certificates
      </h2>

      {/* Certificates Container */}
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {CERTIFICATES.map((certificate) => (
          <CertificateCard key={certificate.course} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
