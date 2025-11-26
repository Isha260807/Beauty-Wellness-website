import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageSlider() {
  const images = [
    require("../assets/makeUp.avif"),
    require("../assets/perfum.jpg"),
    require("../assets/perfum2.jpg"),
    require("../assets/photo-1594035910387-fea47794261f.avif"),
    require("../assets/photo-1619607146034-5a05296c8f9a.avif"),
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* IMAGE AS BACKGROUND */}
      <img
        src={images[index].default || images[index]}
        alt="slide"
        className="absolute w-full h-[500px] object-cover"
      />

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
      >
        <FaChevronLeft size={28} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10"
      >
        <FaChevronRight size={28} />
      </button>

      {/* OPTIONAL: overlay to darken the background */}
      <div className="absolute w-full h-full bg-black/20"></div>
    </div>
  );
}

export default ImageSlider;
