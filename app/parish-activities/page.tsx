import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentCard from "../components/ContentCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parish Activities",
  description:
    "Discover parish activities at St. Peter Catholic Chaplaincy, Oleh including daily Mass schedule, adoration, confessions, choir practice, and student fellowship programs.",
  openGraph: {
    title: "Parish Activities - SPCC Oleh",
    description:
      "Join our weekly activities: Daily Mass, Eucharistic Adoration, Confessions, Choir, and Student Fellowships at St. Peter Catholic Chaplaincy, Oleh.",
    type: "website",
  },
};

export default function ParishActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-4 py-12 lg:px-8 lg:py-0">
        {/* Page Header - Full Width on Desktop */}
        <div className="max-w-3xl mx-auto mb-8 lg:max-w-7xl lg:px-20 lg:py-16 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 text-[#441A05] text-center">
            Parish Activities
          </h1>
          <p className="text-base lg:text-2xl text-gray-700 leading-relaxed">
            Our parish runs a variety of activities, Student programmes, and
            Liturgical celebrations. See the regular schedule below and contact
            the Parish Office to get involved.
          </p>
        </div>

        {/* Activity Cards - Mobile: Grid, Desktop: Full Width Alternating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-0">
          <ContentCard
            title="Daily Mass"
            description="Daily Mass is offered throughout the week at scheduled times; all are welcome to attend and receive the Eucharist."
            buttonText="Attend Mass"
            imageSrc="/priests-consecrating.jpg"
            imageAlt="Priests consecrating the Eucharist"
            meetingTime={
              "Mondays, Wednesdays & Fridays — 5:00 PM\nTuesdays, Thursdays & Saturdays — 6:30 AM\nSundays — First Mass: 6:00 AM; Second Mass: 7:00 AM (during school session). Otherwise, one Mass at 6:30 AM. Every Second Sunday (during session or not): one Mass at 6:30 AM"
            }
            isReversed={false}
          />

          <ContentCard
            title="Marriage Preparation Class"
            description="Preparation class for couples planning to marry in the parish. Attendance is required before wedding arrangements are finalised."
            buttonText="Enroll"
            imageSrc="/newly-wedded-couples.jpeg"
            imageAlt="Newly wedded couples"
            meetingTime={"Mondays, 6:00 PM — 7:00 PM"}
            isReversed={true}
          />

          <ContentCard
            title="Catechism Classes"
            description="Religious instruction for children and young people preparing for the Sacrament(s) and continued faith formation."
            buttonText="Join Class"
            imageSrc="/priest-with-children-for-baptism.jpeg"
            imageAlt="Children in catechism class"
            meetingTime={
              "Saturdays — 4:00 PM to 6:00 PM;\n Sundays — 3:00 PM to 5:00 PM"
            }
            isReversed={false}
          />

          <ContentCard
            title="Confession"
            description="The sacrament of reconciliation is available weekly and by arrangement. Priests are available to hear confessions after Saturday Mass and upon request."
            buttonText="Go for the Sacraments"
            imageSrc="/picture-confession.jpg"
            imageAlt="Confession / pastoral care"
            meetingTime={"Every Saturday after Mass; also available on request"}
            isReversed={true}
          />

          <ContentCard
            title="Benediction & Adoration"
            description="A time of Eucharistic Adoration and Benediction to deepen prayer life and parish devotion - A moment to be with the Lord and spend time in His presence."
            buttonText="Come, Let us Adore"
            imageSrc="/picture-monstrance.jpg"
            imageAlt="Adoration and benediction"
            meetingTime={"Sundays — 5:00 PM to 6:00 PM"}
            isReversed={false}
          />

          <ContentCard
            title="Parish Office Hours"
            description="The parish office is open for enquiries, registrations and pastoral support during the hours below."
            buttonText="See the Priest"
            imageSrc="/office-hours.webp"
            imageAlt="Parish office"
            meetingTime={
              "Tuesdays, Wednesdays, Thursdays — 9:00 AM to 12:00 PM"
            }
            isReversed={true}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
