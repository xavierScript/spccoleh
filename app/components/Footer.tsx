"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.05 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={`bg-[#441A05] text-white py-8 px-6 lg:text-base transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Logo + Name + Copyright */}
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/icon-st peter.png"
              alt="St. Peter Icon"
              width={32}
              height={32}
            />
            <span className="font-bold text-base lg:text-xl">
              SPCC, Oleh Campus
            </span>
          </div>
          <p className="text-xs lg:text-sm opacity-90">
            {" "}
            Copyright © {new Date().getFullYear()} SPCC, Oleh Campus
          </p>
          <p className="text-xs lg:text-sm opacity-90">All rights reserved</p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col">
          <h4 className="font-semibold mb-3 text-base lg:text-lg">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm lg:text-base">
            <li className="group">
              <a
                href="/"
                className="opacity-90 group-hover:opacity-100 relative block py-1 hover:translate-x-1 transition-transform duration-200"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li className="group">
              <a
                href="/about"
                className="opacity-90 group-hover:opacity-100 relative block py-1 hover:translate-x-1 transition-transform duration-200"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li className="group">
              <a
                href="/parish-activities"
                className="opacity-90 group-hover:opacity-100 relative block py-1 hover:translate-x-1 transition-transform duration-200"
              >
                Parish Activities
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>

            <li className="group">
              <a
                href="/society"
                className="opacity-90 group-hover:opacity-100 relative block py-1 hover:translate-x-1 transition-transform duration-200"
              >
                Church Societies
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>
            <li className="group">
              <a
                href="/readings"
                className="opacity-90 group-hover:opacity-100 relative block py-1 hover:translate-x-1 transition-transform duration-200"
              >
                Daily Mass Readings
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Us */}
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 lg:text-lg">Contact Us</h4>
          <ul className="space-y-1 text-sm lg:text-base opacity-90">
            <li>Phone no: 08032342601, 08036076656</li>
            <li>
              Address:{" "}
              <span className="block">
                Delta State University, Oleh Campus. Behind Provost's Quarters
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
