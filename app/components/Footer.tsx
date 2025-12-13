import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#441A05] text-white py-8 px-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-start gap-3 mb-6">
          <Image
            src="/icon-st peter.png"
            alt="St. Peter Icon"
            width={32}
            height={32}
          />
          <div>
            <h3 className="font-bold text-lg">SPCC, Oleh</h3>
            <p className="text-xs leading-relaxed opacity-90">
              Welcome to Catholic Students Community and Faith Formation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">Navigation</h4>
            <ul className="space-y-1 opacity-90">
              <li>Home</li>
              <li>About</li>
              <li>Society</li>
              <li>Stations of the Cross</li>
              <li>Today&apos;s Readings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <ul className="space-y-1 opacity-90 text-xs">
              <li>
                Address:{" "}
                <span className="block">
                  SPCC Oleh, Delta State of Federal Polytechnic Oleh
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
