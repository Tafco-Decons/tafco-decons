"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "@/components/NavStyles.css";

const NavBar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div class="container">
      <div class="image">
        <Image
          src="/assets/TealLogo.png"
          width={234}
          height={120}
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>

      <div class="navlinks">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              class={isActive ? "activeLink" : "link"}
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
