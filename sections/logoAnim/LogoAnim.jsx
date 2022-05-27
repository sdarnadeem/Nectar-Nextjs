import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import c from "./LogoAnim.module.css";

const LogoAnim = () => {
  return (
    <motion.div className={c.container}>
      <motion.div
        animate={{ x: 0, rotate: 360 }}
        initial={{ x: -50 }}
        transition={{ duration: 1.5 }}
        transitionEnd={{ y: "-1500" }}
        className={c.logo}
      >
        <Image layout="fill" src="/images/locomotive/logo.png" alt="" />
      </motion.div>
      <motion.div>
        <h2 className={c.heading}>Find Your First Date Now</h2>
      </motion.div>
    </motion.div>
  );
};

export default LogoAnim;
