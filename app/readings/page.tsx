import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ReadingsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="px-4 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[#441A05]">
          Daily Mass Readings
        </h1>

        {/* Attribution */}
        <div className="bg-gray-100 border-l-4 border-[#441A05] p-4 rounded mb-6">
          <p className="text-sm text-gray-700">
            <strong>Source:</strong> Daily Mass readings provided by{" "}
            <a
              href="https://universalis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#441A05] underline hover:text-[#2A1003]"
            >
              Universalis
            </a>{" "}
            - Liturgy of the Hours and Mass Readings for Africa/Nigeria.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            All content © Universalis Publishing. Visit{" "}
            <a
              href="https://universalis.com/africa.nigeria/mass.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#441A05] underline hover:text-[#2A1003]"
            >
              Universalis Africa/Nigeria Mass Readings
            </a>{" "}
            directly for the complete experience. This embedding is for pastoral
            purposes only.
          </p>
        </div>

        {/* Universalis Iframe */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://universalis.com/africa.nigeria/mass.htm"
            title="Daily Mass Readings - Universalis"
            className="w-full h-[900px] border-0"
            loading="lazy"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
