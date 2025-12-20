import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentCard from "../components/ContentCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Societies",
  description:
    "Explore church societies at St. Peter's Catholic Chaplaincy, Oleh: Catholic Women Organisation (CWO), Catholic Men Organisation (CMO), Choir, Legion of Mary, and more.",
  openGraph: {
    title: "Church Societies - SPCC Oleh",
    description:
      "Get involved with CWO, CMO, Altar Servers, Choir, Legion of Mary, and other active societies at St. Peter's Catholic Chaplaincy, Oleh.",
    type: "website",
  },
};

export default function SocietyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-4 py-12 lg:px-8 lg:py-0">
        {/* Page Header - Full Width on Desktop */}
        <div className="mb-8 lg:px-20 lg:py-16 lg:mb-0 lg:max-w-7xl lg:mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-8 text-[#441A05] text-center">
            Church Societies
          </h1>
          <p className="text-base lg:text-2xl text-gray-700 leading-relaxed">
            Our societies foster spiritual growth, service and fellowship. Below
            are the key groups active at St. Peter's Catholic Chaplaincy, Delta
            State University, Oleh Campus.
          </p>
        </div>

        {/* Society Cards - Mobile: Grid, Desktop: Full Width Alternating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-0">
          <ContentCard
            title="Altar Servers"
            description="The Altar Servers assist during the celebration of Mass and other liturgical celebrations; with emphasis placed on learning the importance of service and participating actively in the Church's Sacred rituals."
            buttonText="Serve on the Sanctuary"
            imageSrc="/priest-with-servers-sacristy.jpg"
            imageAlt="Altar servers"
            meetingTime="Every Saturday after the morning Mass and at 4:00 PM"
            isReversed={false}
          />

          <ContentCard
            title="Lay Readers (Lectors)"
            description="The Lectors proclaim the Word of God during Liturgical Worship in a bid to aiding the congregation to engage with the Scripture pages. This function plays a very important role in the growth of the life of the Church — thus, making the Gospel message come alive (Hebrews 4:12)."
            buttonText="Serve as a Reader"
            imageSrc="/picture-bible.jpg"
            imageAlt="Lay reader proclaiming the Word"
            meetingTime="Every Saturday at 4:30 PM (in the Church compound)"
            isReversed={true}
          />

          <ContentCard
            title="Choir"
            description="Our parish choir brings together voices of all ages in their cultural diversity to lead worship during liturgical celebrations. Join us to praise through active participation with songs in fellowship."
            buttonText="Sing for the Lord"
            imageSrc="/parish-choir.jpg"
            imageAlt="Choir singing"
            meetingTime="Every Tuesday, Thursday and Saturday at 4:00 PM"
            isReversed={false}
          />

          <ContentCard
            title="Nigerian Federation of Catholic Students"
            description="Are you a student of Delta State University, Oleh Campus? Join the Nigerian Federation of Catholic Students' (NFCS) chapter at our Chaplaincy to grow in faith, create a strong bond of communion and friendship with fellow Catholic students."
            buttonText="Get Involved"
            imageSrc="/priest-with-nfcs1.jpeg"
            imageAlt="NFCS"
            meetingTime="Meeting Time: Every second Sunday after the Mass"
            isReversed={true}
          />

          <ContentCard
            title="Legion of Mary"
            description="The lay Apostolic group is dedicated to prayer, community evangelisation, and works of mercy to advancing the spirituality of the Blessed Virgin Mary. Members are committed to cater to one another and to enhance the Marian devotion."
            buttonText="Join the Legion"
            imageSrc="/legion-altar.jpg"
            imageAlt="Legion of Mary"
            meetingTime="Meeting Time: Every Sunday at 10:00 AM"
            isReversed={false}
          />

          <ContentCard
            title="Holy Childhood Association (HCA)"
            description="A society for children that nurtures faith, prayer, and service from a young age. Members learn about Catholic teachings and actively participate in charitable and parish activities."
            buttonText="Join HCA"
            imageSrc="/parish-hca.jpg"
            imageAlt="Holy Childhood Association"
            meetingTime="Meeting Time: Every Sunday at 10:30 AM"
            isReversed={true}
          />

          <ContentCard
            title="Catholic Women Organisation (CWO)"
            description="A society for Catholic women focused on spiritual growth, family life, charity, and service to the Church. The CWO supports parish activities and Outreach programmes."
            buttonText="Join the CWO"
            imageSrc="/parish-cwo-sitting.jpg"
            imageAlt="Catholic Women Organisation"
            meetingTime="Meeting Time: Second Sunday of every month after the Mass (10:00 AM)"
            isReversed={false}
          />

          <ContentCard
            title="Catholic Men Organisation (CMO)"
            description="A body of Catholic men in the Chaplaincy committed to faith formation, leadership, and service to the Church. Members actively support parish development and family life."
            buttonText="Join the CMO"
            imageSrc="/cmo-logo.jpg"
            imageAlt="Catholic Men Organisation"
            meetingTime="Meeting Time: Second Saturday of every month after the Mass (10:00 AM)"
            isReversed={true}
          />

          <ContentCard
            title="Catholic Charismatic Renewal in Nigeria (CCRN)"
            description="A prayer group centered on openness to the move of the Holy Spirit, growth in spiritual knowledge, sincere worship and deep teaching of the Scripture (1 John 2:20, 28). Members gather also for prayer sessions to enhance spiritual renewal in the Christian Community."
            buttonText="Pray With Us"
            imageSrc="/dove-ccrn.jpg"
            imageAlt="Catholic Charismatic Renewal"
            meetingTime="Meeting Time: Every Sunday at 4:00 PM"
            isReversed={false}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
