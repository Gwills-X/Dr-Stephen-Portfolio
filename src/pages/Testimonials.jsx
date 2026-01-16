import { motion } from "framer-motion";

// Dummy testimonials - replace with real content
const testimonials = [
	{
		name: "Chidera Okafor",
		role: "Scholarship Recipient",
		text: "Dr. Stephen’s mentorship completely transformed my approach to research and leadership. I achieved my scholarship goal and grew in discipline and faith.",
	},
	{
		name: "Emeka Nwosu",
		role: "Research Fellow",
		text: "The guidance I received under Dr. Stephen’s programs was life-changing. I learned how to structure my research, communicate effectively, and lead with integrity.",
	},
	{
		name: "Ngozi Uche",
		role: "Student Leader",
		text: "Through his mentorship, I not only excelled academically but also developed as a leader committed to service and positive impact.",
	},
	{
		name: "Tunde Alabi",
		role: "Entrepreneurship Mentee",
		text: "Dr. Stephen’s insights on entrepreneurship and innovation empowered me to start my first sustainable venture with confidence.",
	},
];

const Testimonials = () => {
	return (
		<div className='pt-32 bg-gray-900 min-h-screen text-white'>
			{/* HERO SECTION */}
			<section className='max-w-6xl mx-auto mb-24 px-6 text-center'>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-4xl md:text-5xl font-bold text-blue-300 mb-6'>
					Testimonials & Impact
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className='text-blue-200 max-w-3xl mx-auto mb-10 leading-relaxed'>
					Real stories from scholars, mentees, and leaders who have benefited
					from mentorship, academic guidance, and leadership training under Dr.
					Stephen Aderinto.
				</motion.p>
			</section>

			{/* TESTIMONIAL GRID */}
			<section className='max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-10'>
				{testimonials.map((testimonial, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
						className='p-8 bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition'>
						<p className='text-blue-200 italic mb-4'>"{testimonial.text}"</p>
						<h3 className='text-blue-300 font-semibold'>{testimonial.name}</h3>
						<p className='text-blue-400 text-sm'>{testimonial.role}</p>
					</motion.div>
				))}
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
						Share Your Story or Connect
					</h2>
					<p className='text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed'>
						Have you benefited from mentorship, guidance, or collaboration with
						Dr. Stephen? Share your experience or reach out to explore
						partnership opportunities.
					</p>

					<a
						href='/contact'
						className='inline-block px-10 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition'>
						Contact Dr. Stephen
					</a>
				</motion.div>
			</section>
		</div>
	);
};

export default Testimonials;
