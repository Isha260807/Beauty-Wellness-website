import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-slate-50 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-center mb-2 md:mb-0 font-semibold text-xl md:text-4xl text-gray-600 md:text-left">
          Contact Us
        </h1>

        <h1 className="text-3xl md:text-4xl mt-12 font-semibold tracking-wide">
          KEEP IN TOUCH WITH US
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Stay connected with us for the latest updates and exclusive offers.
          Follow us on social media or sign up for our newsletter.
        </p>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-4 mb-8">
        {/* Office */}
        <div className="space-y-4">
          <div className="mx-auto w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-200 text-4xl">📍</span>
          </div>

          <h2 className="text-xl font-semibold tracking-wide">Office</h2>

          <p className="text-gray-600 leading-relaxed">
            16th Floor, Empire Heights, Tower A, Business Bay,
            <br />
            Dubai, UAE
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <div className="mx-auto w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-500 text-4xl">📞</span>
          </div>

          <h2 className="text-xl font-semibold tracking-wide">Contact</h2>

          <p className="text-gray-600 leading-relaxed">
            <strong>Mobile:</strong> +971507780394
            <br />
            <strong>Phone:</strong> +97142959047
            <br />
            <strong>E-mail:</strong> info@alluringauras.com
          </p>
        </div>

        {/* Hours */}
        <div className="space-y-4 mb-4">
          <div className="mx-auto w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-500 text-4xl">⏰</span>
          </div>

          <h2 className="text-xl font-semibold tracking-wide">Open Hours</h2>

          <p className="text-gray-600 leading-relaxed">
            Monday-Saturday: 9:00 am - 6:00pm <br />
            Sunday: Close
          </p>
        </div>
      </div>

      {/* MAP */}
      <div className="w-full h-[500px] rounded-xl overflow-hidden px-5 py-10">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.XXXXXX!2d55.XXXXX!3d25.0XXXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4347XXXXX%3A0xXXXXXXXX!2sEmpire%20Heights%20Tower%20B%2C%20Business%20Bay%2C%20Dubai!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Divider / White Line + GAP */}
      <div className="w-full mt-12 border-t border-gray-300"></div>

      {/* FORM SECTION */}
      <div className="mt-16 max-w-3xl mx-auto  p-10 rounded-xl shadow-sm">
        <h2 className="text-4xl font-semibold text-center text-black tracking-wide">
          DROP US A LINE
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Complete the form below, and our team will promptly reach out to you.
        </p>

        {/* FORM */}
        <form className="mt-10 w-full space-y-5">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 
                      text-gray-700 text-lg"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      text-gray-700 text-lg"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      text-gray-700 text-lg"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      text-gray-700 text-lg"
          ></textarea>

          {/* Button */}
          <div className="flex justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                        text-lg px-5 py-2 rounded-lg transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
