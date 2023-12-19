"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@/components/NavStyles.css";
import Image from "next/image";

export function Navbar2() {
  const pathname = usePathname();

  return (
    <div className="container">
      <div className="image">
        <Image
          src="/assets/TealLogo.png"
          width={234}
          height={120}
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>

      <div className="navlinks">
        <Link
          className={`${pathname === "/" ? "activeLink" : "link"}`}
          href="/"
        >
          Home
        </Link>

        <Link
          className={` ${pathname === "/about" ? "activeLink" : "link"}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={` ${pathname === "/services" ? "activeLink" : "link"}`}
          href="/services"
        >
          Services
        </Link>
        <Link
          className={` ${pathname === "/projects" ? "activeLink" : "link"}`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={` ${pathname === "/contact" ? "activeLink" : "link"}`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
