import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;

    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "restart none none none", // 🔁 Restart animation every time
        },
      }
    );
  }, []);

  return (
    <footer className="bg-[#2e2d2c] text-white py-10 px-5 text-center bottom-0 z-10">
      <div ref={contentRef}>
        <h3 className="text-gray-400 italic font-semibold text-lg mb-2">
          Contact Us
        </h3>
        <p>Email: info@mysite.com</p>
        <p>Tel: 123–456–7890</p>
        <p className="font-bold">
          500 Terry Francine St. San Francisco, CA 94158
        </p>

        <div className="flex justify-center gap-5 text-xl my-4">
          <span>📘</span>
          <span>📌</span>
          <span>🐦</span>
          <span>📷</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
