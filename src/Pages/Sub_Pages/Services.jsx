import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heading = useRef(null);
  const text = useRef(null);
  const servicesRefs = useRef([]);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    timeline.from(heading.current, {
      opacity: 0,
      x: -200,
      duration: 0.7,
    });

    servicesRefs.current.forEach((ref) => {
      timeline.from(ref, {
        opacity: 0,
        y: -100,
        duration: 0.5,
      });
    });

    timeline.from(text.current, {
      opacity: 0,
      x: -200,
      duration: 0.7,
    });
  }, []);

  const setServiceRef = (el, index) => {
    servicesRefs.current[index] = el;
  };

  const servicesData = [
    {
      title: "Social Media Marketing",
      description:
        "Effortlessly grow your social media presence with our expert social media management services",
    },
    {
      title: "Digital Marketing",
      description:
        "Sales-boosting digital strategies for online stores. From targeted Facebook ads to Google Shopping campaigns—we optimize every touchpoint to drive traffic and conversions",
    },
    {
      title: "Branding",
      description:
        "Build a memorable brand with strong identity, strategy, and design.",
    },
    {
      title: "Graphic Desigining",
      description:
        "Conversion-focused designs for ads, banners, and campaigns. Bold visuals crafted to capture attention and drive action across all media channels.",
    },
    {
      title: "BackOps",
      description:
        "End-to-end backend, DevOps, and automation services — all in one stack.",
    },
    {
      title: "UI/UX",
      description:
        "Clean, user-focused interfaces that drive engagement and conversion.",
    },
    {
      title: "Web/App Development",
      description:
        "Full-stack web and app development, built for speed and scale.",
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-8 md:px-16 py-12 ">
      <div>
        <h1
          ref={heading}
          className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-12"
        >
          OUR SERVICES
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {servicesData.map((service, index) => (
          <div
            key={index}
            ref={(el) => setServiceRef(el, index)}
            className="max-w-xs sm:max-w-sm md:max-w-md text-white"
          >
            <div className="flex gap-3 items-center mb-2">
              <GiHamburgerMenu className="text-2xl sm:text-3xl text-blue-600" />
              <h2 className="text-lg sm:text-xl font-light">{service.title}</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p
          ref={text}
          className="text-white font-light text-sm sm:text-base text-center max-w-5xl mx-auto leading-relaxed px-4"
        >
          We deliver comprehensive solutions spanning backend development, cloud
          infrastructure, and modern web & mobile applications. Our expert UI/UX
          design crafts intuitive experiences that captivate and engage users.
          From strategic branding to professional product photography, we
          elevate your brand’s presence with creativity and precision.
          Leveraging cutting-edge technologies like Kubernetes, Docker, Node.js,
          Django, and leading databases, we build scalable, reliable, and
          future-ready systems. Partner with us to transform your ideas into
          impactful digital realities with seamless design, development, and
          deployment.
        </p>
      </div>
    </div>
  );
};

export default Services;
