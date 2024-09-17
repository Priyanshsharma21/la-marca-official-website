import React from "react";
import { logo } from "../assets";
import { motion, useTransform, useScroll } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      whileInView={{
        y: [-100, -50, 0],
        opacity: [0, 0, 1],
      }}
      transition={{ duration: 1.5 }}
      className="w-full flex justify-center fixed top-5"
    >
      <img alt="logo" src={logo} className="logo" />
    </motion.div>
  );
};

export default Navbar;
