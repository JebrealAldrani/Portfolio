import { IconType } from "react-icons";

interface ContactLineProps {
  Icon?: IconType | null;
  info: string;
  type: string;
}

const ContactLine = ({ Icon, info, type }: ContactLineProps) => {
  const navigateContact = () => {
    if (type === "phone") {
      window.open("https://wa.me/962787755585", "_blank");
    } else if (type === "email") {
      window.location.href = "mailto:jebrealaldrani@gmail.com";
    }
  };
  return (
    <div
      className="flex gap-3 items-center cursor-pointer hover:bg-[#0a20172f] transition-colors duration-300 rounded-md"
      onClick={navigateContact}
    >
      <div className="p-2 rounded-lg border border-[#777]">
        {Icon && <Icon size={24} className="text-[#0ebb73]" />}
      </div>
      <p className="text-white text-lg font-medium">{info}</p>
    </div>
  );
};

export default ContactLine;
