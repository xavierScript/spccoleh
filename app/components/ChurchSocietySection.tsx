interface SocietyItem {
  title: string;
  description: string;
  meetingTime: string;
}

const societies: SocietyItem[] = [
  {
    title: "CHOIR",
    description:
      "Our parish choir brings together voices of all ages to lead worship and enhance the liturgy with inspiring music. Join us to praise through song and fellowship.",
    meetingTime: "Every Saturday at 4:00 PM",
  },
  {
    title: "ALTAR SERVERS",
    description:
      "Altar servers assist during Mass and other liturgical celebrations, learning the importance of service and participating actively in the church's sacred rituals.",
    meetingTime: "Every Sunday at 8:00 AM",
  },
  {
    title: "LAY READERS",
    description:
      "Lay readers proclaim the Word of God during services, helping the congregation engage with scripture. They play a vital role in sharing God’s message with the community.",
    meetingTime: "Every Saturday at 3:00 PM",
  },
];

export default function ChurchSocietySection() {
  return (
    <section className="rounded-lg">
      <h3 className="text-[#441A05] font-bold text-xl mb-6 text-center">
        Church Society Meetings
      </h3>

      <div className="space-y-6">
        {societies.map((society, index) => (
          <div key={index} className="flex items-start space-x-3">
            {/* Brown bullet */}
            <span className="w-3 h-3 mt-2 rounded-full bg-[#441A05] flex-shrink-0" />

            {/* Society content */}
            <div>
              <h4 className="text-[#441A05] font-bold text-base mb-2">
                {society.title}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {society.description}
              </p>
              <p className="text-sm text-gray-500 italic mt-1">
                Meeting Time: {society.meetingTime}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right-aligned button */}
      <div className="mt-8 flex justify-end">
        <button className="bg-[#441A05] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300">
          See more
        </button>
      </div>
    </section>
  );
}
