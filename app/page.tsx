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
          description="Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris egestas in augue amet. Mattis nec massa sit mauris et nulla."
          buttonText="See more"
          imageSrc="/picture-missal.png"
          imageAlt="Parish Activities"
        />

        <ContentCard
          title="Daily Readings"
          description="Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris egestas in augue amet. Mattis nec massa sit mauris et nulla."
          buttonText="Today's Readings"
          imageSrc="/picture-lectionary.png"
          imageAlt="Daily Readings"
        />

        <ContentCard
          title="Catechism Corner"
          description="Lorem ipsum dolor sit amet consectetur. Hendrerit consequat mauris egestas in augue amet. Mattis nec massa sit mauris et nulla."
          buttonText="Learn more"
          imageSrc="/picture-bible.png"
          imageAlt="Catechism Corner"
        />

        <ChurchSocietySection />

        <StationsSection />
      </main>

      <Footer />
    </div>
  );
}
