import { motion } from "framer-motion";

// Dummy data - replace with your actual research images and links
const publications = [
	{
		title: "Advanced Chemical Synthesis",
		image: "/images/research1.jpg",
		link: "#",
	},
	{
		title: "Global Education Trends",
		image: "/images/research2.jpg",
		link: "#",
	},
	{
		title: "Faith in Academic Leadership",
		image: "/images/research3.jpg",
		link: "#",
	},
];

const projects = [
	{
		title: "Scholarship Mentorship Program",
		image: "/images/project1.jpg",
		link: "#",
	},
	{
		title: "STEM Innovation Hub",
		image: "/images/project2.jpg",
		link: "#",
	},
	{
		title: "Faith & Leadership Curriculum",
		image: "/images/project3.jpg",
		link: "#",
	},
];

const Research = () => {
	return (
		<div className='pt-32 px-6 bg-gray-900 min-h-screen relative'>
			{/* Accent circles */}
			<div className='absolute -top-24 -right-24 w-60 h-60 bg-blue-800 opacity-20 rounded-full blur-3xl pointer-events-none'></div>

			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-4xl md:text-5xl font-bold text-blue-800 mb-16 text-center'>
				Research & Publications
			</motion.h1>

			{/* Publications Section */}
			<section className='max-w-6xl mx-auto mb-20'>
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-3xl md:text-4xl font-bold text-blue-700 mb-8'>
					Publications
				</motion.h2>

				<div className='grid md:grid-cols-3 gap-6'>
					{publications.map((pub, i) => (
						<motion.a
							key={i}
							href={pub.link}
							target='_blank'
							rel='noopener noreferrer'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className='bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
							<img
								src={pub.image}
								alt={pub.title}
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-blue-800'>
									{pub.title}
								</h3>
							</div>
						</motion.a>
					))}
				</div>
			</section>

			{/* Projects Section */}
			<section className='max-w-6xl mx-auto mb-20'>
				<motion.h2
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-3xl md:text-4xl font-bold text-blue-700 mb-8'>
					Projects & Initiatives
				</motion.h2>

				<div className='grid md:grid-cols-3 gap-6'>
					{projects.map((proj, i) => (
						<motion.a
							key={i}
							href={proj.link}
							target='_blank'
							rel='noopener noreferrer'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className='bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer'>
							<img
								src={proj.image}
								alt={proj.title}
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold text-blue-800'>
									{proj.title}
								</h3>
							</div>
						</motion.a>
					))}
				</div>
			</section>

			{/* Optional Research Note */}
			<section className='max-w-4xl mx-auto pb-20 text-center'>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-blue-700 leading-relaxed text-lg'>
					Dr. Stephen Aderinto’s research bridges chemistry, leadership, and
					education, aiming to impact global scholarship, innovation, and
					mentorship across Africa and beyond.
				</motion.p>
			</section>
		</div>
	);
};

export default Research;
