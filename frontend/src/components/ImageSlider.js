import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageSlider() {
  const images = [
    require("../assets/Banner1.jpg"),
    require("../assets/Banner2.jpg"),
    require("../assets/Banner5.jpg"),
    require("../assets/perfum2.jpg"),
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slide);
  }, [images.length]);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {/* SLIDER IMAGE */}
      <img
        src={images[index]}
        alt="slide"
        className="absolute w-full h-[500px] object-cover transition-all duration-700"
      />

      {/* VERY LIGHT GRADIENT (NO DARKNESS) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>

     

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-10 hover:bg-black/60"
      >
        <FaChevronLeft size={28} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full z-10 hover:bg-black/60"
      >
        <FaChevronRight size={28} />
      </button>
    </div>
  );
}

export default ImageSlider;
