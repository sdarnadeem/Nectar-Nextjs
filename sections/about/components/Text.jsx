import React from "react";
import styles from "./Text.module.css";

function Text() {
  return (
    <div className={styles.container}>
      <div>
        <h6 className={styles.header}>About</h6>
      </div>

      <div>
        <p>
          Relationships are an important part of a healthy life. We help you to
          discover a space where you can explore your identity and connect with
          like minded people
        </p>
      </div>
    </div>
  );
}

export default Text;
