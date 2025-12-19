"use client";

import Image from "next/image";
import Link from "next/link";
import { useLightbox } from "./LightboxProvider";

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
  const { openLightbox } = useLightbox();

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
      <button
        onClick={() => openLightbox(imageSrc, imageAlt)}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity group"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3">
            <svg
              className="w-6 h-6 text-[#441A05]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}
