"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";
import { useLightbox } from "../components/LightboxProvider";

// Organization executives data
const cwoExcos = [
  {
    name: "Mrs. Bakwunye Anthonia",
    position: "President",
    image: "/cwo-pres.jpeg",
  },
  {
    name: "Mrs Iburho Veronica",
    position: "Vice President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs Oyovwe Ewoma",
    position: "Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs Usisi Ifeoma",
    position: "Assistant Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs Okoye Gloria",
    position: "Financial Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs Egbedi Theresa",
    position: "Treasurer",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs Anikputa Lovina",
    position: "PRO 1",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mrs Ogochukwu",
    position: "PRO 2",
    image: "/exco-placeholder.jpg",
  },
];
const parishLaityExcos = [
  {
    name: "Mr. Richard Adaka",
    position: "President",
    image: "/laity-chairman.jpeg",
  },
  {
    name: "Inside the Church",
    position: "Members of the Laity",
    image: "/parish-laity1.jpg",
  },
  {
    name: "Inside the Church",
    position: "Members of the Laity",
    image: "/parish-laity2.jpg",
  },
];

const cmoExcos = [
  {
    name: "Mr. Osugba",
    position: "President",
    image: "/cmo-president.png",
  },
  {
    name: "Mr. Ekwughe Benjamin",
    position: "Vice President",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. Ikpotor Isaac",
    position: "Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. Bassey",
    position: "Financial Secretary",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. Chukwunonso Okoye",
    position: "PRO 1",
    image: "/exco-placeholder.jpg",
  },
  {
    name: "Mr. Chukwunonso Igwe",
    position: "PRO 2",
    image: "/exco-placeholder.jpg",
  },
];

const nfcsExcos = [
  {
    name: "Bro. Madudani Emmanuel",
    position: "President",
    image: "/madudani.jpeg",
  },
  {
    name: "Bro. Ikwedu Great",
    position: "Vice President (Male)",
    image: "/great-vp.jpeg",
  },
  // {
  //   name: "Sis. Blessing Okafor",
  //   position: "Vice President",
  //   image: "/exco-placeholder.jpg",
  // },
  {
    name: "Sis. Ukperibayire Naomi",
    position: "Secretary",
    image: "/naomi.jpeg",
  },
  {
    name: "Bro. Odogbor Gabriel",
    position: "Assistant Secretary",
    image: "/odogbor.jpeg",
  },
  {
    name: "Sis. Onowu Favour",
    position: "Treasurer 1",
    image: "/onowu.jpeg",
  },
  {
    name: "Sis. Onoja Eucharia",
    position: "Treasurer 2",
    image: "/eucharia.jpeg",
  },
  {
    name: "Sis. Akpochafo Joy",
    position: "Director of Socials",
    image: "/akpochafo.jpeg",
  },
  {
    name: "Sis. Ebulu Jennifer",
    position: "Director of Sports",
    image: "/ebulu.jpeg",
  },
  {
    name: "Bro. Igboaku Emmanuel",
    position: "Director of Sports",
    image: "/igboaku.jpeg",
  },
  {
    name: "Bro. Idijie Emmanuel",
    position: "Provost",
    image: "/idijie.jpeg",
  },
  {
    name: "Bro. Ezema Daniel Jayden",
    position: "PRO 1",
    image: "/jayden.jpeg",
  },
  {
    name: "Sis. Nwanze Benita",
    position: "PRO 2",
    image: "/nwanze.jpeg",
  },
  {
    name: "Amb. Comr. Uwabunkonye Christopher",
    position: "Prayer Coordinator 1",
    image: "/christopher.jpeg",
  },
  {
    name: "Bro. Fole Michael",
    position: "Prayer Coordinator 2",
    image: "/fole.jpeg",
  },
  {
    name: "Bro. Ayeta Raphael (Ezege 1)",
    position: "Welfare Papa",
    image: "/ayeta.jpeg",
  },
  {
    name: "Sis. Ebu Anthonia",
    position: "Welfare Coordinator",
    image: "/ebu.jpeg",
  },
  {
    name: "Sis. Ogwu Ann",
    position: "Welfare Committee",
    image: "/ogwu-ann.jpeg",
  },
  {
    name: "Sis. Onokhomen Anthonia",
    position: "Welfare Committee",
    image: "/anthonia-welfare.jpeg",
  },
  {
    name: "Sis. Barnabas Valentina",
    position: "Welfare Committee",
    image: "/valentina.jpeg",
  },
  {
    name: "Bro. Asuquo Christian",
    position: "Welfare Committee",
    image: "/christian.jpeg",
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { openLightbox } = useLightbox();

  const next = () => setCurrentIndex((prev) => (prev + 1) % excos.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + excos.length) % excos.length);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h3 className="text-xl lg:text-2xl font-bold text-[#441A05] mb-6 text-center">
        {title}
      </h3>

      <div className="relative">
        {/* Carousel */}
        <div
          className="flex items-center justify-center gap-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
                  <button
                    onClick={() => openLightbox(exco.image, exco.name)}
                    className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto mb-4 rounded-md overflow-hidden bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity group"
                    aria-label={`View ${exco.name} photo`}
                  >
                    <Image
                      src={exco.image}
                      alt={exco.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 224px, 256px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                  <h4 className="font-bold text-[#441A05] mb-1">{exco.name}</h4>
                  <p className="text-sm text-gray-600">{exco.position}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile: Show 1 card */}
          <div className="lg:hidden flex-1">
            <div className="text-center">
              <button
                onClick={() =>
                  openLightbox(
                    excos[currentIndex].image,
                    excos[currentIndex].name
                  )
                }
                className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto mb-4 rounded-md overflow-hidden bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity group"
                aria-label={`View ${excos[currentIndex].name} photo`}
              >
                <Image
                  src={excos[currentIndex].image}
                  alt={excos[currentIndex].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 224px, 256px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
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

// Text-only executives list component
function ExcoTextList({
  excos,
  title,
  presidentWithImage,
}: {
  excos: Array<{ name: string; position: string }>;
  title: string;
  presidentWithImage?: { name: string; position: string; image: string };
}) {
  const { openLightbox } = useLightbox();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
      <h3 className="text-xl lg:text-2xl font-bold text-[#441A05] mb-6 text-center">
        {title}
      </h3>

      {/* President with image */}
      {presidentWithImage && (
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <button
              onClick={() =>
                openLightbox(presidentWithImage.image, presidentWithImage.name)
              }
              className="relative w-48 h-48 lg:w-56 lg:h-56 mx-auto mb-4 rounded-md overflow-hidden bg-gray-200 cursor-pointer hover:opacity-90 transition-opacity group"
              aria-label={`View ${presidentWithImage.name} photo`}
            >
              <Image
                src={presidentWithImage.image}
                alt={presidentWithImage.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 192px, 224px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
            <h4 className="font-bold text-[#441A05] mb-1 text-lg">
              {presidentWithImage.name}
            </h4>
            <p className="text-sm text-gray-600">
              {presidentWithImage.position}
            </p>
          </div>
        </div>
      )}

      {/* Other executives in grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {excos.map((exco, index) => (
          <div
            key={index}
            className="border-l-4 border-[#441A05] bg-gray-50 p-4 rounded-r-md hover:bg-gray-100 transition-colors"
          >
            <h4 className="font-bold text-[#441A05] mb-1">{exco.name}</h4>
            <p className="text-sm text-gray-600">{exco.position}</p>
          </div>
        ))}
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
    { src: "/priest-with-cmo.jpeg", alt: "Priest with members of CMO" },
    {
      src: "/priest-with-children-for-baptism.jpeg",
      alt: "Priest with Children for Baptism",
    },
    { src: "/priest-with-children.jpeg", alt: "Priest with Children" },
    { src: "/priest-with-altar-boys.jpeg", alt: "Priest with Altar Boys" },
    { src: "/priest-with-laity.jpg", alt: "Priest with Parish Members" },
    {
      src: "/priest-with-family.jpg",
      alt: "Father Cyril's 10th Priestly Anniversary",
    },
    { src: "/priest-with-servers.jpg", alt: "Priest with Altar Servers" },
    {
      src: "/priest-with-servers-sacristy.jpg",
      alt: "Priest with Servers in Sacristy",
    },
    { src: "/priest-alone.jpg", alt: "Chaplain: Rev. Fr. Cyril Basikoro" },
    { src: "/newly-wedded-couples.jpeg", alt: "Wedded Couples" },
    { src: "/parish-cwo-sitting.jpg", alt: "CWO Members" },
    { src: "/parish-cwo-standing.jpg", alt: "CWO Members" },
    { src: "/parish-choir.jpg", alt: "Parish Choir" },
    { src: "/parish-hca.jpg", alt: "Holy Childhood Association" },
    { src: "/priests-sitting.jpg", alt: "Priests during Mass" },
    { src: "/priests-sitting2.jpg", alt: "Priests during Mass" },
    { src: "/priests-consecrating.jpg", alt: "Consecration" },
    { src: "/priets-incensing.jpg", alt: "Consecration" },
    { src: "/priets-incensing2.jpg", alt: "Consecration" },
    { src: "/servers-acolytes.jpg", alt: "Presentation of Gifts" },
    { src: "/servers-processing.jpg", alt: "Servers Processing" },
    { src: "/servers-processing2.jpg", alt: "Servers Processing" },
    {
      src: "/servers-receiving-communion.jpg",
      alt: "Communion",
    },
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
      image: "/jesus-christ.jpg",
    },
    {
      name: "Virgin Mary",
      position: "Mother of God",
      image: "/mary-immaculate-heart.jpg",
    },
    {
      name: "Pope Leo XIV",
      position: "Holy Father",
      image: "/pope-leo-xiv.jpeg",
    },
    {
      name: "Archbishop Michael Francis Crotty",
      position: "Papal Nuncio to Nigeria",
      image: "/papal-nuncio-nigeria.png",
    },
    {
      name: "Archbishop Augustine Obiora Akubeze",
      position:
        "Metropolitan Archbishop of the Roman Catholic Archdiocese of Benin City",
      image: "/bishop-akubeze.jpeg",
    },
    {
      name: "Bishop John Okeoghene Afareha",
      position: "Emeritus Bishop of the Catholic Diocese of Warri",
      image: "/bishop-afareha.jpg",
    },
    {
      name: "Bishop Anthony Ovayero Ewherido",
      position: "Bishop of the Catholic Diocese of Warri",
      image: "/bishop-ewherido.jpeg",
    },
    {
      name: "Bishop John Okeoghene Afareha with Bishop Anthony Ovayero Ewherido",
      position: "Emeritus Bishop and Bishop of the Catholic Diocese of Warri",
      image: "/bishops-afareha-with-ewherido.jpeg",
    },

    {
      name: "Very Rev. Fr. Dr. Stephen Ogheneovo CSP",
      position: "Regional Vicar for Oleh Region",
      image: "/father-stephen.jpeg",
    },
    {
      name: "Rev. Fr. Cyril Basikoro",
      position: "Chaplain: St. Peter's Catholic Chaplaincy, Oleh Campus",
      image: "/parish-priest-on-mic.jpg",
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
            <ExcoTextList
              excos={cwoExcos.slice(1)}
              title="Catholic Women Organisation (CWO)"
              presidentWithImage={cwoExcos[0]}
            />

            {/* CMO Executives */}
            <ExcoTextList
              excos={cmoExcos.slice(1)}
              title="Catholic Men Organisation (CMO)"
              presidentWithImage={cmoExcos[0]}
            />

            {/* NFCS Executives */}
            <ExcoCarousel
              excos={nfcsExcos}
              title="NFCS DELSU Chapter Executives"
            />
            {/* Parish Laity */}
            <ExcoCarousel excos={parishLaityExcos} title="Parish Laity" />
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

        {/* Location Map */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#441A05] mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8087563896845!2d6.202815!3d5.587556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad7d7f8e6f5d%3A0x1f1e2b3c4d5e6f7a!2sOleh%2C%20Delta%20State%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="St. Peter's Catholic Chaplaincy Location"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
