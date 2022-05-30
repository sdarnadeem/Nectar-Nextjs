import React from "react";
import c from "./NewSection1.module.css";

import Image from "next/image";

const NewSection1 = () => {
  return (
    <div className={c.container}>
      <div className={c.leftSide}>
        <h2>
          More than just <span>swiping a photo...</span>
        </h2>
        <div className={c.bottomText}>
          <button>Set me up</button>
          <p>
            No catfish
            <br />
            No filters
          </p>
        </div>
      </div>
      <div className={c.rightSide}>
        <div className={c.image}>
          <Image layout="fill" src="/images/mobile.png" alt="mobile" />
          {/* <div className={c.images}>
            <div className={c.singleImage}>
              <Image layout="fill" src="/images/woman1.jpg" alt="woman1" />
            </div>
            <Image layout="fill" src="/images/woman2.jpg" alt="woman1" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewSection1;
