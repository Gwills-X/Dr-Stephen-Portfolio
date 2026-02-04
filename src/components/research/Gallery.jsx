import { useState } from "react";

const images = [
	"/images/lab1.jpg",
	"/images/conference1.jpg",
	"/images/lab2.jpg",
];

const Gallery = () => {
	const [active, setActive] = useState(null);

	return (
		<section className="bg-white py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-10">
					Conference & Lab Gallery
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
					{images.map((src, i) => (
						<img
							key={i}
							src={src}
							onClick={() => setActive(src)}
							className="rounded-xl cursor-pointer hover:opacity-80"
						/>
					))}
				</div>

				{active && (
					<div
						onClick={() => setActive(null)}
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
					>
						<img
							src={active}
							className="max-w-3xl rounded-xl"
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default Gallery;
