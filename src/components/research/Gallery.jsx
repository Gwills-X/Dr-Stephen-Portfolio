import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

import galleryPic1 from "../../assets/gallery/IMG-20260131-WA0038.jpg";
import galleryPic2 from "../../assets/gallery/IMG-20260131-WA0039.jpg";
import galleryPic3 from "../../assets/gallery/IMG-20260220-WA0040.jpg";
import galleryPic4 from "../../assets/gallery/IMG-20260220-WA0051.jpg";
import galleryPic5 from "../../assets/gallery/IMG-20260220-WA0042.jpg";
import galleryPic6 from "../../assets/gallery/IMG-20260220-WA0043.jpg";
import galleryPic7 from "../../assets/gallery/IMG-20260220-WA0044.jpg";
import galleryPic8 from "../../assets/gallery/IMG-20260220-WA0045.jpg";
import galleryPic9 from "../../assets/gallery/IMG-20260220-WA0046.jpg";
import galleryPic10 from "../../assets/gallery/IMG-20260220-WA0047.jpg";
import galleryPic11 from "../../assets/gallery/IMG-20260220-WA0048.jpg";
import galleryPic12 from "../../assets/gallery/IMG-20260220-WA0049.jpg";
import galleryPic13 from "../../assets/gallery/IMG-20260220-WA0054.jpg";

const images = [
  {
    src: galleryPic1,
  },
  {
    src: galleryPic2,
  },
  {
    src: galleryPic3,
  },
  {
    src: galleryPic4,
  },
  {
    src: galleryPic5,
  },
  { src: galleryPic6 },
  { src: galleryPic7 },
  { src: galleryPic8 },
  { src: galleryPic9 },
  { src: galleryPic10 },
  { src: galleryPic11 },
  { src: galleryPic12 },
  { src: galleryPic13 },
];

const Gallery = () => {
  return (
    <section className='relative w-full py-28 bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden'>
      {/* Glass Background */}
      <div className='absolute inset-0 backdrop-blur-3xl bg-white/30'></div>

      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2
            className='text-4xl font-semibold text-slate-900'
            data-swiper-parallax='-200'>
            Conference & Laboratory Gallery
          </h2>
          <div className='w-20 h-1 bg-slate-300 mx-auto mt-6 rounded-full' />
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={1200}
          parallax={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='pb-14'>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='group relative overflow-hidden rounded-2xl shadow-xl bg-white/70 backdrop-blur-lg transition duration-500'>
                <img
                  src={image.src}
                  alt={image.caption}
                  className='w-full h-[300px]  transition-transform duration-700 group-hover:scale-105'
                />

                {/* Caption Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6'>
                  <p className='text-white text-lg font-medium'>
                    {image.caption}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
