import Image from "next/image";

export default function StationsSection() {
  return (
    <section className="mb-12">
      <div className="mb-4">
        <h3 className="text-[#441A05] font-bold text-xl mb-3 text-center">
          Stations of the Cross
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Journey with us through the Stations of the Cross, reflecting on the
          passion and sacrifice of Jesus Christ. Join our parish in this
          meaningful devotion to deepen your faith and spiritual connection.
        </p>
        <a
          href="https://mycatholic.life/catholic-prayers/stations-of-the-cross/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#441A05] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300"
        >
          See more
        </a>
      </div>

      {/* Image with rounded borders */}
      <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-sm">
        <Image
          src="/picture-stations-of-the-cross.jpg"
          alt="Stations of the Cross"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
