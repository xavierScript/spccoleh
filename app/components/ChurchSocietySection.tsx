import Link from "next/link";

interface SocietyItem {
  title: string;
  description: string;
  meetingTime: string;
}

interface ChurchSocietySectionProps {
  shouldShake?: boolean;
}

const societies: SocietyItem[] = [
  {
    title: "CHOIR",
    description:
      "Our parish choir brings together voices of all ages in their cultural diversity to lead worship during liturgical celebrations. Join us to praise through active participation with songs in fellowship.",
    meetingTime: "Every Tuesday, Thursday and Saturday at 4:00 PM",
  },
  {
    title: "ALTAR SERVERS",
    description:
      "The Altar Servers assist during the celebration of Mass and other liturgical celebrations; with emphasis placed on learning the importance of service and participating actively in the Church's Sacred rituals.",
    meetingTime: "Every Saturday after the morning Mass and at 4:00 PM",
  },
  {
    title: "LAY READERS (LECTORS)",
    description:
      "The Lectors proclaim the Word of God during Liturgical Worship in a bid to aiding the congregation to engage with the Scripture pages. This function plays a very important role in the growth of the life of the Church — thus, making the Gospel message come alive (Hebrews 4:12).",
    meetingTime: "Every Saturday at 4:30 PM (in the Church compound)",
  },
];

export default function ChurchSocietySection({
  shouldShake = false,
}: ChurchSocietySectionProps) {
  return (
    <section className="rounded-lg">
      <h3 className="text-[#441A05] font-bold text-xl lg:text-2xl mb-6 lg:mb-8 text-center">
        Church Society Meetings
      </h3>

      <div className="space-y-6 lg:space-y-8">
        {societies.map((society, index) => (
          <div key={index} className="flex items-start space-x-3 lg:space-x-4">
            {/* Brown bullet */}
            <span className="w-3 h-3 lg:w-4 lg:h-4 mt-2 rounded-full bg-[#441A05] flex-shrink-0" />

            {/* Society content */}
            <div>
              <h4 className="text-[#441A05] font-bold text-base lg:text-lg mb-2">
                {society.title}
              </h4>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                {society.description}
              </p>
              <p className="text-sm lg:text-base text-gray-500 italic mt-1">
                Meeting Time: {society.meetingTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right-aligned button */}
      <div className="mt-8 lg:mt-10 flex justify-end">
        <Link
          href="/society"
          className={`bg-[#441A05] text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 inline-block ${
            shouldShake ? "shake-button" : ""
          }`}
        >
          See more
        </Link>
      </div>
    </section>
  );
}
