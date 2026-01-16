import { motion } from "framer-motion";

const AboutPreview = () => {
	return (
		<section className='relative py-24 px-6 bg-gray-900 text-white'>
			<div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
				{/* TEXT */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h2 className='text-4xl md:text-5xl font-bold mb-6'>
						About Dr. Stephen Aderinto
					</h2>

					<p className='text-gray-300 leading-relaxed mb-4'>
						Dr. Stephen Aderinto is a chemist, academic mentor, and
						science-driven entrepreneur committed to advancing innovation,
						education, and impact across Africa and beyond.
					</p>

					<p className='text-gray-400 leading-relaxed mb-6'>
						With academic training across Nigeria, China, and the United
						Kingdom, his work bridges research excellence, entrepreneurship,
						leadership, and faith.
					</p>

					<a
						href='/about'
						className='inline-block px-8 py-4 border-2 border-blue-700 rounded-lg font-semibold text-blue-700 hover:bg-blue-700 hover:text-white transition'>
						Read Full Biography
					</a>
				</motion.div>

				{/* QUOTE BLOCK */}
				<motion.blockquote
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className='bg-gray-800 p-8 rounded-2xl shadow-lg border-l-8 border-blue-700'>
					<p className='text-xl italic text-blue-400'>
						“Life revolves around knowledge. As you acquire it, you flourish.”
					</p>

					<footer className='mt-4 text-sm text-gray-300 font-medium'>
						— Dr. Stephen Aderinto
					</footer>
				</motion.blockquote>
			</div>
		</section>
	);
};

export default AboutPreview;
