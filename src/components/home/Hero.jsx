import { motion } from "framer-motion";
import profileImage from "../../assets/images/IMG-20260131-WA0008.jpg";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center bg-gray-50 px-6 text-gray-900 pt-28">
			<div className="max-w-7xl ml-20 max-lg:ml-0 mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
				
				{/* TEXT */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center md:text-left"
				>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900">
						Dr. Stephen Aderinto
					</h1>

					<p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 tracking-wide">
						Scientist · Academic Mentor · Scholar · Leadership & Faith Advocate
					</p>

					<p className="text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
						Raising global scholars, shaping leaders, and stewarding knowledge
						for impact.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
						<a
							href="/contact"
							className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-transparent border-2 hover:text-blue-900 hover:border-blue-900 transition shadow-md"
						>
							Book a Session
						</a>

						<a
							href="/mentorship"
							className="px-8 py-4 border-2 border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
						>
							Explore Mentorship Programmes
						</a>
					</div>
				</motion.div>

				{/* IMAGE */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="flex justify-center"
				>
					<div className="w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white mb-5">
						<img
							src={profileImage}
							alt="Dr Stephen Aderinto"
							className="w-full h-full object-cover"
						/>
					</div>
				</motion.div>

			</div>
		</section>
	);
};

export default Hero;
