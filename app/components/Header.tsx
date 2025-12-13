import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[200px] flex items-center justify-center">
      <Image
        src="/picture-gothic-cathedral.png"
        alt="Cathedral"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <button
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center z-10"
        aria-label="Open menu"
      >
        <Image src="/hamburger.svg" alt="Menu" width={24} height={24} />
      </button>
      <div className="relative z-10 text-center px-4">
        <Image
          src="/icon-st peter.png"
          alt="St. Patrick Icon"
          width={40}
          height={40}
          className="mx-auto mb-2"
        />
        <h1 className="text-white text-xl font-bold leading-tight">
          St. Patrick&apos;s Catholic
          <br />
          Chaplaincy, Oleh
        </h1>
      </div>
    </header>
  );
}
