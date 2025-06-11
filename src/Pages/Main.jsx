import React, { useContext, useEffect, useRef, useState } from "react";
import Home from "./Sub_Pages/Home";
import Services from "./Sub_Pages/Services";
import About from "./Sub_Pages/About";
import Contact from "./Sub_Pages/Contact";
import { ChangeScreen } from "../Context/Loader";
import Loader from "../Components/Logo_loader/Loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Main = () => {
  const { loader, isLoader } = useContext(ChangeScreen);

  const Screen_Ref = useRef(null);

  useEffect(() => {
    if (!loader && Screen_Ref.current) {
      gsap.fromTo(
        Screen_Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [loader]);
  return (
    <div className="w-full h-full bg-linear-to-tl  from-black to-blue-950">
      {loader && (
        <>
          <div className="w-full h-screen bg-linear-to-tl  from-black to-blue-950">
            <Loader />
          </div>
        </>
      )}
      {!loader && (
        <div ref={Screen_Ref}>
          <div id="home">
            <Home />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
