import React from "react";
import c from "./NewSection2.module.css";
import Image from "next/image";

const NewSection2 = () => {
  return (
    <div className={c.container}>
      <div className={c.left}>
        <div className={c.image}>
          <Image layout="fill" src="/images/mobile.png" alt="mobile" />
        </div>
      </div>
      <div className={c.right}>
        <p>
          It’s hard to form an accurate first impression of a potential date
          just by looking at their photo. So much of our first impression of
          people is in how they speak and how they engage in an interaction. Let
          Nectar introduce you to real people through videos.
        </p>
        <p className={c.tip}>
          Dont rely on
          <br />
          swiping patterns
        </p>
      </div>
    </div>
  );
};

export default NewSection2;
