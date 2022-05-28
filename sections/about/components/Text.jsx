import React from "react";
import styles from "./Text.module.css";
import { motion } from "framer-motion";

function Text() {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: 100 }}
      whileInView={{ x: 0 }}
      // animate={{ x: 0 }}
      transition={{ duration: 1, type: "tween", delay: 0.3 }}
      key="helggdglowelhfsdfh"
    >
      <div>
        <h6 className={styles.header}>About</h6>
        <motion.div
          initial={{ x: 30 }}
          whileInView={{ x: 0 }}
          // animate={{ x: 0 }}
          transition={{
            duration: 1,
            type: "tween",
            delay: 0.5,
          }}
          key="hellweowelhfsdfh"
          className={styles.line}
        ></motion.div>
      </div>

      <div>
        <p>
          Relationships are an important part of a healthy life. We help you to
          discover a space where you can explore your identity and connect with
          like minded people
        </p>
      </div>
    </motion.div>
  );
}

export default Text;
