import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules"; // correct import for v10+

const reviews = [
  {
    name: "undefined undefined",
    course: "Learn Next.js in one month",
    review: "From to hero They Mean it <3",
    rating: 5,
  },
  {
    name: "undefined undefined",
    course: "Dot Batch MERN Stack",
    review: "The Instructor Explains Very Nicely",
    rating: 5,
  },
  {
    name: "Ramu or seeta",
    course: "Dot Batch MERN Stack",
    review: "dg",
    rating: 5,
  },
  {
    name: "patel S",
    course: "Dot Batch MERN Stack",
    review: "dg",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <div className="bg-slate-100 text-black py-16 px-6">
      <h2 className="text-center text-4xl font-bold mb-12">
        Reviews from other learners
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-200 p-6 rounded-xl border border-slate-200 shadow-lg w-[90%] mx-auto">
              
              {/* Avatar */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg font-bold uppercase">
                  {r.name.slice(0, 2)}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">{r.name}</h3>
                  <p className="text-sm text-gray-500">{r.course}</p>
                </div>
              </div>

              {/* Review */}
              <p className="mt-4 text-gray-700">{r.review}</p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-1 text-yellow-500">
                <span>5.0</span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// const testimonials = [
//   {
//     name: "Aarushi Sharma",
//     review:
//       "Amazing service! My skin feels so fresh after the facial. Highly recommended!",
//   },
//   {
//     name: "Ritika Verma",
//     review: "Loved the ambience and the staff was very professional!",
//   },
//   {
//     name: "Pooja Singh",
//     review: "Best salon experience. Will visit again for sure!",
//   },
//   {
//     name: "Sneha Gupta",
//     review: "Affordable rates and premium quality service!",
//   },
//   {
//     name: "Neha Tiwari",
//     review: "The massage was so relaxing. Perfect place for self-care.",
//   },
// ];

// export default function TestimonialSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % testimonials.length);
//     }, 2500);

//     return () => clearInterval(slider);
//   }, []);

//   return (
//     <div className="bg-slate-100 py-16">
//       <h2 className="text-center text-3xl font-bold mb-10 tracking-wide">
//         What Our Customers Say
//       </h2>

//       <div className="overflow-hidden">
//         <div
//           className="flex transition-all duration-700"
//           style={{ transform: `translateX(-${current * 100}%)` }}
//         >
//           {testimonials.map((t, i) => (
//             <div
//               key={i}
//               className="min-w-full flex justify-center px-4"
//             >
//               <div className="bg-white rounded-xl shadow-md p-8 max-w-xl w-full">
//                 <p className="text-gray-700 text-lg mb-4 italic">“{t.review}”</p>
//                 <h4 className="text-gray-900 font-semibold text-right">
//                   — {t.name}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

