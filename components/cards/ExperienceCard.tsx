
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


interface props {
  experience: {
    image: string;
    position: string;
    type: string;
    location: string;
    startDate: string;
    endDate: string;
  };
}

const ExperienceCard = ({ experience }: props) => {
  
  return (
    <div
      className="flex flex-col bg-[#19201b] border border-gray-800 rounded-lg overflow-hidden shadow-[2px_4px_8px_rgba(255,255,255,0.05)]"
    >
      <div className="relative w-full h-50">
        <Image
          src={experience.image}
          alt={experience.position}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col px-3 gap-4 text-white mt-4 mb-4">
        <div className="flex justify-between ">
          <h3 className="font-bold text-xl">
            {experience.position} | {experience.type}
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <FaLocationDot />
          <p>{experience.location}</p>
        </div>

        <div className="flex gap-2 items-center">
          <MdDateRange />
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
