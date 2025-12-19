"use client";

import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContentCard from "./components/ContentCard";
import ChurchSocietySection from "./components/ChurchSocietySection";
import StationsSection from "./components/StationsSection";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState } from "react";
import { useLightbox } from "./components/LightboxProvider";

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

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-6 space-y-6">
        <AboutSection />

        <ContentCard
          title="Parish Activities"
          subtitle="OUR PROGRAM"
          description="Discover the variety of activities organized at St. Peter's Parish. Join us and be part of our vibrant parish life."
          buttonText="See more"
          buttonHref="/parish-activities"
          imageSrc="/picture-missal.jpg"
          imageAlt="Parish Activities"
        />

        <ContentCard
          title="Daily Readings"
          description="Access the daily scripture readings to guide your prayer and reflection. Stay connected with the Word of God every day."
          buttonText="Today's Readings"
          buttonHref="/readings"
          imageSrc="/picture-lectionary.jpg"
          imageAlt="Daily Readings"
        />
        {/* Bible Online with Selector */}
        <div className="space-y-4 mb-12">
          <section className="rounded-lg">
            <h3 className="text-[#441A05] font-bold text-xl mb-3 text-center">
              Bible Online
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Read the Holy Scriptures online at any time. Deepen your faith
              through daily meditation on God's Word.
            </p>
            <button
              onClick={() => setShowBibleOptions(!showBibleOptions)}
              className="bg-[#441A05] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#441A05] hover:ring-2 hover:ring-[#441A05] transition-all duration-300"
            >
              {showBibleOptions ? "Hide Options" : "Read the Bible"}
            </button>

            {/* Bible Version Options */}
            {showBibleOptions && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
                <h4 className="text-lg font-bold text-[#441A05] mb-3">
                  Select a Bible Version
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {bibleVersions.map((version, index) => (
                    <a
                      key={index}
                      href={version.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 border-2 border-gray-200 rounded-lg hover:border-[#441A05] hover:bg-gray-50 transition-all group"
                    >
                      <span className="font-semibold text-sm text-gray-700 group-hover:text-[#441A05]">
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
          </section>

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

        <ContentCard
          title="Catechism Corner"
          description="Learn and deepen your understanding of Catholic teachings. Explore lessons, stories, and guidance to strengthen your faith."
          buttonText="Learn about the Faith"
          buttonHref="https://usccb.cld.bz/Catechism-of-the-Catholic-Church2/4/"
          imageSrc="/picture-bible.jpg"
          imageAlt="Catechism Corner"
        />

        <ChurchSocietySection />

        <StationsSection />
      </main>

      <Footer />
    </div>
  );
}
