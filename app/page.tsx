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
          imageSrc="/picture-missal.jpg"
          imageAlt="Parish Activities"
        />

        <ContentCard
          title="Daily Readings"
          description="Access the daily scripture readings to guide your prayer and reflection. Stay connected with the Word of God every day."
          buttonText="Today's Readings"
          imageSrc="/picture-lectionary.jpg"
          imageAlt="Daily Readings"
        />

        <ContentCard
          title="Catechism Corner"
          description="Learn and deepen your understanding of Catholic teachings. Explore lessons, stories, and guidance to strengthen your faith."
          buttonText="Learn more"
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
