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
    <section className={c.featuredSection} data-scroll-section>
      <motion.div
        // whileInView={{ scale: 1.2 }}
        // // animate={{ x: 0 }}
        // transition={{ duration: 1.5, type: "tween", delay: 0.2 }}
        // key="hellowddselhfsdfh"
        className={c.featuredRowLayout}
      >
        <img src="/images/locomotive/couples2.jpg" />
        {/* </div> */}
      </motion.div>
      <motion.div className={c.featuredColumnLayout}>
        <motion.div
          initial={{ x: 35 }}
          whileInView={{ x: 0 }}
          // animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "tween", delay: 0.2 }}
          key="hellowddselhfsdfkh"
          className={c.imageContainer}
        >
          <img src="/images/locomotive/couples3.jpg" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Featured;
