import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ParishActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Parish Activities</h1>
        <p className="text-base text-gray-700 leading-relaxed">
          Our parish runs a variety of activities, Youth/Student programmes that
          run through the year, and Liturgical Celebrations. Check the schedule
          below or contact the parish office to join any of our groups.
        </p>
      </main>

      <Footer />
    </div>
  );
}
