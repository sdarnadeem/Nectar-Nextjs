import React, { useRef } from "react";
import c from "./Featured.module.css";

import { useEffect } from "react";
import AOS from "aos";

function Featured(props) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className={c["featured-section"]} data-scroll-section>
      <div className={c["featured-row-layout"]}>
        <div></div>

        <img src="/images/locomotive/couples2.jpg" />
        {/* </div> */}
      </div>
      <div className={c["featured-column-layout"]}>
        <div></div>

        <img src="/images/locomotive/couples3.jpg" />
      </div>
    </section>
  );
}

export default Featured;
