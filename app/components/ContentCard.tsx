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
  shouldShake?: boolean;
  isReversed?: boolean;
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
  shouldShake = false,
  isReversed = false,
}: ContentCardProps) {
  const { openLightbox } = useLightbox();

  const buttonClasses = `bg-[#441A05] text-white px-5 py-2 lg:px-10 lg:py-4 rounded-full text-sm lg:text-xl font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 inline-block text-center ${
    shouldShake ? "shake-button" : ""
  }`;

  return (
    <>
      {/* Mobile/Tablet Layout - Stack vertically */}
      <div className="space-y-4 mb-12 lg:hidden">
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
                className={buttonClasses}
              >
                {buttonText}
              </a>
            ) : (
              <Link href={buttonHref} className={buttonClasses}>
                {buttonText}
              </Link>
            )
          ) : (
            <button className={buttonClasses}>{buttonText}</button>
          )}
        </section>

        {/* Image */}
        <button
          onClick={() => openLightbox(imageSrc, imageAlt)}
          className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity group"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
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

      {/* Desktop Layout - Full Width Two Column */}
      <div
        className={`hidden lg:grid lg:grid-cols-2 lg:min-h-[450px] lg:mb-16 lg:bg-white`}
      >
        {/* Image Column */}
        <button
          onClick={() => openLightbox(imageSrc, imageAlt)}
          className={`relative w-full h-full cursor-pointer hover:opacity-90 transition-opacity group ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-4">
              <svg
                className="w-8 h-8 text-[#441A05]"
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

        {/* Content Column */}
        <div
          className={`flex flex-col justify-center px-16 py-20 bg-white ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {subtitle && (
            <h2 className="text-[#441A05] font-bold text-lg mb-2 uppercase tracking-wide">
              {subtitle}
            </h2>
          )}

          <h3 className="text-[#441A05] font-bold text-4xl xl:text-5xl mb-6 leading-tight">
            {title}
          </h3>

          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            {description}
          </p>

          {meetingTime && (
            <p className="text-gray-500 text-lg italic mb-8 whitespace-pre-line">
              {meetingTime}
            </p>
          )}

          {buttonHref ? (
            buttonHref.startsWith("http") ? (
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {buttonText}
              </a>
            ) : (
              <Link href={buttonHref} className={buttonClasses}>
                {buttonText}
              </Link>
            )
          ) : (
            <button className={buttonClasses}>{buttonText}</button>
          )}
        </div>
      </div>
    </>
  );
}
