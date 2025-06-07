"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mockHeaderData } from "@/app/property/mockData";

function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsMenuOpen(false);
      setIsScrolled(false);
    };
  }, []);

  const { logo, menuItems } = mockHeaderData;

  // Update menu items for event section
  const eventMenuItems = [
    { id: 1, label: "Home", href: "/event" },
    { id: 2, label: "About", href: "/event/about" },
    { id: 3, label: "Services", href: "/event/services" },
    { id: 4, label: "Gallery", href: "/event/gallery" },
    { id: 5, label: "Contact", href: "/event/contact" },
  ];

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/event" className="flex items-center">
            <img
              src={logo.url}
              alt={logo.alternativeText}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {eventMenuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-lg font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-[#137a70]"
                    : "text-gray-700 hover:text-[#137a70]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            {eventMenuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block py-2 text-lg font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-[#137a70]"
                    : "text-gray-700 hover:text-[#137a70]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
