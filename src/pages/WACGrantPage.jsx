import { motion } from "framer-motion";
import founderImage from "../assets/images/IMG-20260131-WA0021.jpg";
import logo from "../assets/images/Screenshot_2026-01-12_150920-removebg-preview.png";

const WACGrantPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-10 px-6">
      {/* HERO */}
      <section className="relative py-24">
        <div className="flex justify-center text-3xl underline font-bold text-gray-900 gap-2 mb-5 max-md:text-center">
          <img src={logo} alt="Wisdom Academy Consortium Logo" className="" />
          <h1>Wisdom Academy Consortium</h1>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-md:text-center"
          >
            <h1 className="text-5xl max-md:text-3xl font-bold mb-6 max-md:mt-3 text-gray-900">
              Meet the Founder
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4 tracking-wide">
              Academic | Mentor | Scholar | Researcher
            </p>
            <p className="text-gray-600 leading-relaxed">PhD, Scholarships, Mentoring Impact</p>
            <div className="mt-6 flex flex-col gap-3">
              <p className="font-light italic text-3xl self-center">Dr. Stephen Aderinto</p>
              <p className="text-center">Founder</p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-gray-300 aspect-[3/4]">
              <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRANT CONTENT */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md space-y-6">
          <h2 className="text-4xl max-md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Wisdom Academic Consortium Grant Initiative
          </h2>

          <p className="text-gray-700 leading-relaxed">
            As part of the Wisdom Academic Consortium, we are committed to
            empowering indigenous African students and researchers by offering
            grants ranging from <span className="font-semibold">500,000 to 1 million Naira</span>.
          </p>

          <p className="text-gray-700 font-semibold">Our priority research domains include:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Autism (Autistic Spectrum Disorder)</li>
            <li>Cancer Research</li>
            <li>Cardiovascular Health Research</li>
            <li>Diabetes and Obesity</li>
            <li>Mental Health</li>
            <li>Addressing Inequality in African Development</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            To qualify, research must lead to at least one published paper, with acknowledgment of Dr. Stephen Aderinto and Mrs. Channelle Aderinto.
          </p>

          <p className="text-gray-500 italic leading-relaxed">
            Through this initiative, we aim to drive scientific innovation and ensure that African researchers contribute meaningfully to global knowledge.
          </p>

          <footer className="text-gray-900 font-semibold text-right">— Dr. Stephen Aderinto</footer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Apply for a Grant
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Click below to submit your research proposal or contact us for more
            information about the grant program.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
          >
            Apply Now
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default WACGrantPage;
