import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className='pt-32 px-6 bg-gray-900 min-h-screen relative'>
			{/* Accent circles for continuity */}
			<div className='absolute -top-24 -right-24 w-60 h-60 bg-blue-800 opacity-20 rounded-full blur-3xl pointer-events-none'></div>

			<motion.h1
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-4xl md:text-5xl font-bold text-blue-800 mb-16 text-center'>
				Get in Touch
			</motion.h1>

			<div className='max-w-4xl mx-auto bg-gray-800 rounded-2xl p-10 shadow-lg'>
				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='flex flex-col gap-6'>
					<div>
						<label
							className='block text-blue-700 font-semibold mb-2'
							htmlFor='name'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Your full name'
							className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-700 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700'
						/>
					</div>

					<div>
						<label
							className='block text-blue-700 font-semibold mb-2'
							htmlFor='email'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='you@example.com'
							className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-700 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700'
						/>
					</div>

					<div>
						<label
							className='block text-blue-700 font-semibold mb-2'
							htmlFor='subject'>
							Subject
						</label>
						<input
							type='text'
							id='subject'
							name='subject'
							placeholder='Subject of your message'
							className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-700 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700'
						/>
					</div>

					<div>
						<label
							className='block text-blue-700 font-semibold mb-2'
							htmlFor='message'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							rows='6'
							placeholder='Write your message here...'
							className='w-full px-4 py-3 rounded-lg bg-gray-900 border border-blue-700 text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-700'></textarea>
					</div>

					<button
						type='submit'
						className='w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-full py-4 shadow-md hover:shadow-lg transition'>
						Send Message
					</button>
				</motion.form>
			</div>

			{/* Optional footer info */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='max-w-4xl mx-auto text-center mt-10 text-blue-700'>
				<p>Email: info@gw-teck.com</p>
				<p>Phone: +234 123 456 7890</p>
				<p>Location: Lagos, Nigeria</p>
			</motion.div>
		</div>
	);
};

export default Contact;
