"use client";

import gsap from "gsap";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { HEADER_ITEMS } from "../static/data";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const ListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    // Only animate when menu opens and the ul is in the DOM
    if (open && ListRef.current) {
      const items = ListRef.current.querySelectorAll("li");

      gsap.fromTo(
        items,
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.07, // each item animates in one after another
          ease: "power2.out",
        },
      );
    }
  }, [open]); // re-runs every time open changes

  return (
    <nav className="w-full relative flex items-center justify-start md:justify-center py-2 fixed-top bg-[#151d17] rounded-xl border-1-solid border border-[#2d352f] h-11.75">
      <ul className="hidden md:flex md:items-center md:gap-5">
        {HEADER_ITEMS.map((item) => (
          <li key={item.title}>
            <Link
              scroll={true}
              className="text-[#10b981] font-bold text-lg hover:bg-[#1f2a23] hover:text-[#0ebb73] px-3 py-1 rounded-lg duration-300 transition-all"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {open && (
        <div
          onClick={toggleMenu}
          className="absolute top-full left-0 w-full flex items-start justify-start h-screen bg-black/50 backdrop-blur-xs z-999"
        >
          <ul
            ref={ListRef}
            className="md:hidden mt-2 w-full bg-[#151d17] border border-[#2d352f] rounded-xl flex flex-col items-start p-2 gap-2"
          >
            {HEADER_ITEMS.map((item) => (
              <li key={item.title} className="w-full">
                <Link
                  href={item.href}
                  className="block w-full py-1 px-3 text-[#10b981] font-semibold text-lg rounded-md hover:bg-[#1f2a23] hover:text-[#0ebb73] transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <RxHamburgerMenu
        className="md:hidden text-white ml-4 cursor-pointer w-6 h-6"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Header;
