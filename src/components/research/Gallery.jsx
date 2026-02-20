import { useState } from "react";

import galleryPic1 from "src/assets/images/IMG-20260131-WA0018.jpg";
import galleryPic2 from "src/assets/images/IMG-20260131-WA0028.jpg";
import galleryPic3 from "src/assets/images/IMG-20260131-WA0019.jpg";
import galleryPic4 from "src/assets/images/IMG-20260131-WA0024.jpg";
import galleryPic5 from "src/assets/images/IMG-20260130-WA0048.jpg";
const images = [
  galleryPic1,
  galleryPic2,
  galleryPic3,
  galleryPic4,
  galleryPic5,
];

const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section className='bg-white py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-10'>
          Conference & Lab Gallery
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              onClick={() => setActive(src)}
              className='rounded-xl cursor-pointer opacity-95 hover:opacity-100 h-[300px] w-[400px]'
            />
          ))}
        </div>

        {active && (
          <div
            onClick={() => setActive(null)}
            className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
            <img src={active} className='max-w-3xl rounded-xl' />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
