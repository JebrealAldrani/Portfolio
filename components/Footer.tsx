const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full bg-linear-to-br from-[#0ebb73] via-[#173026] to-[#03492c] py-3 flex flex-col items-center text-[#a8a1a1]">
      <p className="text-center">
        &copy; {year} Jebreal Aldrani. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
