"use client";

import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="relative w-full h-[200px]">
        {/* Background image */}
        <Image
          src="/picture-gothic-cathedral.png"
          alt="Cathedral"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Top bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-[500]">
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

        {/* Center title */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <h1 className="text-white text-xl font-bold leading-tight">
            St. Peter&apos;s Catholic
            <br />
            Chaplaincy, Oleh Campus
          </h1>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
