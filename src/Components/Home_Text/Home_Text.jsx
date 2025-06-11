import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home_Text = () => {
  const heading = useRef(null);
  const text = useRef(null);
  const timeline = gsap.timeline();

  useGSAP(() => {
    timeline.from(heading.current, {
      x: -500,
      duration: 1,
    });
    timeline.from(text.current, {
      x: -500,
      duration: 1,
    });
  });

  return (
    <>
      <div className="max-w-screen-md mx-auto flex items-center px-4">
        <div>
          <h1
            ref={heading}
            className="text-3xl md:text-4xl font-bold text-white leading-tight text-left"
          >
            UNLOCK THE POWER OF DIGITAL MARKETING
          </h1>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto mt-4 flex items-center px-4">
        <div>
          <p
            ref={text}
            className="text-lg md:text-xl font-light text-white text-left"
          >
            Ready to take your business to the next level? Our digital marketing
            services can help. From boosting your search engine visibility to
            creating compelling social media campaigns, we have the tools and
            expertise to help you grow your online presence and connect with
            more customers than ever before.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home_Text;
