import { motion } from "framer-motion";
import profileImage from "../assets/images/IMG-20260131-WA0033.jpg"; // replace with actual image

const About = () => {
	return (
		<main className="bg-gray-50 text-gray-800">
			{/* HERO/BANNER */}
			<section className="relative py-24 px-6 bg-white">
				<div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
							About Dr. Stephen O. Aderinto
						</h1>
						<p className="text-gray-600 mb-6 text-lg md:text-xl tracking-wide">
							Scientist · Academic · Science Entrepreneur · Mentor · Leadership & Faith Advocate
						</p>
						<p className="text-gray-700 leading-relaxed mb-6">
							Raising global scholars and thinkers, shaping leaders, and stewarding knowledge
							for impact.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex justify-center"
					>
						<div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200">
							<img
								src={profileImage}
								alt="Dr Stephen Aderinto"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* BIOGRAPHY */}
			<section className="py-24 px-6 bg-gray-100">
				<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
							Biography
						</h2>
						<p className="text-gray-700 leading-relaxed mb-4">
							Dr. Stephen O. Aderinto is a bio-inorganic chemist, academic, mentor, and science-driven entrepreneur dedicated to advancing innovation through education, research, and enterprise. Born and raised in Ogbomosho, Nigeria, he demonstrated academic excellence early on, earning a first-class degree in Chemistry before completing postgraduate training—an MSc in China and a PhD in the United Kingdom.
						</p>
						<p className="text-gray-700 leading-relaxed mb-4">
							During the final year of his PhD at the University of Sheffield, Stephen recognized that scientific research delivers its greatest impact when paired with entrepreneurship. This insight led him to the London-based Science Entrepreneur Club (SEC), where he developed the skills needed to translate scientific ideas into practical, real-world solutions
						</p>
						<p className="text-gray-700 leading-relaxed">
							Beyond the laboratory, Stephen is deeply engaged at the intersection of science, innovation, and enterprise. He is the founder of multiple initiatives focused on academic mentorship, scholarship guidance, tutoring, and research development, through which he supports aspiring scholars and researchers in navigating global academic opportunities.
						</p>
					</motion.div>

					<motion.blockquote
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-700"
					>
						<p className="text-gray-900 text-xl italic">
							“Life revolves around knowledge. As you acquire it, you flourish.”
						</p>
						<footer className="mt-4 text-sm text-gray-600 font-medium">
							— Dr. Stephen Aderinto
						</footer>
					</motion.blockquote>
				</div>
			</section>

			{/* LEADERSHIP & PHILOSOPHY */}
			<section className="py-24 px-6 bg-gray-50">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="p-8 rounded-2xl bg-blue-50 shadow-md hover:shadow-lg transition"
					>
						<h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
							Leadership Philosophy
						</h3>
						<p className="text-gray-700 leading-relaxed">
							Stephen’s leadership is rooted in faith, discipline, and
							responsibility. He believes leadership begins in the home,
							character sustains success, and true influence flows from service,
							integrity, and obedience to God.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="p-8 rounded-2xl bg-blue-50 shadow-md hover:shadow-lg transition"
					>
						<h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
							Discipleship & Mentorship
						</h3>
						<p className="text-gray-700 leading-relaxed">
							Through mentoring and discipleship, Stephen equips men and young
							people to grow spiritually, lead confidently, and build lives
							anchored in faith, purpose, and discipline.
						</p>
					</motion.div>
				</div>
			</section>
		</main>
	);
};

export default About;
