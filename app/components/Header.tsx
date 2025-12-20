"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Parish Activities", href: "/parish-activities" },
  { label: "Church Societies", href: "/society" },
  { label: "Daily Mass Readings", href: "/readings" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isImageInView, setIsImageInView] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      const last = lastScrollY.current || 0;

      // hide when scrolling down past 80px, show when scrolling up
      if (current > last && current > 80) {
        setNavHidden(true);
      } else if (current < last) {
        setNavHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageInView(true);
          } else {
            setIsImageInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header ref={headerRef} className="relative w-full h-[200px] lg:h-screen">
        {/* Background image - animate whenever header is on screen */}
        <Image
          src="/picture-gothic-cathedral.png"
          alt="Cathedral"
          fill
          className={`object-cover ${isImageInView ? "animate-zoom-out" : ""}`}
          priority
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Top bar - Mobile/Tablet only */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-[500] lg:hidden">
          {/* Left icon */}
          <Image
            src="/icon-st peter.png"
            alt="St. Peter Icon"
            width={32}
            height={32}
          />

          {/* Hamburger/Close button */}
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center z-[510] relative cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              console.log("hamburger button clicked");
              toggleMenu();
            }}
          >
            <img
              src={isMenuOpen ? "/close.svg" : "/hamburger.svg"}
              alt={isMenuOpen ? "Close" : "Menu"}
              width={24}
              height={24}
              className="pointer-events-none"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:flex absolute top-0 left-0 right-0 z-[500] bg-gradient-to-b from-black/50 to-transparent transform transition-transform duration-300 ${
            navHidden ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            {/* Left icon */}
            <Image
              src="/icon-st peter.png"
              alt="St. Peter Icon"
              width={48}
              height={48}
              className="drop-shadow-lg"
            />

            {/* Navigation Links */}
            <ul className="flex items-center gap-8">
              {navigationLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-white text-base font-semibold transition-colors relative group py-2 ${
                        isActive ? "text-white/100" : "hover:text-white/80"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                          isActive
                            ? "w-full bg-white"
                            : "w-0 bg-white group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Center title */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <h1 className="text-white text-xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-tight drop-shadow-2xl">
            St. Peter Catholic
            <br />
            Chaplaincy, Oleh Campus
          </h1>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
