import { motion } from "framer-motion";

const WACPreview = () => {
	return (
		<section className="relative py-24 px-6 bg-gray-50">
			<div className="max-w-5xl mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
				>
					Wisdom Academy Consortium (WAC)
				</motion.h2>

				<p className="text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
					By 2030, WAC aims to support 5000 exceptional students of African origin in securing scholarships to the world's leading universities.
				</p>

				<div className="grid md:grid-cols-4 gap-6 mb-12">
					{["Knowledge", "Excellence", "Discipline", "Equity"].map((pillar) => (
						<motion.div
							key={pillar}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="p-6 bg-white border border-gray-200 rounded-xl shadow-md font-semibold text-gray-800 hover:border-blue-900 hover:shadow-lg transition"
						>
							{pillar}
						</motion.div>
					))}
				</div>

				<div className="flex justify-center gap-6 flex-wrap">
					<a
						href="/scholarships"
						className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-full shadow-md hover:bg-transparent border-2 hover:text-blue-900 transition-all duration-300"
					>
						Scholarship Mentorship
					</a>
					<a
						href="/foundation"
						className="px-8 py-4 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-900 hover:text-white transition"
					>
						Foundation & Grants
					</a>
				</div>
			</div>
		</section>
	);
};

export default WACPreview;
