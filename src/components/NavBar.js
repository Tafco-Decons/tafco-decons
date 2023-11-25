import Link from "next/link";
import React from "react";

const NavBar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div
      style={{
        backgroundColor: "steelblue",
        color: "skyblue",
        padding: "3em",
        width: "100%",
      }}
    >
      {navLinks.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
