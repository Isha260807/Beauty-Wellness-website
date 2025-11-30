import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-50 mt-4 ">
      {/* div for footer */}
      <div className="grid grid-cols-2 md:grid-cols-4 mb-4 px-12 py-10">
        {/* first card */}
        <div>
          <h1 className="text-xl font-semibold mb-5 text-black font-serif">
            Contact Us
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            If you have any question, please contact us at
          </p>

          <a
            href="mailto:info@alluringauras.com"
            className="text-gray-600 underline text-sm mt-4 mb-4"
          >
            info@alluringauras.com
          </a>

          {/* icon */}
          <div className="flex flex-row gap-4 mt-14">
            <FaFacebookF size={22} />
            <FaTwitter size={22} />
            <FiInstagram size={22} />
            <FaLinkedin size={22} />
          </div>
        </div>
        {/* second card */}
        <div>
          <h1 className="text-xl font-semibold mb-5 text-black font-serif">
            Categories
          </h1>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="cursor-pointer hover:text-blue-600">Men</li>
            <li>Women</li>
            <li>Cosmetics</li>
            <li>Skincare</li>
            <li>Hair Care</li>
            <li>Brands</li>
            <li>Gift Sets</li>
          </ul>
        </div>

        {/* third card */}
        <div>
          <h1 className="text-xl font-semibold mb-5 text-black font-serif">
            Others
          </h1>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Brands</li>
            <li>Bulk Order</li>
            <li>Buy Now Pay Later</li>
            <li>Blogs</li>
            <li>About Us</li>
            <li>Privacy & Return Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* fourth card */}
        <div>
          <h1 className="text-xl font-semibold text-black font-serif mb-5">
            Sign Up for Our Newsletter
          </h1>
          <p className="text-sm text-gray-600">
            Leave your email to get all hot deals & news which benefit you most!
          </p>
        </div>
      </div>

      {/* copyright */}
      <div className="flex mt-10 bg-slate-100 w-full h-[100px] items-center text-sm text-gray-600 pl-20">
        <p>Copyright © 2025 Alluring Auras. All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;