import Link from "next/link";
import { IconType } from "react-icons";

interface ContactLinkProps {
  Icon: IconType;
  link: string;
}

const ContactLink = ({ Icon, link }: ContactLinkProps) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center bg-[#1a1a1a] p-2 rounded-lg "
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        size={24}
        className="text-white hover:text-[#0ebb73] transition-all duration-300"
      />
    </Link>
  );
};

export default ContactLink;
