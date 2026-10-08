"use client";

import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#top" className="navbar-logo" onClick={closeMenu}>
          SK<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <a href="#contact" className="nav-button">
          Let&apos;s talk
          <span>↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`mobile-menu-button ${
            isMenuOpen ? "mobile-menu-button-open" : ""
          }`}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-menu ${
          isMenuOpen ? "mobile-menu-open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
          >
            <span>{item.label}</span>
            <span>↗</span>
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-contact-link"
          onClick={closeMenu}
        >
          <span>Let&apos;s talk</span>
          <span>↗</span>
        </a>
      </nav>
    </header>
  );
}