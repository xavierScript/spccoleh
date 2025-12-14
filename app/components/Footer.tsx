import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#441A05] text-white py-8 px-6">
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
            <span className="font-bold text-base text-lg">SPCC, Oleh</span>
          </div>
          <p className="text-xs opacity-90">
            {" "}
            Copyright © {new Date().getFullYear()} SPCC, Oleh
          </p>
          <p className="text-xs opacity-90">All rights reserved</p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col">
          <h4 className="font-semibold mb-3 text-base">Navigation</h4>
          <ul className="space-y-2 text-sm">
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
                href="/readings"
                className="opacity-90 group-hover:opacity-100 relative block py-1 hover:translate-x-1 transition-transform duration-200"
              >
                Daily Mass Readings
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
          </ul>
        </div>

        {/* Right: Contact Us */}
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-1 text-sm opacity-90">
            <li>Phone no: 080262552442</li>
            <li>
              Address:{" "}
              <span className="block">Opposite Faculty of Eng, DELSU</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
