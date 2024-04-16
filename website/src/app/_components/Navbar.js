"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background py-4 items-center w-full flex justify-between lg:my-4">
      <div className="hidden lg:flex text-3xl container font-bold">
        <h1>SMACS-Mt San Antonio College</h1>
      </div>
      <div className="flex justify-around lg:justify-end w-full lg:space-x-12 ">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "font-bold" : ""
          } md:text-xl lg:text-2xl`}
        >
          Home
        </Link>
        <Link
          href="/events"
          className={`${
            pathname === "/events" ? "font-bold" : ""
          } md:text-xl lg:text-2xl`}
        >
          Events
        </Link>
        <Link
          href="/projects"
          className={`${
            pathname === "/projects" ? "font-bold" : ""
          } md:text-xl lg:text-2xl`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "font-bold" : ""
          } md:text-xl lg:text-2xl`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
