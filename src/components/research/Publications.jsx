import { FaFilePdf } from "react-icons/fa";
import { publications } from "./publicationsPdf";

const Publications = () => {
	return (
		<section className="bg-gray-50 py-20 px-6">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
					Publications
				</h2>

				<div className="space-y-6">
					{publications.map((pub, i) => (
						<div
							key={i}
							className="flex justify-between items-center p-6 bg-white border rounded-xl shadow-sm"
						>
							<div>
								<h3 className="font-semibold text-gray-900">
									{pub.title}
								</h3>
								<p className="text-gray-600 text-sm">{pub.journal}</p>
							</div>

							<a
								href={pub.file}
								download
								className="flex items-center gap-2 text-blue-700 hover:underline"
							>
								<FaFilePdf />
								PDF
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Publications;
