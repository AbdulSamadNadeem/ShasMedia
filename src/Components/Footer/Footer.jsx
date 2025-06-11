import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-white py-6 mt-10 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      
        <h2 className="text-lg sm:text-xl font-[logo] font-light">
          Sha's Media
        </h2>

     
        <ul className="flex flex-wrap justify-center gap-4 text-sm sm:gap-6">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li
            className="hover:underline cursor-pointer"
            onClick={() =>
              navigator.clipboard.writeText("samadnadeem372@gmail.com")
            }
          >
            Contact
          </li>
        </ul>


        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/share/15gF2cZYxk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com/shasmedia.official?igsh=MWJ2Ym9reDZmemFoZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/sha-s-media/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>

    
      <div className="border-t border-gray-700 mt-4 pt-4 text-center text-xs text-gray-400 px-4">
        © {new Date().getFullYear()} Sha's Media. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
