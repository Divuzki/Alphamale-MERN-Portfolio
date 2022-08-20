import React from "react";
import { motion } from "framer-motion";

const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

const products = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 0.7,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};
const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 0.7,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
export const InitialTransition = ({ setFirstMount }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-body"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() => {
          document.body.classList.remove("overflow-hidden");
          setFirstMount(true);
        }}
      >
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
            className="text-4xl font-bold"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            datalphamale
          </text>
        </motion.svg>
      </motion.div>
    </div>
  );
};

const Animate = ({ children, indexPage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
