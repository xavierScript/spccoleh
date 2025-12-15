import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ContentCard from "./components/ContentCard";
import ChurchSocietySection from "./components/ChurchSocietySection";
import StationsSection from "./components/StationsSection";
import Footer from "./components/Footer";

export default function Home() {
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
        <ContentCard
          title="Bible Online"
          description="Read the Holy Scriptures online at any time. Deepen your faith through daily meditation on God’s Word."
          buttonText="Read the Bible"
          buttonHref="https://thekingsbible.com/"
          imageSrc="/picture-with-bible.jpg"
          imageAlt="Bible"
        />

        <ContentCard
          title="Catechism Corner"
          description="Learn and deepen your understanding of Catholic teachings. Explore lessons, stories, and guidance to strengthen your faith."
          buttonText="Learn more"
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
