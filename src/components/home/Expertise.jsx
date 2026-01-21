import { motion } from "framer-motion";
import {
	FaGraduationCap,
	FaGlobe,
	FaPenNib,
	FaUsers,
	FaBible,
	FaLightbulb,
} from "react-icons/fa";

const expertise = [
	{ title: "Academic Excellence & Research Leadership", icon: <FaGraduationCap /> },
	{ title: "Scholarship & Study-Abroad Mentorship", icon: <FaGlobe /> },
	{ title: "Tutoring & Academic Writing (16+)", icon: <FaPenNib /> },
	{ title: "Leadership, Discipline & Life Systems", icon: <FaUsers /> },
	{ title: "Faith, Values & Character Formation", icon: <FaBible /> },
	{ title: "Entrepreneurship & Venture Development", icon: <FaLightbulb /> },
];

const Expertise = () => {
	return (
		<section className="relative py-24 px-6 bg-gray-50 text-gray-900 overflow-x-hidden">
			<div className="max-w-6xl mx-auto">
				
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
					Areas of Expertise
				</h2>

				{/* MOBILE CAROUSEL */}
				<div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-6">
					{expertise.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="snap-center flex-shrink-0 w-[85%] p-8 rounded-2xl bg-white shadow-lg border border-gray-200 hover:border-blue-900 transition text-center"
						>
							<div className="text-5xl text-blue-900 mb-6">
								{item.icon}
							</div>
							<h3 className="text-lg font-semibold text-gray-800">
								{item.title}
							</h3>
						</motion.div>
					))}
				</div>

				{/* DESKTOP GRID */}
				<div className="hidden md:grid grid-cols-3 gap-10">
					{expertise.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="flex flex-col items-center justify-center p-10 rounded-2xl bg-white shadow-lg border border-gray-200 hover:border-blue-900 hover:shadow-xl transition text-center"
						>
							<div className="text-5xl text-blue-900 mb-6">
								{item.icon}
							</div>
							<h3 className="text-xl font-semibold text-gray-900">
								{item.title}
							</h3>
						</motion.div>
					))}
				</div>

			</div>
		</section>
	);
};

export default Expertise;
