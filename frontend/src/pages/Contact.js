import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-[#c6b298] grid grid-cols-2 py-16 px-6">
      {/* Heading - contact div*/}
      <div>
        <h1 className="text-7xl font-medium font-serif text-[#4a3b2a] mb-18">
          Contact Us
        </h1>
      </div>

      {/* Contact Form Section - form div*/}
      <div className="w-full max-w-4xl bg-transparent">
        {/* Name */}
        <label className="block text-lg font-medium text-[#4a3b2a] mb-2">
          Name <span className="text-sm">(required)</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div>
            <label className="block text-sm text-[#4a3b2a] mb-1">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-[#4a3b2a] focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-[#4a3b2a] mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-full bg-transparent border border-[#4a3b2a] focus:outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <label className="block text-lg font-medium text-[#4a3b2a] mb-2">
          Email <span className="text-sm">(required)</span>
        </label>

        <input
          type="email"
          className="w-full px-4 py-3 mb-8 rounded-full bg-transparent border border-[#4a3b2a] focus:outline-none"
        />

        {/* Message */}
        <label className="block text-lg font-medium text-[#4a3b2a] mb-2">
          Message <span className="text-sm">(required)</span>
        </label>

        <textarea
          rows="5"
          className="w-full px-4 py-4 rounded-2xl bg-transparent border border-[#4a3b2a] focus:outline-none"
        ></textarea>

        {/* Send Button */}
        <div className="mt-8">
          <button className="px-10 py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
