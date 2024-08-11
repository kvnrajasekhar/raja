import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block pl-3 pr-4 py-2 text-[#ADB7BE] sm:text-xl md:z-20 rounded md:p-0 hover:text-white no-underline"
    >
      {title}
    </Link>
  );
};

export default NavLink;
