import { motion } from "framer-motion";

// Dummy data - replace with actual content
const articles = [
	{ title: "The Power of Knowledge", link: "#" },
	{ title: "Leadership Principles for Scholars", link: "#" },
	{ title: "Faith and Discipline in Education", link: "#" },
];

const audios = [
	{ title: "Mentorship Session 1", link: "#" },
	{ title: "Mentorship Session 2", link: "#" },
];

const videos = [
	{ title: "Leadership Talk", link: "#" },
	{ title: "Scholarship Guidance", link: "#" },
];

const Media = () => {
	return (
		<div className="pt-32 px-6 bg-gray-50 relative min-h-screen text-gray-800">
			{/* Accent circle */}
			<div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-200 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
			>
				Media Resources
			</motion.h1>

			{/* Articles */}
			<section className="max-w-6xl mx-auto mb-20">
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
				>
					Articles
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-6">
					{articles.map((article, i) => (
						<motion.a
							key={i}
							href={article.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
						>
							<h3 className="text-xl font-semibold text-blue-800">{article.title}</h3>
						</motion.a>
					))}
				</div>
			</section>

			{/* Audios */}
			<section className="max-w-6xl mx-auto mb-20">
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
				>
					Audio Sessions
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-6">
					{audios.map((audio, i) => (
						<motion.a
							key={i}
							href={audio.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
						>
							<h3 className="text-xl font-semibold text-blue-800">{audio.title}</h3>
						</motion.a>
					))}
				</div>
			</section>

			{/* Videos */}
			<section className="max-w-6xl mx-auto mb-20">
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
				>
					Videos
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-6">
					{videos.map((video, i) => (
						<motion.a
							key={i}
							href={video.link}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
						>
							<h3 className="text-xl font-semibold text-blue-800">{video.title}</h3>
						</motion.a>
					))}
				</div>
			</section>

			{/* Downloads */}
			<section className="max-w-6xl mx-auto pb-5">
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
				>
					Downloadable Resources
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-6">
					<motion.a
						href="#"
						className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-blue-800 font-semibold text-center"
					>
						Study Guide PDF
					</motion.a>
					<motion.a
						href="#"
						className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-blue-800 font-semibold text-center"
					>
						Research Tips PDF
					</motion.a>
					<motion.a
						href="#"
						className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-blue-800 font-semibold text-center"
					>
						Leadership & Faith PDF
					</motion.a>
				</div>
			</section>
		</div>
	);
};

export default Media;
