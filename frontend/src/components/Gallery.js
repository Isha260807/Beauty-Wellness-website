import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Your images
import img1 from "../assets/Banner1.jpg";
import img2 from "../assets/Banner2.jpg";
import img3 from "../assets/perfum2.jpg";
import img4 from "../assets/makeUp.avif";
import img5 from "../assets/Banner5.jpg";

const images = [img1, img2, img3, img4, img5];

export default function GallerySlider() {
  return (
    <div className="py-16 px-6">
      <h2 className="text-center text-4xl font-bold mb-8">Gallery</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg w-full h-64 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
