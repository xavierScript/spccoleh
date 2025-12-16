"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

// Organization executives data
const cwoExcos = [
  {
    name: "Mrs. Jane Doe",
    position: "President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs. Mary Smith",
    position: "Vice President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs. Grace Johnson",
    position: "Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs. Faith Williams",
    position: "Treasurer",
    image: "/exco-placeholder.jpg",
  },
];

const cmoExcos = [
  {
    name: "Mr. John Doe",
    position: "President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. Peter Smith",
    position: "Vice President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. Paul Johnson",
    position: "Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. James Williams",
    position: "Treasurer",
    image: "/exco-placeholder.jpg",
  },
];

const nfcsExcos = [
  {
    name: "Bro. David Okeke",
    position: "President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Sis. Blessing Okafor",
    position: "Vice President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Bro. Emmanuel Eze",
    position: "Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Sis. Joy Nwankwo",
    position: "Treasurer",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Bro. Michael Adeyemi",
    position: "PRO",
    image: "/exco-placeholder.jpg",
  },
];

function ExcoCarousel({
  excos,
  title,
}: {
  excos: typeof cwoExcos;
  title: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % excos.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + excos.length) % excos.length);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h3 className="text-xl lg:text-2xl font-bold text-[#441A05] mb-6 text-center">
        {title}
      </h3>

      <div className="relative">
        {/* Carousel */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prev}
            className="p-2 rounded-full bg-[#441A05] text-white hover:bg-[#2A1003] transition-colors"
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Desktop: Show 3 cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 flex-1">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % excos.length;
              const exco = excos[index];
              return (
                <div key={index} className="text-center">
                  <div className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto mb-4 rounded-md overflow-hidden bg-gray-200">
                    <Image
                      src={exco.image}
                      alt={exco.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-[#441A05] mb-1">{exco.name}</h4>
                  <p className="text-sm text-gray-600">{exco.position}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile: Show 1 card */}
          <div className="lg:hidden flex-1">
            <div className="text-center">
              <div className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto mb-4 rounded-md overflow-hidden bg-gray-200">
                <Image
                  src={excos[currentIndex].image}
                  alt={excos[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-bold text-[#441A05] mb-1">
                {excos[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-600">
                {excos[currentIndex].position}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="p-2 rounded-full bg-[#441A05] text-white hover:bg-[#2A1003] transition-colors"
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {excos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#441A05] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop Indicators */}
        <div className="hidden lg:flex justify-center gap-2 mt-6">
          {excos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#441A05] w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const galleryImages = [
    { src: "/priest-with-nfcs-boys.jpeg", alt: "Priest with NFCS Boys" },
    { src: "/priest-with-nfcs1.jpeg", alt: "Priest with NFCS" },
    {
      src: "/priest-with-new-communicants.jpeg",
      alt: "Priest with New Communicants",
    },
    {
      src: "/priest-with-cwo-serving-mass.jpeg",
      alt: "Priest with CWO Serving Mass",
    },
    { src: "/priest-with-cwo.jpeg", alt: "Priest with CWO" },
    { src: "/priest-with-cmo.jpeg", alt: "Priest with CMO" },
    {
      src: "/priest-with-children-for-baptism.jpeg",
      alt: "Priest with Children for Baptism",
    },
    { src: "/priest-with-children.jpeg", alt: "Priest with Children" },
    { src: "/priest-with-altar-boys.jpeg", alt: "Priest with Altar Boys" },
    { src: "/newly-wedded-couples.jpeg", alt: "Newly Wedded Couples" },
  ];

  // Convert gallery images to carousel-friendly items
  const galleryExcos = galleryImages.map((img) => ({
    name: img.alt,
    position: "",
    image: img.src,
  }));

  // Faith leaders as carousel items
  const faithLeaders = [
    {
      name: "Jesus Christ",
      position: "Our Lord and Savior",
      image: "/picture-jesus.jpg",
    },
    {
      name: "Virgin Mary",
      position: "Mother of God",
      image: "/picture-mary.jpg",
    },
    {
      name: "Pope Francis",
      position: "Holy Father",
      image: "/picture-pope.jpg",
    },
    {
      name: "Bishop Anthony Ewherido",
      position: "Bishop of Warri Diocese",
      image: "/bishop-ewherido.jpeg",
    },
    {
      name: "Rev. Fr. Cyril",
      position: "Parish Priest",
      image: "/father-cyril.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-6xl mx-auto lg:px-8 lg:py-16 space-y-12 lg:space-y-16">
        {/* Hero Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4 lg:text-5xl lg:mb-6 text-[#441A05] text-center">
            About St. Peter&apos;s Catholic Chaplaincy, Oleh Campus
          </h1>
          <p className="text-base text-gray-700 leading-relaxed lg:text-lg max-w-3xl mx-auto">
            A welcoming community committed to faith, service and fellowship
            since 2015.
          </p>
        </div>

        {/* History Section */}
        <section className="rounded-lg lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#441A05] mb-4 text-center">
            History
          </h2>
          <p className="text-base text-gray-700 leading-relaxed lg:text-lg">
            St. Peter&apos;s Catholic Chaplaincy, Oleh, was established in
            February, 2015 by the then Bishop, Most Revd. John Okeoghene
            Afareha, to serve the spiritual needs of the Catholic faithful
            within the community with the first Parish Priest being Rev. Fr.
            Israel Inaede. Over the years, the Chaplaincy has grown into a place
            of worship, unity, and spiritual nourishment, fostering strong bonds
            among its members and promoting Catholic values.
          </p>
        </section>

        {/* Our Faith Section - carousel */}
        <section>
          <ExcoCarousel excos={faithLeaders} title="Our Faith Leaders" />
        </section>

        {/* Our Mission */}
        <div className="rounded-lg lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#441A05] text-center">
            Our Mission
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Our mission is to proclaim the Gospel of Christ, nurture spiritual
            growth, and build a vibrant Catholic community rooted in faith,
            service, and love. We strive to support our members through prayer,
            sacraments, pastoral care and genuine community living; all geared
            towards the salvation of souls and the advancement of God's Kingdom
            in the Catholic Diocese of Warri.
          </p>
        </div>

        {/* Organization Leadership */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-[#441A05] text-center">
            Our Leadership
          </h2>

          <div className="space-y-8">
            {/* CWO Executives */}
            <ExcoCarousel
              excos={cwoExcos}
              title="Catholic Women Organisation (CWO)"
            />

            {/* CMO Executives */}
            <ExcoCarousel
              excos={cmoExcos}
              title="Catholic Men Organisation (CMO)"
            />

            {/* NFCS Executives */}
            <ExcoCarousel
              excos={nfcsExcos}
              title="NFCS DELSU Chapter Executives"
            />
          </div>
        </section>

        {/* Community & Activities (moved after Leadership) */}
        <section className="mt-8">
          <div className="rounded-lg lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#441A05] text-center">
              Community & Activities
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The Chaplaincy organizes regular Masses, Bible Study Sessions,
              Catechism Classes, and various Church Society Meetings. Through
              these activities, members are encouraged and their faith deepened
              to fulfill the Kingdom purpose. Active participation in the life
              of the church is paramount.
            </p>
          </div>
        </section>

        {/* Photo Gallery Section - carousel */}
        <section>
          <ExcoCarousel
            excos={galleryExcos}
            title="Our Community in Pictures"
          />
        </section>

        {/* Get Involved */}
        <div className="bg-gradient-to-r from-[#441A05] to-[#2A1003] rounded-lg shadow-xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Everyone is welcome to join and contribute to the life of the
            Chaplaincy. Whether through volunteering, joining a Church Society,
            or participating in programmes that have to do with the life of the
            Church; there are many ways to serve and grow together as one family
            in Christ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/parish-activities"
              className="bg-white text-[#441A05] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              View Activities
            </a>
            <a
              href="/society"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#441A05] transition-colors inline-block"
            >
              Join a Society
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
