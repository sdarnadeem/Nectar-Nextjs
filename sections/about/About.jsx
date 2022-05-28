import React from "react";
import { motion } from "framer-motion";
import Mockup from "./components/Mockup";
import Text from "./components/Text";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <Mockup />
      <Text />
    </div>
  );
}

export default About;
