import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='pt-32 px-6 bg-gray-50 min-h-screen relative'>
      {/* Accent circles */}
      <div className='absolute -top-24 -right-24 w-60 h-60 bg-blue-200 opacity-20 rounded-full blur-3xl pointer-events-none'></div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900'>
        Get in Touch
      </motion.h1>

      <div className='max-w-4xl mx-auto bg-white rounded-2xl p-10 shadow-md'>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-6'>
          <div>
            <label
              className='block text-gray-900 font-semibold mb-2'
              htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your full name'
              className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200'
            />
          </div>

          <div>
            <label
              className='block text-gray-900 font-semibold mb-2'
              htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='you@example.com'
              className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200'
            />
          </div>

          <div>
            <label
              className='block text-gray-900 font-semibold mb-2'
              htmlFor='subject'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='Subject of your message'
              className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200'
            />
          </div>

          <div>
            <label
              className='block text-gray-900 font-semibold mb-2'
              htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='6'
              placeholder='Write your message here...'
              className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full py-4 shadow-md hover:shadow-lg transition'>
            Send Message
          </button>
        </motion.form>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-4xl mx-auto text-center mt-10 text-gray-700'>
          <p>Phone: +447466619073</p>
          <p>Location: London, UK</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
