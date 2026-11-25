"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/equipe", label: "Équipe" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Clinique Recto Verso, accueil" onClick={() => setMenuOpen(false)}>
        <Image src="/assets/logos/symbol-pale.svg" alt="Clinique Recto Verso" width={52} height={52} priority unoptimized />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="site-navigation" className={`navigation${menuOpen ? " is-open" : ""}`} aria-label="Navigation principale">
        {links.map((link) => (
          <Link href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
        ))}
        <a className="button button-small" href="https://www.gorendezvous.com/" target="_blank" rel="noreferrer">
          Prendre rendez-vous <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
