import Image from "next/image";

export default function StationsSection() {
  return (
    <section className="bg-white rounded-lg overflow-hidden shadow-sm mb-6">
      <div className="p-6">
        <h3 className="text-[#441A05] font-bold text-xl mb-3 text-center">
          Stations of the Cross
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris
          egestas in augue amet. Mattis nec massa sit mauris et nulla.
        </p>
        <button className="bg-[#441A05] text-white px-5 py-2 rounded-full text-sm font-semibold">
          See more
        </button>
      </div>
      <div className="relative w-full h-[280px]">
        <Image
          src="/picture-stations-of-the-cross.png"
          alt="Stations of the Cross"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
