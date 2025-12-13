export default function AboutSection() {
  return (
    <section className="bg-[#441A05] rounded-lg p-6 text-white mt-6 mb-12">
      {/* Centered heading */}
      <h2 className="text-xl font-bold mb-3 text-center">About Us</h2>

      <p className="text-sm leading-relaxed mb-4">
        Lorem ipsum dolor sit amet consectetur. Tincidunt porttitor dignissim
        metus laoreet sagittis. Neque mauris eget elit sit aliquam dictum
        bibendum. Aliquam at faucibus blandit suspendisse proin felis faucibus
        lectus.
      </p>

      {/* Right-aligned button */}
      <div className="flex justify-end">
        <button className="bg-white text-[#441A05] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#441A05] hover:text-white hover:ring-2 hover:ring-white transition-all duration-300">
          Read more
        </button>
      </div>
    </section>
  );
}
