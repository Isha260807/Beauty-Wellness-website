import React from "react";
import aboutImage from "../assets/photo-1594035910387-fea47794261f.avif";
import Image from "../assets/photo-1619607146034-5a05296c8f9a.avif";

function About() {
  return (
    <div className="w-full  min-h-screen bg-lime-100 flex flex-col items-center px-6 py-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6 text-center">
        About Alluring Auras
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl text-center mb-10">
        Where Beauty Meets Elegance
      </p>

      {/* Image and Content */}
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2  ">
          <img
            src={aboutImage}
            alt="Alluring Auras"
            className="rounded-xl shadow-lg object-cover w-full h-30"
          />
          <img src={Image} alt="" className="object-cover w-50 h-50" />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-gray-800 space-y-6 text-center md:text-left">
          <p>
            At <strong>Alluring Auras</strong>, we believe that beauty is more
            than skin deep—it’s an experience, an aura that radiates confidence,
            charm, and individuality. Founded with a passion for empowering
            every individual to feel their best, Alluring Auras combines luxury,
            innovation, and personalized care to deliver an unforgettable beauty
            experience.
          </p>

          <p>
            Our team of expert beauticians and wellness professionals are
            dedicated to creating bespoke treatments that enhance your natural
            glow. From rejuvenating skincare rituals and indulgent spa therapies
            to precision makeup artistry, every service is crafted with
            meticulous attention to detail.
          </p>

          <p>
            We pride ourselves on using high-quality products and the latest
            techniques to ensure that your journey with Alluring Auras is
            nothing short of magical. Whether you are seeking a moment of
            self-care, a transformation for a special occasion, or expert advice
            to elevate your everyday beauty routine, Alluring Auras is your
            sanctuary for elegance and refinement.
          </p>

          {/* Promise Section */}
          <div className="bg-pink-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">
              Our Promise:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Personalized treatments tailored to your unique beauty.</li>
              <li>A serene, luxurious environment where you can unwind.</li>
              <li>A commitment to quality, safety, and excellence.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
