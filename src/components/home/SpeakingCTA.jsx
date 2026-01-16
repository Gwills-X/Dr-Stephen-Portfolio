import { motion } from "framer-motion";

const SpeakingCTA = () => {
	return (
		<section className='relative py-24 px-6 bg-gray-900 text-white'>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='max-w-4xl mx-auto text-center'>
				<h2 className='text-4xl md:text-5xl font-bold mb-6 text-blue-100'>
					Speaking, Consulting & Collaborations
				</h2>

				<p className='text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed'>
					Invite Stephen to speak, teach, consult, or collaborate on leadership,
					academic excellence, global education, and faith.
				</p>

				<a
					href='/contact'
					className='inline-block px-10 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition'>
					Invite Stephen to Speak
				</a>
			</motion.div>
		</section>
	);
};

export default SpeakingCTA;
