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
    <section className={c.featuredSection} data-scroll-section>
      <div className={c.featuredRowLayout}>
        <div></div>

        <img src="/images/locomotive/couples2.jpg" />
        {/* </div> */}
      </div>
      <div className={c.featuredColumnLayout}>
        <div></div>
        <div className={c.imageContainer}>
          <img src="/images/locomotive/couples3.jpg" />
        </div>

        <div></div>
      </div>
    </section>
  );
}

export default Featured;
