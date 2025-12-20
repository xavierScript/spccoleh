"use client";

import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContentCard from "./components/ContentCard";
import ChurchSocietySection from "./components/ChurchSocietySection";
import StationsSection from "./components/StationsSection";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLightbox } from "./components/LightboxProvider";
import Script from "next/script";

const bibleVersions = [
  {
    name: "Jerusalem Bible",
    url: "https://morningstarinfosys.com/",
  },
  {
    name: "Douay Rheims Bible",
    url: "https://www.drbo.org/",
  },
  {
    name: "Good News Translation",
    url: "https://www.biblestudytools.com/gnt/",
  },
  {
    name: "New Revised Standard Version",
    url: "https://www.biblestudytools.com/nrs/",
  },
];

export default function Home() {
  const [showBibleOptions, setShowBibleOptions] = useState(false);
  const { openLightbox } = useLightbox();
  const [shakeButtons, setShakeButtons] = useState<Set<number>>(new Set());
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = buttonRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1 && entry.isIntersecting) {
            setShakeButtons((prev) => new Set(prev).add(index));
            // Stop shaking after animation completes
            setTimeout(() => {
              setShakeButtons((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }, 1000);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    buttonRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "St. Peter's Catholic Chaplaincy, Oleh",
    alternateName: "SPCC Oleh",
    description:
      "Catholic chaplaincy serving students and staff at Delta State University, Oleh Campus",
    url: "https://spccoleh.com.ng",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oleh",
      addressRegion: "Delta State",
      addressCountry: "NG",
    },
    telephone: "+234-803-234-2601",
    email: "info@spcc-oleh.org",
    sameAs: [
      // Add social media links when available
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="px-4 py-6 lg:py-12 lg:px-8">
        <div className="space-y-6 lg:space-y-12 max-w-4xl lg:mx-auto">
          <div
            ref={(el) => {
              buttonRefs.current[0] = el;
            }}
          >
            <AboutSection shouldShake={shakeButtons.has(0)} />
          </div>

          <div
            ref={(el) => {
              buttonRefs.current[1] = el;
            }}
          >
            <ContentCard
              title="Parish Activities"
              subtitle="OUR PROGRAM"
              description="Discover the variety of activities organized at St. Peter's Parish. Join us and be part of our vibrant parish life."
              buttonText="See more"
              buttonHref="/parish-activities"
              imageSrc="/picture-missal.jpg"
              imageAlt="Parish Activities"
              shouldShake={shakeButtons.has(1)}
            />
          </div>

          <div
            ref={(el) => {
              buttonRefs.current[2] = el;
            }}
          >
            <ContentCard
              title="Daily Readings"
              description="Access the daily scripture readings to guide your prayer and reflection. Stay connected with the Word of God every day."
              buttonText="Today's Readings"
              buttonHref="/readings"
              imageSrc="/picture-lectionary.jpg"
              imageAlt="Daily Readings"
              shouldShake={shakeButtons.has(2)}
            />
          </div>

          {/* Bible Online with Selector */}
          <div className="space-y-4 mb-12">
            <div
              ref={(el) => {
                buttonRefs.current[3] = el;
              }}
              className="rounded-lg"
            >
              <h3 className="text-[#441A05] font-bold text-xl lg:text-2xl mb-3 lg:mb-4 text-center">
                Bible Online
              </h3>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                Read the Holy Scriptures online at any time. Deepen your faith
                through daily meditation on God's Word.
              </p>
              <button
                onClick={() => setShowBibleOptions(!showBibleOptions)}
                className={`bg-[#441A05] text-white px-5 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 ${
                  shakeButtons.has(3) ? "shake-button" : ""
                }`}
              >
                {showBibleOptions ? "Hide Options" : "Read the Bible"}
              </button>

              {/* Bible Version Options */}
              {showBibleOptions && (
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4 lg:p-6">
                  <h4 className="text-lg lg:text-xl font-bold text-[#441A05] mb-3 lg:mb-4">
                    Select a Bible Version
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {bibleVersions.map((version, index) => (
                      <a
                        key={index}
                        href={version.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 lg:p-4 border-2 border-gray-200 rounded-lg hover:border-[#441A05] hover:bg-gray-50 transition-all group"
                      >
                        <span className="font-semibold text-sm lg:text-base text-gray-700 group-hover:text-[#441A05]">
                          {version.name}
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-[#441A05]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Image */}
            <button
              onClick={() => openLightbox("/picture-with-bible.jpg", "Bible")}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:opacity-90 transition-opacity group"
            >
              <Image
                src="/picture-with-bible.jpg"
                alt="Bible"
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

          {/* Diocesan Plans and Programs PDF */}
          <div
            ref={(el) => {
              buttonRefs.current[4] = el;
            }}
            className="space-y-4 mb-12"
          >
            <div className="rounded-lg">
              <h3 className="text-[#441A05] font-bold text-xl lg:text-2xl mb-3 lg:mb-4 text-center">
                Diocesan Year of Sacramental Life
              </h3>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
                View the plans and programs for the Diocesan Year of Sacramental
                Life. Learn about the initiatives and activities planned to
                deepen our sacramental understanding and practice.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/files/Plans and Programs - Diocesan Year of Sacramental Life .pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#441A05] text-white px-5 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300 inline-flex items-center gap-2`}
                >
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  View PDF
                </a>
                <a
                  href="/files/Plans and Programs - Diocesan Year of Sacramental Life .pdf"
                  download
                  className={`bg-white text-[#441A05] px-5 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-semibold ring-2 ring-[#441A05] hover:bg-[#441A05] hover:text-white transition-all duration-300 inline-flex items-center gap-2 `}
                >
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div
            ref={(el) => {
              buttonRefs.current[5] = el;
            }}
          >
            <ContentCard
              title="Catechism Corner"
              description="Learn and deepen your understanding of Catholic teachings. Explore lessons, stories, and guidance to strengthen your faith."
              buttonText="Learn about the Faith"
              buttonHref="https://usccb.cld.bz/Catechism-of-the-Catholic-Church2/4/"
              imageSrc="/picture-bible.jpg"
              imageAlt="Catechism Corner"
              shouldShake={shakeButtons.has(5)}
            />
          </div>

          <div
            ref={(el) => {
              buttonRefs.current[6] = el;
            }}
          >
            <ChurchSocietySection shouldShake={shakeButtons.has(6)} />
          </div>

          <div
            ref={(el) => {
              buttonRefs.current[7] = el;
            }}
          >
            <StationsSection shouldShake={shakeButtons.has(7)} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
