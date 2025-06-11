import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heading = useRef(null);
  const name = useRef(null);
  const details = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    timeline.from(heading.current, { opacity: 0, duration: 0.7 });
    timeline.from(name.current, { opacity: 0, duration: 0.7 });
    timeline.from(details.current, { opacity: 0, duration: 0.7 });
  });

  return (
    <div className="min-h-screen px-4 py-10 md:px-10 lg:px-20">
      <div className="text-center space-y-4">
        <h1
          ref={heading}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-bold font-sans"
        >
          About Us
        </h1>
        <h2
          ref={name}
          className="text-lg sm:text-xl md:text-2xl text-white font-light font-sans underline"
        >
          Welcome To Sha's Media
        </h2>
      </div>

      <div className="mt-10 max-w-5xl mx-auto">
        <p
          ref={details}
          className="text-white text-sm sm:text-base md:text-lg font-light text-justify leading-relaxed"
        >
          At Sha's Media, we believe every business deserves to excel in today’s
          digital landscape. That’s why we specialize in delivering tailored
          solutions that unlock the full potential of technology and design.
          With a team of skilled developers, designers, and strategists, we
          provide a broad spectrum of services, including backend development,
          cloud infrastructure management, UI/UX design, branding, product
          photography, and full-stack web and mobile app development.
          <br />
          <br />
          Whatever your business objectives, we craft solutions perfectly
          aligned with your goals. Our mission is clear: to empower businesses
          to thrive by combining innovative technology with creative strategy.
          We focus on understanding your audience deeply and leveraging
          cutting-edge tools to drive measurable success.
          <br />
          <br />
          At Sha's Media, we pride ourselves on delivering exceptional quality
          and maintaining strong partnerships. We collaborate closely with you
          throughout the process, ensuring every solution is customized to meet
          your unique challenges and ambitions.
          <br />
          <br />
          Our passionate team stays ahead of industry trends, continuously
          exploring new methods to keep your business competitive and
          future-ready. Ready to elevate your digital presence? Contact us today
          to discover how we can help you achieve remarkable growth.
        </p>
      </div>
    </div>
  );
};

export default About;
