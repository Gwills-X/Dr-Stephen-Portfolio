import { motion } from "framer-motion";
import speakerProfileImage from "../assets/images/IMG-20260110-WA0029.jpg";

const speakingTopics = [
	{
		title: "Leadership & Character Formation",
		description:
			"Practical strategies for building disciplined, responsible, and impactful leaders rooted in faith and values.",
	},
	{
		title: "Academic Excellence & Scholarship Mentorship",
		description:
			"Guidance on achieving high academic standards, securing scholarships, and navigating global education opportunities.",
	},
	{
		title: "Entrepreneurship & Innovation",
		description:
			"Insights into creating sustainable ventures, innovative thinking, and driving impact in Africa and beyond.",
	},
	{
		title: "Faith in Action",
		description:
			"Inspiring talks on integrating faith into everyday life, service, and leadership for meaningful change.",
	},
];

const Speaking = () => {
	return (
		<div className='pt-32 bg-gray-900 min-h-screen text-white'>
			{/* HERO SECTION */}
			<section className='max-w-6xl mx-auto mb-24 grid md:grid-cols-2 items-center gap-10 px-6'>
				{/* TEXT */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}>
					<h1 className='text-4xl md:text-5xl font-bold text-blue-300 mb-4'>
						Speaking & Consulting
					</h1>
					<p className='text-blue-200 leading-relaxed mb-6'>
						Invite Dr. Stephen Aderinto to speak at your conference, workshop,
						or leadership program. With years of experience mentoring scholars
						and leading impactful initiatives across Africa, he brings
						knowledge, inspiration, and actionable insights.
					</p>
					<a
						href='/contact'
						className='inline-block px-10 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
						Invite Dr. Stephen to Speak
					</a>
				</motion.div>

				{/* IMAGE PLACEHOLDER */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, delay: 0.1 }}
					className='flex justify-center'>
					<div className='w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-700'>
						<img
							src={speakerProfileImage}
							alt='Dr. Stephen Aderinto Speaking'
							className='w-full h-full object-cover'
						/>
					</div>
				</motion.div>
			</section>

			{/* TOPICS SECTION */}
			<section className='max-w-6xl mx-auto mb-24 px-6'>
				<h2 className='text-3xl md:text-4xl font-bold text-blue-300 text-center mb-16'>
					Speaking Topics
				</h2>

				<div className='grid md:grid-cols-2 gap-10'>
					{speakingTopics.map((topic, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className='p-8 bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer'>
							<h3 className='text-xl md:text-2xl font-semibold text-blue-300 mb-4'>
								{topic.title}
							</h3>
							<p className='text-blue-200 leading-relaxed'>
								{topic.description}
							</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* CTA SECTION */}
			<section className='py-24 px-6 bg-gray-800 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-blue-300 mb-6'>
						Book Dr. Stephen for Your Event
					</h2>
					<p className='text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed'>
						Whether it’s a conference, workshop, seminar, or consultation, Dr.
						Stephen brings wisdom, experience, and actionable insights to
						inspire your audience and drive meaningful impact.
					</p>

					<a
						href='/contact'
						className='inline-block px-10 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
						Contact for Booking
					</a>
				</motion.div>
			</section>
		</div>
	);
};

export default Speaking;
