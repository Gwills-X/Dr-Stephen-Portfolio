const talks = [
  {
    title: "Science Communications",
    description:
      "This webinar focuses on science communication and shares insights from two early-career scientists who have experience in science communication as part of their research programs and positions. Following presentations from the speakers, there was a moderated panel discussion with a particular emphasis on providing tips and tricks on how to communicate your science effectively, and how to better motivate members of the global younger chemistry community.Join us to hear from: Ts. Dr. Magaret Sivapragasam – Head of Programme (Foundation in Science) Lecturer (BSc. Hons Biotechnology), Faculty of Science & Technology, Quest International University, Malaysia (@MagaretSiva) Dr. Lydia Sosa Vargas – Institut Parisien de Chimie Moléculaire, Sorbonne University, France (@Dr_curieosity) Please be advised that the comments made by participants in our webinars may not reflect the values of ChemVoices and its partner organizations, IYCN and IUPAC.",
    videoId: "xSYc3KyAL_Y",
    event: "International Younger Chemists Network Webinar Series",
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
