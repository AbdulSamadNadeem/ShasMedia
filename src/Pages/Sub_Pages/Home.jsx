import React, { useState, useRef } from "react";
import Home_Text from "../../Components/Home_Text/Home_Text";
import Home_Lottie from "../../Components/Home_Lottie/Home_Lottie";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navs = useRef(null);

  useGSAP(() => {
    gsap.from(navs.current, {
      y: -100,
      duration: 1,
    });
  });

  return (
    <>
      <div className="h-screen flex flex-col">

        <div className="flex justify-between items-center px-6 py-6">
          <h1 className="text-2xl font-[logo] font-light text-white">
            Sha's Media
          </h1>

        
          <button
            className="text-white md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {isNavOpen && (
            <div
              className="fixed"
              onClick={() => setIsNavOpen(false)}
            ></div>
          )}

          <ul
            className={`fixed top-0 right-0 h-full w-64  text-white font-light p-6 transform transition-transform duration-300 ease-in-out z-50
            ${isNavOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <li className="mb-4">
              <a href="#home">Home</a>
            </li>
            <li className="mb-4">
              <a href="#services">Services</a>
            </li>
            <li className="mb-4">
              <a href="#about">About</a>
            </li>
            <li className="mb-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around mt-10 md:mt-32 px-4">
          <div className="w-full md:w-1/2">
            <Home_Text />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Home_Lottie />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;