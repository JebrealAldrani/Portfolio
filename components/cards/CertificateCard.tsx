
import { FaClock, FaEye, FaSchool } from "react-icons/fa6";
import Link from "next/link";

interface CertificateProps {
  certificate: {
    course: string;
    status: string;
    hours: string;
    institute: string;
    instructor?: string;
    progress: number;
    link: string;
  };
}

const CertificateCard = ({ certificate }: CertificateProps) => {
  
  return (
    <div
      className="flex gap-4 flex-col py-3 px-4 shadow-[2px_4px_8px_rgba(255,255,255,0.05)] border border-gray-800 rounded-lg"
    >
      <div className="flex gap-2 justify-between items-center">
        <h3 className="text-lg font-bold text-[#0ebb73]">
          {certificate.course}
        </h3>
        <Link
          target="_blank"
          href={certificate.link}
          className="text-white p-2 rounded-lg border border-gray-800 hover:bg-[#1f2a23] duration-300"
        >
          <FaEye />
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaSchool className="text-white" />
          <p className="text-white font-semibold">{certificate.institute}</p>
          {certificate.instructor ? (
            <p className="text-white"> | {certificate.instructor}</p>
          ) : null}
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-white">
            {certificate.hours}
            {/* <span className="text-[#0ebb73]">hour</span> */}
          </p>
          <FaClock className="text-white" />
        </div>
      </div>

      <div className="flex gap-5 items-center justify-between">
        <span
          className={`py-2 px-3 border rounded-lg text-white font-semibold ${certificate.progress !== 100 ? "bg-blue-600/20 border-blue-600" : "bg-green-600/30 border-[#0ebb73]"}`}
        >
          {certificate.status}
        </span>
        <div className="rounded-lg relative h-1 bg-gray-700 grow">
          <div
            style={{ width: `${certificate.progress}%` }}
            className={`absolute top-0 left-0 h-1 rounded-lg ${certificate.progress === 100 ? `bg-[#0ebb73] ` : "bg-blue-400"}`}
          >
            {" "}
            <span className="absolute bg-gray-950 -bottom-6 -right-2 rounded-md text-white text-sm w-11.5 pl-1">
              {certificate.progress} %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
