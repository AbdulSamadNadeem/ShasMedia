import React, { useContext, useEffect, useRef } from "react";
import gsap, { Bounce, Power1 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ChangeScreen } from "../../Context/Loader";

gsap.registerPlugin(TextPlugin);

const Loader = () => {
  const { loader, isLoader } = useContext(ChangeScreen);
  const text = useRef(null);

  useEffect(() => {
    gsap.to(text.current, {
      duration: 4,
      text: "Sha's Media",
      ease: Bounce.inOut,
      onComplete: () => {
        gsap.to(text.current, {
          duration: 1,
          ease: Power1.easeInOut,
          opacity: 0,
        });
        isLoader(false);
      },
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <h1
        ref={text}
        className="text-white font-[logo] text-xl md:text-3xl lg:text-4xl xl:text-5xl text-center"
      ></h1>
    </div>
  );
};

export default Loader;