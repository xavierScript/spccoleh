import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
  title?: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  imageSrc: string;
  imageAlt: string;
  meetingTime?: string;
}

export default function ContentCard({
  title,
  subtitle,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  meetingTime,
}: ContentCardProps) {
  return (
    <div className="space-y-4 mb-12">
      {/* Content card */}
      <section className="rounded-lg">
        {subtitle && (
          <h2 className="text-center text-[#441A05] font-bold text-sm">
            {subtitle}
          </h2>
        )}

        <h3 className="text-[#441A05] font-bold text-xl mb-3 text-center">
          {title}
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {description}
        </p>

        {meetingTime && (
          <p className="text-sm text-gray-500 italic mb-4 whitespace-pre-line">
            {meetingTime}
          </p>
        )}

        {buttonHref ? (
          buttonHref.startsWith("http") ? (
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#441A05] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 inline-block text-center"
            >
              {buttonText}
            </a>
          ) : (
            <Link
              href={buttonHref}
              className="bg-[#441A05] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 inline-block text-center"
            >
              {buttonText}
            </Link>
          )
        ) : (
          <button className="bg-[#441A05] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300">
            {buttonText}
          </button>
        )}
      </section>

      {/* Separate image block */}
      <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
    </div>
  );
}
