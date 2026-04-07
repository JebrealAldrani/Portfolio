import { IconType } from "react-icons";

interface ContactLineProps {
  Icon?: IconType | null;
  info: string;
}

const ContactLine = ({ Icon, info }: ContactLineProps) => {
  return (
    <div className="flex gap-3 items-center ">
      <div className="p-2 rounded-lg border border-[#777]">
        {Icon && <Icon size={24} className="text-[#0ebb73]" />}
      </div>
      <p className="text-white text-lg font-medium">{info}</p>
    </div>
  );
};

export default ContactLine;
