import React from "react";
import c from "./NewSection2.module.css";
import Image from "next/image";

import { motion } from "framer-motion";

const NewSection2 = () => {
  return (
    <div className={c.container}>
      <div className={c.left}>
        <motion.div
          className={c.image}
          key="hdskjghsaiughjsdkgh"
          initial={{ x: -100 }}
          whileInView={{ x: 0, rotate: "10deg" }}
          // animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          <Image layout="fill" src="/images/mobile.png" alt="mobile" />
        </motion.div>
      </div>
      <div className={c.right}>
        <motion.p
          key="hdskjghsaighgskjghfsgughjsdkgh"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          // animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          It’s hard to form an accurate first impression of a potential date
          just by looking at their photo. So much of our first impression of
          people is in how they speak and how they engage in an interaction. Let
          Nectar introduce you to real people through videos.
        </motion.p>
        <motion.p
          className={c.tip}
          key="hdskjghsaigfsgughjsdkgh"
          initial={{ x: 100 }}
          whileInView={{ x: 0, rotate: "10deg" }}
          // animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.3 }}
        >
          Dont rely on
          <br />
          swiping patterns
        </motion.p>
      </div>
    </div>
  );
};

export default NewSection2;
