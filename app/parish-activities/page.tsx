import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentCard from "../components/ContentCard";

export default function ParishActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-6xl mx-auto space-y-8 lg:space-y-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Parish Activities</h1>
          <p className="text-base text-gray-700 leading-relaxed">
            Our parish runs a variety of activities, Student programmes, and
            Liturgical celebrations. See the regular schedule below and contact
            the Parish Office to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContentCard
            title="Daily Mass"
            description="Daily Mass is offered throughout the week at scheduled times; all are welcome to attend and receive the Eucharist."
            buttonText="Contact Office"
            imageSrc="/priest-with-altar-boys.jpeg"
            imageAlt="Priest serving mass"
            meetingTime={
              "Mondays, Wednesdays, Fridays — 5:00 PM\nTuesdays, Thursdays, Saturdays — 6:30 AM\nSundays — 6:00 AM and 7:00 AM (when school is in session) otherwise 6:30 AM"
            }
          />

          <ContentCard
            title="Marriage Preparation Class"
            description="Preparation class for couples planning to marry in the parish. Attendance is required before wedding arrangements are finalised."
            buttonText="Enroll"
            imageSrc="/newly-wedded-couples.jpeg"
            imageAlt="Newly wedded couples"
            meetingTime={"Mondays, 6:00 PM — 7:00 PM"}
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
          />

          <ContentCard
            title="Confession"
            description="The sacrament of reconciliation is available weekly and by arrangement. Priests are available to hear confessions after Saturday Mass and upon request."
            buttonText="Request Appointment"
            imageSrc="/picture-confession.jpg"
            imageAlt="Confession / pastoral care"
            meetingTime={"Every Saturday after Mass; also available on request"}
          />

          <ContentCard
            title="Benediction & Adoration"
            description="A time of Eucharistic Adoration and Benediction to deepen prayer life and parish devotion - A moment to be with the Lord and spend time in His presence."
            buttonText="Join Adoration"
            imageSrc="/picture-monstrance.jpg"
            imageAlt="Adoration and benediction"
            meetingTime={"Sundays — 5:00 PM to 6:00 PM"}
          />

          <ContentCard
            title="Parish Office Hours"
            description="The parish office is open for enquiries, registrations and pastoral support during the hours below."
            buttonText="Visit Office"
            imageSrc="/priest-with-nfcs-boys.jpeg"
            imageAlt="Parish office"
            meetingTime={
              "Tuesdays, Wednesdays, Thursdays — 9:00 AM to 12:00 PM"
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
