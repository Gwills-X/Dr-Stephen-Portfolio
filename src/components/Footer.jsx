import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const container = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const Footer = () => {
	const [showScroll, setShowScroll] = useState(false);

	/* Detect scroll */
	useEffect(() => {
		const handleScroll = () => setShowScroll(window.scrollY > 300);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<footer className="relative overflow-hidden bg-gray-50 text-gray-800">
			{/* MAIN */}
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-3 text-center md:text-left"
			>
				{/* BRAND */}
				<motion.div variants={item}>
					<h3 className="text-2xl font-bold text-blue-700 mb-4">
						Dr. Stephen Aderinto
					</h3>
					<p className="text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
						Raising global scholars, shaping leaders, and stewarding knowledge for impact.
					</p>
				</motion.div>

				{/* LINKS */}
				<motion.div variants={item}>
					<h4 className="text-lg font-semibold text-gray-800 mb-5">Explore</h4>
					<ul className="space-y-3">
						{[
							{ name: "About", path: "/about" },
							{ name: "Mentorship", path: "/mentorship" },
							{ name: "WAC", path: "/wac" },
							{ name: "Speaking", path: "/speaking" },
							{ name: "Contact", path: "/contact" },
						].map((l, i) => (
							<li key={i}>
								<Link to={l.path} className="hover:text-blue-500 transition">
									{l.name}
								</Link>
							</li>
						))}
					</ul>
				</motion.div>

				{/* SUBSCRIBE */}
				<motion.div variants={item}>
					<h4 className="text-lg font-semibold text-gray-800 mb-5">Stay Updated</h4>
					<form className="flex max-w-sm mx-auto md:mx-0">
						<input
							type="email"
							placeholder="Your email"
							className="w-full px-4 py-3 rounded-l-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none"
						/>
						<button
							type="button"
							className="px-5 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-r-lg transition"
						>
							Join
						</button>
					</form>

					<div className="flex justify-center md:justify-start gap-6 mt-6 text-2xl">
						<FaInstagram className="hover:text-blue-500 transition cursor-pointer" />
						<FaLinkedin className="hover:text-blue-500 transition cursor-pointer" />
						<FaTwitter className="hover:text-blue-500 transition cursor-pointer" />
					</div>
				</motion.div>
			</motion.div>

			{/* COPYRIGHT */}
			<div className="border-t border-gray-300 py-6 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} Dr. Stephen Aderinto. All rights reserved.
			</div>

			{/* WHATSAPP */}
			<div className="fixed flex justify-end items-end gap-1 bottom-6 left-6 z-50 group">
				<a
					href="https://wa.me/2340000000000"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full p-4 pr-0 rounded-full shadow-2xl text-green-600 transition"
				>
					<FaWhatsapp className="text-5xl" />
				</a>
				<span className="w-40 -translate-x-15 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition">
					Chat with us
				</span>
			</div>

			{/* SCROLL TO TOP */}
			{showScroll && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition"
				>
					<FaArrowUp />
				</button>
			)}
		</footer>
	);
};

export default Footer;
