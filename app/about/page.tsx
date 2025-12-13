import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          About St. Peter's Catholic Chaplaincy, Oleh
        </h1>
        <p className="text-base text-gray-700 leading-relaxed">
          St. Peter's Catholic Chaplaincy is a welcoming community committed to
          faith, service and fellowship. We hold regular masses, Bible study
          groups and community outreach programmes. This page contains
          information about our history, mission, and how to get involved.
        </p>
      </main>

      <Footer />
    </div>
  );
}
