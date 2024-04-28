import React from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ content }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-64 w-64 m-5 rounded-xl bg-gradient-to-br bg-[#484747] text-white"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#646060] overflow-hidden shadow-lg"
      >
        {content.url && (
          <img
            src={content.url} // Corrected to use an img tag for the URL
            style={{
              transform: "translateZ(75px)",
            }}
            className="mx-auto text-4xl"
            alt="icon"
          />
        )}
        {content.text && (
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold"
          >
            {content.text}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Example = () => {
  const cards = [
    { url: 'https://plus.unsplash.com/premium_photo-1661454484080-6cbb6e962b85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: "Organic" },
    { url: 'https://plus.unsplash.com/premium_photo-1681488048176-1cd684f6be8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsZWQlMjBwbmd8ZW58MHx8MHx8fDA%3D', text: "Recycled" },
    { url: 'https://images.unsplash.com/photo-1648582268945-4206c1490ed7?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: "BioDegradable" },
    { url: 'https://images.unsplash.com/photo-1694537709808-869cfbd006af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFVwY3ljbGVkJTIwcG5nfGVufDB8fDB8fHww', text: "Upcycled" },
    { url: 'https://plus.unsplash.com/premium_photo-1681488048176-1cd684f6be8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WmVybyUyMFdhc3RlJTIwcG5nfGVufDB8fDB8fHww', text: "Zero-Waste" },
    { url: 'https://images.unsplash.com/photo-1628498092395-9949f40ce20d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmV1c2FibGUlMjBwbmd8ZW58MHx8MHx8fDA%3D', text: "Reusable" },
  ];

  return (
    <div className="flex mt-80">
      {cards.map((card, index) => (
        <TiltCard 
        key={index} content={card} 
        
        />
      ))}
    </div>
  );
};

export default Example;
