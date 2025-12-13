"use client";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Parish Activities", href: "/parish-activities" },
  { label: "Church Societies", href: "/society" },
  { label: "Daily Readings", href: "/readings" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-[#441A05] to-[#2A1003] z-50 shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Fixed close button */}
        <button
          onClick={onClose}
          className="fixed top-4 left-4 w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded transition-colors z-[60]"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-6 pt-16">
          <h2 className="text-white font-bold text-xl tracking-wide mb-6">
            Menu
          </h2>

          <div className="w-full h-px bg-white/20 mb-6" />

          <nav>
            <ul className="space-y-1">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    className="text-white/90 text-base block py-3 px-4 rounded-lg hover:bg-white/10 hover:text-white hover:pl-6 transition-all duration-200 relative group"
                    onClick={onClose}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
