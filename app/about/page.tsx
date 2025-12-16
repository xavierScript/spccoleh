import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-4xl mx-auto space-y-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#441A05]">
          About St. Peter&apos;s Catholic Chaplaincy, Oleh
        </h1>

        {/* History Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#441A05] mb-3">History</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            St. Peter&apos;s Catholic Chaplaincy, Oleh, was established in
            February, 2015 by the then Bishop, Most Revd. John Okeoghene
            Afareha, to serve the spiritual needs of the Catholic faithful
            within the community with the first Parish Priest being Rev. Fr.
            Israel Inaede. Over the years, the Chaplaincy has grown into a place
            of worship, unity, and spiritual nourishment, fostering strong bonds
            among its members and promoting Catholic values.
          </p>
        </section>

        {/* Mission Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#441A05] mb-3">
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
        </section>

        {/* Community & Activities Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#441A05] mb-3">
            Community & Activities
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            The Chaplaincy organizes regular Masses, Bible Study Sessions,
            Catechism Classes, and various Church Society Meetings. Through
            these activities, members are encouraged and their faith deepened to
            fulfill the Kingdom purpose. Thus; active participation in the life
            of the church is paramount. {/* Marriage classes and all */}
          </p>
        </section>

        {/* Get Involved Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#441A05] mb-3">
            Get Involved
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Everyone is welcome to join and contribute to the life of the
            Chaplaincy. Whether through volunteering, joining a Church Society,
            or participating in programmes that have to do with the life of the
            Church; since there are many ways to serve and grow together as one
            family in Christ.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
