import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import testimonials from "../components/testimonials";

const TestimonialCard = ({ name, role, text }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 350;

  const displayText = expanded
    ? text
    : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className='p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col justify-between'>
      <motion.p layout className='text-gray-700 italic mb-4'>
        {displayText}
      </motion.p>

      {text.length > maxLength && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='text-blue-600 text-sm font-semibold hover:underline mb-4 self-start'>
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      <div>
        <h3 className='text-gray-900 font-semibold'>{name}</h3>
        <p className='text-gray-500 text-sm'>{role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <div className='pt-32 bg-gray-50 min-h-screen text-gray-800'>
      {/* HERO */}
      <section className='max-w-6xl mx-auto mb-24 px-6 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
          Testimonials & Impact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed'>
          Real stories from scholars, professionals, and mentees who have
          benefited from mentorship, guidance, and leadership under Dr. Stephen
          Aderinto.
        </motion.p>
      </section>

      {/* GRID */}
      <section className='max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-10'>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
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
            Share Your Story or Connect
          </h2>
          <p className='text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed'>
            Have you benefited from mentorship, guidance, or collaboration with
            Dr. Stephen? Share your experience or reach out to explore
            partnership opportunities.
          </p>
          <a
            href='/contact'
            className='inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
            Contact Dr. Stephen
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Testimonials;
