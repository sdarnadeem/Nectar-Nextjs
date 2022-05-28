import React, { useRef } from "react";
import c from "./Featured.module.css";

import { motion } from "framer-motion";

import { useEffect } from "react";
import AOS from "aos";

function Featured(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <motion.section
      key="fhsakdghsdkghdkfh"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: "tween" }}
      className={c.featuredSection}
      data-scroll-section
    >
      <motion.div
        whileInView={{ scale: 1.2 }}
        // animate={{ x: 0 }}
        transition={{ duration: 1.5, type: "tween", delay: 0.2 }}
        key="hellowddselhfsdfh"
        className={c.featuredRowLayout}
      >
        <img src="/images/locomotive/couples2.jpg" />
        {/* </div> */}
      </motion.div>
      <motion.div className={c.featuredColumnLayout}>
        <motion.div>
          <img src="/images/locomotive/couples3.jpg" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Featured;
