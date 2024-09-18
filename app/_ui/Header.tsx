import Link from "next/link";
import React from "react";

// TODO: Restyle this component
// TODO: "Frontend" is a logo and should navigate home
// TODO: Fix Games and Results routing
// TODO: "About" should open a new tab to the virtually sports wbesite
export function Header() {
  return (
    <div>
      <span>Frontend</span>
      <nav>
        {nav.map((n) => (
          <Link href={n.href} key={n.href}>
            {n.label}
          </Link>
        ))}
      </nav>
      <nav>
        <a href="https://virtuallysports.com/#about-us">About</a>
      </nav>
    </div>
  );
}

const nav = [
  { href: "/games", label: "Games" },
  { href: "/results", label: "Results" },
];
