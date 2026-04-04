import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaGraduationCap,
  FaCheckCircle,
  FaArrowRight,
  FaGlobeAfrica,
} from "react-icons/fa";
import { MdOutlineScience, MdClass } from "react-icons/md";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <main className='bg-gray-50 text-gray-800'>
      {/* HERO SECTION */}
      <section className='relative py-24 px-6 bg-white'>
        <div className='max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <div className='flex items-center gap-2 mb-4 text-blue-700 font-bold uppercase tracking-widest text-sm'>
              <FaBookOpen /> <span>Academic Publications</span>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-4 text-gray-900 leading-tight'>
              Equipping the Next{" "}
              <span className='text-blue-700'>Generation of Scholars</span>
            </h1>
            <p className='text-gray-700 leading-relaxed mb-6 text-lg'>
              Dr. Stephen O. Aderinto writes to provide ambitious students with
              the practical knowledge and strategic frameworks required to
              access global academic opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='hidden md:flex justify-center'>
            <div className='p-10 bg-blue-50 rounded-2xl border border-blue-100 relative'>
              <FaGlobeAfrica className='text-blue-200 text-9xl absolute -top-10 -right-10 rotate-12' />
              <p className='text-gray-700 leading-relaxed relative z-10 font-medium italic'>
                "Securing world-class research environments requires more than
                talent; it requires a blueprint for excellence."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED BOOK SECTION */}
      <section className='py-24 px-6 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col items-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900'>Featured Book</h2>
            <div className='w-20 h-1 bg-blue-700 mt-4 rounded-full'></div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-start'>
            {/* Book Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative group flex justify-center'>
              <div className='absolute -inset-2 bg-blue-600 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000'></div>
              <div className='relative bg-white rounded-lg shadow-2xl border border-gray-200 max-w-sm'>
                <img
                  src='scholarship-blueprint-cover.jpeg'
                  alt='The Scholarship Blueprint'
                  className='w-full h-auto'
                />
              </div>
            </motion.div>

            {/* Book Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h3 className='text-3xl font-bold text-blue-800 mb-2'>
                The Scholarship Blueprint
              </h3>
              <p className='text-xl text-gray-600 mb-6 font-medium italic'>
                A practical guide to securing international scholarships.
              </p>

              <p className='text-gray-700 mb-8 leading-relaxed'>
                Dr. Stephen O. Aderinto shares the strategies, insights, and
                lessons that helped him successfully navigate the world-class
                research environments of the UK and beyond.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>
                {[
                  "Identify Opportunities",
                  "Build Academic Profiles",
                  "Application Strategy",
                  "Compelling Statements",
                  "Avoid Common Errors",
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm'>
                    <FaCheckCircle className='text-blue-600 flex-shrink-0' />
                    <span className='text-gray-700 font-medium text-sm'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                className='w-full md:w-auto px-10 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-3 group'
                href='https://payhip.com/b/Gl0Qe'
                target='__blank'>
                Purchase the Book
                <FaArrowRight className='group-hover:translate-x-1 transition-transform' />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE & MENTORSHIP */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
          {/* Who It's For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='p-10 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm'>
            <div className='flex items-center gap-3 mb-6'>
              <FaGraduationCap className='text-3xl text-blue-700' />
              <h3 className='text-2xl font-bold text-gray-900'>
                Value for Scholars
              </h3>
            </div>
            <ul className='space-y-4'>
              {[
                "Undergraduate students aiming for postgraduate success",
                "Early-career researchers seeking global impact",
                "Students from developing nations aiming abroad",
                "MSc and PhD programme applicants",
              ].map((text, i) => (
                <li key={i} className='flex gap-4 text-gray-700'>
                  <span className='text-blue-700 font-bold'>→</span>
                  <span className='leading-tight'>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mentorship Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='p-10 rounded-2xl bg-blue-800 text-white shadow-xl relative overflow-hidden'>
            <MdOutlineScience className='absolute -bottom-10 -right-10 text-white opacity-10 text-[12rem]' />
            <h3 className='text-2xl font-bold mb-4 relative z-10'>
              Mentorship & Guidance
            </h3>
            <p className='mb-8 opacity-90 relative z-10 leading-relaxed'>
              Beyond the book, receive direct support for Academic CV
              development, Personal Statement reviews, and scholarship
              positioning.
            </p>
            <Link
              to='/contact'
              className='px-10 py-3 bg-white text-blue-800 font-extrabold rounded-full hover:bg-gray-100 transition relative z-10'>
              Join Mentorship
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className='py-20 px-6 bg-gray-50 border-t border-gray-200'>
        <div className='max-w-4xl mx-auto text-center'>
          <MdClass className='mx-auto text-4xl text-gray-300 mb-4' />
          <h3 className='text-lg font-bold text-gray-500 uppercase tracking-widest mb-2'>
            Future Releases
          </h3>
          <p className='text-gray-500'>
            Additional research development and global education pathways
            publications are currently in development.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Books;
