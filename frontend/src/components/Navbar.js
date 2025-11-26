import { Link } from "react-router-dom";
import image from "../assets/210logo.png";

function Navbar() {
  return (
    <div className="bg-lime-100">
      <nav className="relative p-10  shadow-md bg-black text-white flex        justify-between items-center">
        {/* Overlapping Image */}
        <img
          src={image}
          alt="logo"
          className="absolute left-4 top-1/2 -translate-y-1/2 object-cover"
        />

        {/* navigation link*/}
        <div className="space-x-6 mx-auto text-lg">
          <Link to="/" className=" cursor-pointer hover:text-slate-400">
            Home
          </Link>
          <Link to="/services" className=" cursor-pointer hover:text-slate-400">
            Services
          </Link>
          <Link to="/about" className=" cursor-pointer hover:text-slate-400">
            About
          </Link>
          <Link to="/contact" className=" cursor-pointer hover:text-slate-400">
            Contact
          </Link>
          <Link to="/booking" className=" cursor-pointer hover:text-slate-400">
            Booking
          </Link>
        </div>

        {/* RIGHT: BUTTONS */}
        <div className="space-x-4">
          <Link
            to="/register"
            className="px-4 py-3 text-white bg-sky-700 text-white rounded-sm hover:bg-sky-800"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="px-4 py-3 bg-sky-700 text-white rounded-sm hover:bg-sky-800 "
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
