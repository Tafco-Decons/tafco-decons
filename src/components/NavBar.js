"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import "@/components/NavStyles.css";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="container">
      <div
        className="image"
        onClick={() => {
          router.push("/home");
        }}
      >
        <Image
          src="/assets/TealLogo.png"
          width={234}
          height={120}
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>

      <div className="navlinks">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "activeLink" : "link"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
