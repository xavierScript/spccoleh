import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SocietyPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Church Societies</h1>
        <p className="text-base text-gray-700 leading-relaxed">
          Our church societies organize fellowship, charity and formation. Learn
          about the various societies, meeting times, and how to participate.
        </p>
      </main>

      <Footer />
    </div>
  );
}
