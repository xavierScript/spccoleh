import Link from "next/link";

interface AboutSectionProps {
  shouldShake?: boolean;
}

export default function AboutSection({
  shouldShake = false,
}: AboutSectionProps) {
  return (
    <section className="bg-[#441A05] rounded-lg p-6 lg:p-8 text-white mt-6 mb-12">
      {/* Centered heading */}
      <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-center">
        About Us
      </h2>

      <p className="text-sm lg:text-base leading-relaxed mb-4">
        St. Peter's Catholic Chaplaincy is one of the Parish under the Catholic
        Diocese of Warri committed to building faith, service and fellowship
        with one another. We hold regular Masses alternated through the week
        days, with emphasis on the Word of God and the Eucharistic Worship. This
        page contains information about our history, mission, and how to get
        involved.
      </p>

      {/* Right-aligned button */}
      <div className="flex justify-end">
        <Link
          href="/about"
          className={`bg-white text-[#441A05] px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-[#441A05] hover:text-white hover:ring-2 hover:ring-white transition-all duration-300 inline-block ${
            shouldShake ? "shake-button" : ""
          }`}
        >
          Read more
        </Link>
      </div>
    </section>
  );
}
