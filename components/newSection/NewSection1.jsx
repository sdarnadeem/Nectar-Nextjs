import React from "react";
import c from "./NewSection1.module.css";

import Image from "next/image";

import { motion } from "framer-motion";

const NewSection1 = () => {
  return (
    <div className={c.container}>
      <div className={c.leftSide}>
        <motion.h2
          key="hdskjghsaighdjkghjgjggfghgskjghfsgughjsdkgh"
          initial={{ y: -70 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "tween", delay: 0.3 }}
        >
          More than just <span>swiping a photo...</span>
        </motion.h2>
        <div className={c.bottomText}>
          <motion.button
            key="hdskjghsaijgjggfghgskjghfsgughjsdkgh"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "tween", delay: 0.3 }}
          >
            Set me up
          </motion.button>
          {/* <p>
            No catfish
            <br />
            No filters
          </p> */}
        </div>
      </div>
      <div className={c.rightSide}>
        {/* <motion.div
          className={c.image}
          key="hdskjghsaijgjjdkgkggfghgskjghfsgughjsdkgh"
          whileInView={{ rotate: "10deg" }}
          transition={{ duration: 1, type: "tween", delay: 0.3 }}
        >
          <Image layout="fill" src="/images/mobile.png" alt="mobile" />
          <div className={c.images}>
            <div className={c.singleImage}>
              <Image layout="fill" src="/images/woman1.jpg" alt="woman1" />
            </div>
            <Image layout="fill" src="/images/woman2.jpg" alt="woman1" />
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default NewSection1;
