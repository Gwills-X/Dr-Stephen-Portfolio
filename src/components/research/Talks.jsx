const talks = [
	{
		title: "Luminescent Nanomaterials in Cancer Therapy",
		videoId: "VIDEO_ID_HERE",
	},
];

const Talks = () => {
	return (
		<section className="bg-gray-50 py-20 px-6">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-10">
					Invited Talks & Conferences
				</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{talks.map((talk, i) => (
						<div key={i} className="rounded-xl overflow-hidden shadow">
							<iframe
								className="w-full h-64"
								src={`https://www.youtube.com/embed/${talk.videoId}`}
								title={talk.title}
								allowFullScreen
							/>
							<div className="p-4 bg-white">
								<p className="font-semibold">{talk.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Talks;
