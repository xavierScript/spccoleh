"use client";

import Image from "next/image";
import { useLightbox } from "./LightboxProvider";

interface StationsSectionProps {
  shouldShake?: boolean;
}

export default function StationsSection({
  shouldShake = false,
}: StationsSectionProps) {
  const { openLightbox } = useLightbox();

  return (
    <section className="mb-12 fade-on-view">
      <div className="mb-4">
        <h3 className="text-[#441A05] font-bold text-xl lg:text-4xl mb-3 lg:mb-6 text-center">
          Stations of the Cross
        </h3>
        <p className="text-sm lg:text-xl text-gray-700 leading-relaxed mb-4 lg:mb-6">
          Journey with us through the Stations of the Cross, reflecting on the
          passion and sacrifice of Jesus Christ. Join our parish in this
          meaningful devotion to deepen your faith and spiritual connection.
        </p>
        <a
          href="https://mycatholic.life/catholic-prayers/stations-of-the-cross/"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-[#441A05] text-white px-5 py-2 lg:px-10 lg:py-4 rounded-full text-sm lg:text-xl font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 ${
            shouldShake ? "shake-button" : ""
          }`}
        >
          Journey with Us
        </a>
      </div>

      {/* Image with rounded borders */}
      <button
        onClick={() =>
          openLightbox(
            "/picture-stations-of-the-cross.jpg",
            "Stations of the Cross"
          )
        }
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity group"
      >
        <Image
          src="/picture-stations-of-the-cross.jpg"
          alt="Stations of the Cross"
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
    </section>
  );
}
