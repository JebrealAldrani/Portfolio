"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      id="contact"
      className="w-full flex flex-col scroll-mt-20 mb-10"
    >
      <h2 className=" text-5xl bg-linear-to-r from-[#0ebb73] to-green-300 bg-clip-text text-transparent text-center mb-15 font-bold">
        Contact
      </h2>
      <div className="grid grid-cols-11 md:grid-cols-12 gap-2 bg-[#1a1a1a] p-2 rounded-lg">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
