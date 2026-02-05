import { motion } from "framer-motion";
import profileImage from "../assets/images/IMG-20260110-WA0034.jpg";

const mentorshipPrograms = [
	
	{
		title: "Scholarship Guidance",
		description:
			"Step-by-step mentorship for academic excellence, study abroad opportunities, and global scholarship applications.",
	},
	{
		title: "Leadership & Faith Mentorship",
		description:
			"Practical mentorship focusing on discipline, leadership, entrepreneurship, and faith-driven impact.",
	},
];

const Mentorship = () => {
	return (
		<div className="pt-32 bg-gray-50 min-h-screen text-gray-800">
			{/* HERO */}
			<section className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 items-center gap-10 px-6">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
				>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Meet Your Mentor
					</h1>
					<p className="text-gray-700 leading-relaxed mb-6">
						Work directly with Dr. Stephen O. Aderinto in a tailored mentorship
						journey designed to develop your academic, leadership, and faith
						potential. This program is ideal for ambitious students and young
						professionals who want to make a meaningful impact.
					</p>
					<a
						href="/contact"
						className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
					>
						Book a Session
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className="flex justify-center"
				>
					<div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-gray-300">
						<img
							src={profileImage}
							alt="Dr. Stephen Aderinto"
							className="w-full h-full object-cover"
						/>
					</div>
				</motion.div>
			</section>

			{/* Programs */}
			<section className="max-w-6xl mx-auto mb-24 px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
					Mentorship Programs
				</h2>

				<div className="grid md:grid-cols-3 gap-10">
					{mentorshipPrograms.map((program, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
						>
							<h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
								{program.title}
							</h3>
							<p className="text-gray-700 leading-relaxed">{program.description}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 px-6 bg-gray-100 text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Ready to Begin Your Mentorship Journey?
					</h2>
					<p className="text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
						Take the first step towards academic excellence, leadership growth,
						and faith-driven impact. Dr. Stephen Aderinto will personally guide
						you through every stage of the mentorship program.
					</p>

					<a
						href="/contact"
						className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
					>
						Book a Session
					</a>
				</motion.div>
			</section>
		</div>
	);
};

export default Mentorship;
