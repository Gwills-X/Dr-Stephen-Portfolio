import { motion } from "framer-motion";

const ResearchHero = () => {
	return (
		<section className="bg-gray-50 py-24 px-6">
			<div className="max-w-5xl mx-auto text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
				>
					Research Profile
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-lg md:text-xl text-gray-700 leading-relaxed"
				>
					I am an emerging researcher in <strong>Bioinorganic Chemistry</strong>
					with a PhD from the University of Sheffield, specialising in the design
					of luminescent transition-metal complexes and nanomaterials for
					anticancer applications. I have authored approximately{" "}
					<strong>15 peer-reviewed publications</strong>, including high-impact
					reviews in <em>Chemical Society Reviews</em> and{" "}
					<em>Materials Chemistry Frontiers</em>, with over{" "}
					<strong>640 citations (h-index 17)</strong>.
				</motion.p>
			</div>
		</section>
	);
};

export default ResearchHero;
 