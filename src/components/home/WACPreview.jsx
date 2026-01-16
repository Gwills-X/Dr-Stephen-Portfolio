import { motion } from "framer-motion";

const WACPreview = () => {
	return (
		<section className='relative py-24 px-6 bg-gray-900 text-white'>
			<div className='max-w-5xl mx-auto text-center'>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-4xl md:text-5xl font-bold mb-6 text-blue-100'>
					Wisdom Academy Consortium (WAC)
				</motion.h2>

				<p className='text-blue-200 leading-relaxed mb-12 max-w-3xl mx-auto'>
					WAC is committed to raising 5,000 of the brightest African-origin
					students into the world’s top universities by 2030.
				</p>

				<div className='grid md:grid-cols-4 gap-6 mb-12'>
					{["Knowledge", "Excellence", "Discipline", "Equity"].map((pillar) => (
						<motion.div
							key={pillar}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className='p-6 bg-blue-800 rounded-xl shadow-lg font-semibold text-white hover:bg-blue-700 transition'>
							{pillar}
						</motion.div>
					))}
				</div>

				<div className='flex justify-center gap-6 flex-wrap'>
					<a
						href='/scholarships'
						className='px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
						Scholarship Mentorship
					</a>
					<a
						href='/foundation'
						className='px-8 py-4 border-2 border-blue-200 text-blue-200 font-semibold rounded-full hover:bg-blue-800 hover:text-white transition'>
						Foundation & Grants
					</a>
				</div>
			</div>
		</section>
	);
};

export default WACPreview;
