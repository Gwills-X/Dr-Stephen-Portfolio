import { motion } from "framer-motion";
import speakerProfileImage from "../assets/images/IMG-20260110-WA0035.jpg";

const speakingTopics = [
  // need to change the description for the title
  {
    title: "Academic Excellence & Research Leadership",
    description:
      "Practical strategies for building disciplined, responsible, and impactful leaders rooted in faith and values.",
  },
  {
    title: "Entrepreneurship & Venture Development",
    description:
      "Guidance on achieving high academic standards, securing scholarships, and navigating global education opportunities.",
  },
  {
    title: "Leadership, Mentorship, Tutorship, and Guidance & Counselling",
    description:
      "Insights into creating sustainable ventures, innovative thinking, and driving impact in Africa and beyond.",
  },
  {
    title: "Marriage & Family Life",
    description:
      "Inspiring talks on integrating faith into everyday life, service, and leadership for meaningful change.",
  },
  {
    title: "Spiritual Growth and Values",
    description:
      "Inspiring talks on integrating faith into everyday life, service, and leadership for meaningful change.",
  },
];

const Speaking = () => {
  return (
    <div className='pt-32 bg-gray-50 min-h-screen text-gray-800'>
      {/* HERO */}
      <section className='max-w-6xl mx-auto mb-24 grid md:grid-cols-2 items-center gap-10 px-6'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Speaking & Consulting
          </h1>
          <p className='text-gray-700 leading-relaxed mb-6'>
            Invite Dr. Stephen O. Aderinto to speak at your conference,
            workshop, or leadership program for a blend of deep expertise,
            inspiration, and practical, actionable insights.
          </p>
          <a
            href='/contact'
            className='inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
            Invite Dr. Aderinto to Speak
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='flex justify-center'>
          <div className='w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-gray-300'>
            <img
              src={speakerProfileImage}
              alt='Dr. Stephen Aderinto Speaking'
              className='w-full h-full object-cover'
            />
          </div>
        </motion.div>
      </section>

      {/* TOPICS */}
      <section className='max-w-6xl mx-auto mb-24 px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16'>
          Speaking Topics
        </h2>

        <div className='grid md:grid-cols-2 gap-10'>
          {speakingTopics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer'>
              <h3 className='text-xl md:text-2xl font-semibold text-gray-900 mb-4'>
                {topic.title}
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='py-24 px-6 bg-gray-100 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            Book Dr. Stephen for Your Event
          </h2>
          <p className='text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed'>
            Whether it’s a conference, workshop, seminar, or consultation, Dr.
            Stephen brings wisdom, experience, and actionable insights to
            inspire your audience.
          </p>

          <a
            href='/contact'
            className='inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
            Contact for Booking
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Speaking;
