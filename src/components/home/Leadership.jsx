import { motion } from "framer-motion";

const leadershipData = [
	{
		title: "God’s Chayil Sons",
		description:
			"A faith-rooted brotherhood raising men grounded in prayer, discipline, leadership, and responsibility.",
	},
	{
		title: "Chayil Ministries (Co-Director)",
		description:
			"Faith expressed through service, empowerment, education, and sustainable impact across vulnerable communities.",
	},
];

const Leadership = () => {
	return (
		<section className="relative py-24 px-6 bg-gray-50">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
				{leadershipData.map((item, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
						className="p-10 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition"
					>
						<h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
							{item.title}
						</h3>
						<p className="text-gray-600 leading-relaxed">
							{item.description}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Leadership;
