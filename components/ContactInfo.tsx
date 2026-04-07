import { CONTACT_INFO, CONTACT_LINKS } from "../static/data";
import ContactLine from "./ContactLine";
import ContactLink from "./ContactLink";

const ContactInfo = () => {
  return (
    <div className="text-white col-span-12 md:col-span-6 lg:col-span-5 rounded-lg flex flex-col p-3 md:p-10 bg-linear-to-br from-[#121212] from-10% via-[#143d31] via-60% to-[#0ebb73] to-100%">
      <h3 className="text-3xl font-bold mb-2">Contact Information</h3>
      <p className="text-[#999]">Say something to start live chat...</p>
      <div className="mt-5 flex flex-col justify-between h-full">
        {/* Contact Information */}
        <div className="flex flex-col gap-4">
          {CONTACT_INFO.map((contact) => (
            <ContactLine
              key={contact.info}
              Icon={contact.Icon}
              info={contact.info}
            />
          ))}
        </div>

        {/* Contact Links */}
        <div className="flex gap-2 mt-6 md:mt-auto">
          {CONTACT_LINKS.map((contact) => (
            <ContactLink
              key={contact.link}
              Icon={contact.Icon}
              link={contact.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
