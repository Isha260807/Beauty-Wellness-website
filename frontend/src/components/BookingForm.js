import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/slices/bookingSlice";
import bgImg from "../assets/image.png";

import { toast } from "react-toastify";

function Booking() {
  const dispatch = useDispatch();
  

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBooking(form));

    //alert("Booking Saved Successfully!");
    toast.success("Appointment confirmed!");

    // reset form
    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-4  py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark / blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Booking form container */}
      <div className="relative z-10 bg-white/30 backdrop-blur-md rounded-xl shadow-xl w-full max-w-xl p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 text-center mb-6">
          Book Your Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service */}
          <div>
            <label className="block font-semibold mb-1">Select Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="">Choose a service</option>
              <option value="Facial">Facial</option>
              <option value="Hair Spa">Hair Spa</option>
              <option value="Makeup">Makeup</option>
              <option value="Skincare">Skincare</option>
              <option value="Nail Art">Nail Art</option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Select Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Select Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-lg bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full p-2 border rounded-lg bg-pink-50/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-center flex-row gap-4">
            <button
              type="submit"
              className=" bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
            >
              Confirm Booking
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;