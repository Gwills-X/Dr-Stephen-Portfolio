import { motion } from "framer-motion";
import { useState } from "react";
import galleryPic1 from "../assets/images/IMG-20260131-WA0029.jpg";
import galleryPic2 from "../assets/gallery/IMG-20260220-WA0052.jpg";
import galleryPic3 from "../assets/gallery/IMG-20260220-WA0050.jpg";
import galleryPic4 from "../assets/images/IMG-20260131-WA0017.jpg";
import galleryPic5 from "../assets/gallery/IMG-20260220-WA0041.jpg";
import galleryPic6 from "../assets/gallery/IMG-20260223-WA0004.jpg";
// Example gallery images - replace with real images
const gallery = [
  { title: "Lab Research", image: galleryPic1 },
  { title: "Conference Talk", image: galleryPic2 },
  {
    title: "Team Collaboration",
    image: galleryPic3,
  },
  { title: "Chemicals & Experiments", image: galleryPic4 },
  { title: "International Meeting", image: galleryPic5 },
  { title: "Laboratory", image: galleryPic6 },
];

// Articles, Audio, Video, Downloads
const articles = [
  {
    title: "Hear Stories of Grad Students Around the World",
    link: "https://cen.acs.org/education/graduate-education/Hear-stories-grad-students-around/96/web/2018/09",
  },
  {
    title: "Aspiring to promote science in the African context",
    link: "https://tesselledevelopment.com/research-lives-and-cultures/stephenaderinto",
  },
  { title: "Faith and Discipline in Education", link: "#" },
];

const audios = [
  { title: "Mentorship Session 1", link: "#" },
  { title: "Mentorship Session 2", link: "#" },
];

const videos = [
  {
    title: "Leadership Talk",
    link: "https://www.youtube.com/shorts/4v6hmmqAEV4",
  },
  {
    title: "Scholarship Guidance",
    link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const downloads = [
  { title: "Study Guide PDF", link: "/pdfs/study-guide.pdf" },
  { title: "Research Tips PDF", link: "/pdfs/research-tips.pdf" },
  { title: "Leadership & Faith PDF", link: "/pdfs/leadership-faith.pdf" },
];

const Media = () => {
  const [modal, setModal] = useState({ open: false, image: "", title: "" });

  return (
    <div className='pt-32 px-6 bg-gray-50 min-h-screen text-gray-800 relative'>
      {/* Accent circle */}
      <div className='absolute -top-20 -right-20 w-48 h-48 bg-blue-200 opacity-20 rounded-full blur-3xl pointer-events-none'></div>

      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center'>
        Media & Resources
      </motion.h1>

      {/* Articles Section */}
      <section className='max-w-6xl mx-auto mb-20'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
          Articles & Features
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <h3 className='text-xl font-semibold text-blue-800'>
                {article.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Audios Section */}
      <section className='max-w-6xl mx-auto mb-20'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
          Audio Sessions
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {audios.map((audio, i) => (
            <motion.a
              key={i}
              href={audio.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <h3 className='text-xl font-semibold text-blue-800'>
                {audio.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className='max-w-6xl mx-auto mb-32'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
          Conference & Lab Gallery
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              // onClick={() =>
              //   setModal({ open: true, image: item.image, title: item.title })
              // }
              className='cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300'>
              <img src={item.image} alt={item.title} className='w-full h-70 ' />
              <div className='p-4 bg-white text-center'>
                <h3 className='text-blue-800 font-semibold'>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {/* {modal.open && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          onClick={() => setModal({ open: false, image: "", title: "" })}>
          <div className='relative max-w-3xl w-full'>
            <img
              src={modal.image}
              alt={modal.title}
              className='w-full rounded-xl shadow-2xl'
            />
            <p className='text-white text-center mt-4 text-xl'>{modal.title}</p>
            <button
              onClick={() => setModal({ open: false, image: "", title: "" })}
              className='absolute top-4 right-4 text-white text-3xl font-bold'>
              &times;
            </button>
          </div>
        </div>
      )} */}

      {/* Scholarships, Awards & Grants */}
      <section className='max-w-7xl mx-auto mb-24 px-6'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Scholarships, Awards & Research Grants
          </h2>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            A distinguished record of competitive scholarships, international
            recognitions, research grants, and academic excellence awards across
            multiple institutions.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-10'>
          {/* Awards & Scholarships */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500'>
            <h3 className='text-2xl font-bold text-blue-900 mb-6'>
              Selected Nominations, Awards & Scholarships
            </h3>

            <ul className='space-y-4 text-gray-700 leading-relaxed'>
              <li>
                • PhD publication selected as the cover for Issue 17 (2024) of{" "}
                <span className='font-semibold'>Dalton Transactions</span>.
              </li>
              <li>
                • Royal Microscopical Society (RMS) Bursary Awards (2019–2022).
              </li>
              <li>
                • IUPAC Young Observer Award, Royal Society of Chemistry (RSC),
                2019.
              </li>
              <li>
                • UoS Doctoral Academy Scholarship (worth &gt;£100,000), 2018.
              </li>
              <li>
                • Monash Graduate Scholarship (MGS) & Monash International
                Tuition Scholarship (MITS), 2018 (declined).
              </li>
              <li>• Cancer Research UK Travel Grant, 2022.</li>
              <li>
                • Outstanding International Student Award, Lanzhou Jiaotong
                University, 2015.
              </li>
              <li>
                • Full-time Master’s Scholarship, King Fahd University of
                Petroleum and Minerals (declined).
              </li>
              <li>
                • Faculty & Alumni Prize for Best Graduating Student, LAUTECH,
                2011.
              </li>
              <li>• Oyo State Bursary Award, 2010.</li>
              <li>
                • Fasoro Timothy Adewale Trust Foundation Scholarship, 2010.
              </li>
            </ul>
          </motion.div>

          {/* Grants */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500'>
            <h3 className='text-2xl font-bold text-blue-900 mb-6'>
              Selected Research Grants
            </h3>

            <ul className='space-y-4 text-gray-700 leading-relaxed'>
              <li>
                • University of Sheffield Institutional Open Access Fund (2024)
                — Corresponding author & award recipient.
              </li>
              <li>
                • Royal Society of Chemistry (RSC) Grants (Refs.:
                D22-7948910326, D20-642, T19-3812).
              </li>
              <li>
                • National Natural Science Foundation of China (NSFC), Grant No.
                21367017 — Contributor.
              </li>
              <li>
                • Natural Science Foundation of Gansu Province (Grant Nos.
                1212RJZA037 & 17JR5RA090) — Contributor.
              </li>
              <li>
                • Lanzhou Jiaotong University Hundred Youth Talents Training
                Programme — Contributor.
              </li>
              <li>
                • Graduate Students Innovation Project, Lanzhou Jiaotong
                University — Contributor.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;
