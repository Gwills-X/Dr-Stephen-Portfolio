import React from "react";

const talks = [
  {
    title: "Science Communications",
    description:
      "This webinar focuses on science communication and shares insights from two early-career scientists who have experience in science communication as part of their research programs and positions. Following presentations from the speakers, there was a moderated panel discussion with a particular emphasis on providing tips and tricks on how to communicate your science effectively, and how to better motivate members of the global younger chemistry community.Join us to hear from: Ts. Dr. Magaret Sivapragasam – Head of Programme (Foundation in Science) Lecturer (BSc. Hons Biotechnology), Faculty of Science & Technology, Quest International University, Malaysia (@MagaretSiva) Dr. Lydia Sosa Vargas – Institut Parisien de Chimie Moléculaire, Sorbonne University, France (@Dr_curieosity) Please be advised that the comments made by participants in our webinars may not reflect the values of ChemVoices and its partner organizations, IYCN and IUPAC.",
    videoId: "xSYc3KyAL_Y",
    event: "International Younger Chemists Network Webinar Series",
    type: "video",
  },
  {
    title: "Global South Researchers Network",
    description:
      "The Global South Researchers Network is an inclusive platform that supports researchers from the Global South through collaboration, mentorship, and professional development. It provides a space to share experiences, build meaningful connections, and access opportunities that enhance academic and career progression. Through targeted events and initiatives, the network fosters visibility, empowers researchers to thrive in global research environments, and advocates for more equitable and representative research systems.",
    event: "Founded in 2019 • University of Sheffield",
    type: "network",
    link: "https://sites.google.com/sheffield.ac.uk/globalsouthresearchersnetwork/home?authuser=0",
  },
];

const Talks = () => {
  return (
    <section className='bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 pb-2'>
            Invited Talks, Conferences & Webinars
          </h2>
          <p className='text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed'>
            Selected presentations delivered at international conferences and
            academic events, highlighting research contributions and
            advancements in nanoscience, cancer therapy, and biomedical
            innovation.
          </p>
        </div>

        {/* Combined Grid */}
        <div className='grid lg:grid-cols-2 gap-12'>
          {talks.map((talk, i) => (
            <div
              key={i}
              className='group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col'>
              {/* Media Section */}
              {talk.type === "video" ? (
                <div className='relative overflow-hidden aspect-video'>
                  <iframe
                    className='w-full h-full'
                    src={`https://www.youtube.com/embed/${talk.videoId}`}
                    title={talk.title}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </div>
              ) : (
                /* Colorful Design for the Network Card */
                <div className='relative aspect-video bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-10 overflow-hidden'>
                  <div className='absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
                  <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl'></div>

                  <div className='relative text-center'>
                    <div className='inline-block px-4 py-1.5 mb-4 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest uppercase'>
                      Global Initiative
                    </div>
                    <h3 className='text-white text-3xl font-black tracking-tight drop-shadow-md'>
                      GSRN
                    </h3>
                    <div className='mt-2 h-1 w-12 bg-white/60 mx-auto rounded-full'></div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              <div className='p-8 flex-grow flex flex-col'>
                <div className='flex flex-col mb-4'>
                  <h3 className='text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300'>
                    {talk.title}
                  </h3>
                  <p className='text-sm font-bold text-indigo-500 mt-2 uppercase tracking-wide'>
                    {talk.event}
                  </p>
                </div>

                <div className='h-px w-full bg-gray-100 mb-6'></div>

                <p className='text-gray-600 text-sm leading-relaxed mb-6 italic'>
                  {talk.description}
                </p>

                {talk.type === "network" && (
                  <div className='mt-auto pt-4'>
                    <a
                      href={talk.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center w-full py-3 px-6 bg-gray-900 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200'>
                      Explore the Network
                      <svg
                        className='w-4 h-4 ml-2'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Talks;
