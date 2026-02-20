import { motion } from "framer-motion";
import { useState } from "react";

// Example gallery images - replace with real images
const gallery = [
  { title: "Lab Research", image: "/images/lab1.jpg" },
  { title: "Conference Talk", image: "/images/conference1.jpg" },
  { title: "Team Collaboration", image: "/images/team1.jpg" },
  { title: "Chemicals & Experiments", image: "/images/chemicals1.jpg" },
  { title: "International Meeting", image: "/images/international1.jpg" },
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

      {/* Videos Section */}
      <section className='max-w-6xl mx-auto mb-20'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
          Video Talks
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='bg-white rounded-2xl shadow-md overflow-hidden'>
              <iframe
                src={video.link}
                title={video.title}
                className='w-full h-60 md:h-80'
                allowFullScreen></iframe>
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-blue-800'>
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Downloadable PDFs */}
      <section className='max-w-6xl mx-auto mb-20'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
          Downloadable PDFs
        </motion.h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {downloads.map((file, i) => (
            <motion.a
              key={i}
              href={file.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-blue-800 font-semibold text-center'>
              {file.title}
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
              onClick={() =>
                setModal({ open: true, image: item.image, title: item.title })
              }
              className='cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-4 bg-white text-center'>
                <h3 className='text-blue-800 font-semibold'>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modal.open && (
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
      )}
    </div>
  );
};

export default Media;
