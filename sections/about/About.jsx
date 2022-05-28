import React from "react";
import { motion } from "framer-motion";
import Mockup from "./components/Mockup";
import Text from "./components/Text";
import styles from "./About.module.css";

function About() {
  return (
    <motion.div
      key="fhsakffdghsdkghdkfh"
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, type: "tween" }}
      className={styles.container}
    >
      <Mockup />
      <Text />
    </motion.div>
  );
}

export default About;
