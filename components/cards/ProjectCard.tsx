import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

import Link from "next/link";

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
  skills: string[];
}

const ProjectCard = ({
  name,
  image,
  description,
  link,
  skills,
}: ProjectCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    // 1. Wrapper — sets the 3D perspective
    <div
      onClick={() => setFlipped((prev) => !prev)}
      key={name}
      className="group h-105 perspective-[1000px]"
    >
      {/* // 2. Flipper — this is what rotates */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] ${
          flipped ? "rotate-y-180 lg:rotate-y-0" : ""
        }`}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 backface-hidden flex flex-col overflow-hidden rounded-lg bg-[#19201b] border border-gray-800">
          <div className="w-full h-60 relative rounded-t-lg overflow-hidden">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <h2 className="text-xl font-bold mt-4 text-white px-3 mb-2">
            {name}
          </h2>
          <p className="text-lg text-gray-400 px-3 mb-2">{description}</p>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 backface-hidden transform-[rotateY(180deg)] flex flex-col justify-between overflow-hidden rounded-lg bg-[#0f1f13] border border-gray-700 p-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">{name}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>

            {/* Skills Container */}
            <div className="flex flex-col gap-2 text-white mt-5">
              <h3 className="text-lg font-semibold">Skills Used:</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200 transition"
          >
            View Project
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
