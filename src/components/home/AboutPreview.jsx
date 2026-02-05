import { motion } from "framer-motion";

const AboutPreview = () => {
	return (
		<section className="relative py-24 px-6 bg-gray-50 text-gray-900">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
				
				{/* TEXT */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
						About Dr. Stephen O. Aderinto
					</h2>

					<p className="text-gray-600 leading-relaxed mb-4">
						Dr. Stephen O. Aderinto is a chemist, academic mentor, and
						science-driven entrepreneur committed to advancing innovation,
						education, and impact across Africa and beyond.
					</p>

					<p className="text-gray-500 leading-relaxed mb-8">
						With academic training across Nigeria, China, and the United
						Kingdom, his work bridges research excellence, entrepreneurship,
						leadership, and faith.
					</p>

					<a
						href="/about"
						className="inline-block px-8 py-4 border-2 border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
					>
						Read Full Biography
					</a>
				</motion.div>

				{/* QUOTE BLOCK */}
				<motion.blockquote
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-blue-900"
				>
					<p className="text-xl italic text-gray-900">
						“Life revolves around knowledge. As you acquire it, you flourish.”
					</p>

					<footer className="mt-4 text-sm text-gray-500 font-medium">
						— Dr. Stephen Aderinto
					</footer>
				</motion.blockquote>

			</div>
		</section>
	);
};

export default AboutPreview;
