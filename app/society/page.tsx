import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentCard from "../components/ContentCard";

export default function SocietyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-[#441A05]">
          Church Societies
        </h1>
        <p className="text-base text-gray-700 leading-relaxed mb-8">
          Our societies foster spiritual growth, service and fellowship. Below
          are the key groups active at St. Peter's — click each card to learn
          how to join or get involved.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContentCard
            title="Choir & Music Ministry"
            subtitle="Worship"
            description="Lead the assembly in song and enhance our liturgies with sacred music. We welcome singers and instrumentalists of all ages. Rehearsals are held weekly."
            buttonText="Sing for the Lord"
            imageSrc="/picture-missal.jpg"
            imageAlt="Choir singing"
            meetingTime="Meeting Time: Every Saturday at 4:00 PM"
          />

          <ContentCard
            title="Altar Servers"
            subtitle="Liturgy"
            description="Serve at the altar during Mass and liturgical celebrations. Training is provided for young people who wish to assist the clergy and participate in the sacred rites."
            buttonText="Serve on the Sanctuary"
            imageSrc="/picture-altar-boys.jpg"
            imageAlt="Altar servers"
            meetingTime="Meeting Time: Every Saturday at 4:00 PM"
          />

          <ContentCard
            title="Lay Readers"
            subtitle="Liturgy"
            description="Proclaim the Scriptures during Mass and assist with liturgical readings. Training and schedules are provided for new readers who wish to serve the assembly."
            buttonText="Serve as a Reader"
            imageSrc="/picture-bible.jpg"
            imageAlt="Lay reader proclaiming the Word"
            meetingTime="Meeting Time: Every Saturday at 4:00 PM"
          />

          <ContentCard
            title="Nigerian Federation of Catholic Students"
            subtitle="Formation"
            description="You are a student of Delta State University? Join the Nigerian Federation of Catholic Students (NFCS) chapter at our chaplaincy to grow in faith and fellowship with fellow Catholic students."
            buttonText="Get Involved"
            imageSrc="/picture-bible.jpg"
            imageAlt="NFCS"
            meetingTime="Meeting Time: Every Saturday at 4:00 PM"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
