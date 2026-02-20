const talks = [
  {
    title: "Luminescent Nanomaterials in Cancer Therapy",
    description:
      "An invited presentation discussing the design, characterization, and biomedical applications of luminescent nanomaterials in targeted cancer therapy. The talk highlights recent advancements in nanotechnology-driven drug delivery systems and their potential impact on modern oncology.",
    videoId: "xSYc3KyAL_Y",
    event:
      "International Conference on Nanotechnology & Biomedical Engineering",
    year: "2024",
  },
];

const Talks = () => {
  return (
    <section className='bg-gradient-to-b from-gray-50 to-white py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900'>
            Invited Talks, Conferences & Webinars
          </h2>
          <p className='text-gray-600 mt-4 max-w-2xl mx-auto'>
            Selected presentations delivered at international conferences and
            academic events, highlighting research contributions and
            advancements in nanoscience, cancer therapy, and biomedical
            innovation.
          </p>
        </div>

        {/* Talks Grid */}
        <div className='grid md:grid-cols-2 gap-10'>
          {talks.map((talk, i) => (
            <div
              key={i}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300'>
              {/* Video */}
              <div className='relative'>
                <iframe
                  className='w-full h-64 md:h-72'
                  src={`https://www.youtube.com/embed/${talk.videoId}`}
                  title={talk.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {talk.title}
                </h3>

                <p className='text-sm text-indigo-600 mt-2'>
                  {talk.event} • {talk.year}
                </p>

                <p className='text-gray-600 mt-4 text-sm leading-relaxed'>
                  {talk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talks;
