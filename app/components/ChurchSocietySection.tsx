interface SocietyItem {
  title: string;
  description: string;
}

const societies: SocietyItem[] = [
  {
    title: "CHOIR",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris egestas in augue amet. Mattis nec massa sit mauris et nulla.",
  },
  {
    title: "🔴 ALTAR SERVERS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris egestas in augue amet. Mattis nec massa sit mauris et nulla.",
  },
  {
    title: "🔴 LAY READERS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris egestas in augue amet. Mattis nec massa sit mauris et nulla.",
  },
];

export default function ChurchSocietySection() {
  return (
    <section className="rounded-lg">
      <h3 className="text-[#441A05] font-bold text-xl mb-4 text-center">
        Church Society Meetings
      </h3>

      <div className="space-y-4">
        {societies.map((society, index) => (
          <div key={index}>
            <h4 className="text-[#441A05] font-bold text-base mb-2">
              {society.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {society.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-[#441A05] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300">
          See more
        </button>
      </div>
    </section>
  );
}
