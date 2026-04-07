import { IconType } from "react-icons";
import Image from "next/image";

interface SkillProps {
  skill: string;
  icon?: IconType | null;
  svg?: string;
  color?: string;
}

const Skill = ({ skill, icon: Icon, svg, color }: SkillProps) => {
  return (
    <div className="flex gap-3 rounded-lg py-1.5 px-3 items-center border border-gray-600 relative">
      {Icon ? (
        <Icon size={24} style={{ color: color || undefined }} />
      ) : svg ? (
        <Image
          width={24}
          height={24}
          src={svg}
          alt={skill}
          className="w-6 h-6"
        />
      ) : null}
      <span className="text-white font-semibold">{skill}</span>

    </div>
  );
};

export default Skill;
