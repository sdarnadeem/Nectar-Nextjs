import React from "react";
import Caresual from "./Caresual";
import styles from "./Mockup.module.css";

function Mockup() {
  const images = [
    { imageurl: "./images/datingNew/sliding.jpg" },
    { imageurl: "./images/datingNew/sliding2.png" },
    { imageurl: "./images/datingNew/sliding3.png" },
    { imageurl: "./images/datingNew/sliding4.png" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mockup}>
        <div
          className="d-flex justify-content-between mt-2  w-100 px-4"
          style={{ height: "35px" }}
        >
          <p style={{ fontSize: "5px" }}>9:18</p>
          <div className="d-flex gap-2">
            <img src="/images/datingNew/signal.png" />
            <img src="/images/datingNew/wifi.png" />
            <img src="/images/datingNew/battery.png" />
          </div>
        </div>
        <div
          className={styles.sliding}
          style={{
            flex: "1",
            backgroundColor: "	#E0E0E0",
            width: "100%",
          }}
        >
          <Caresual images={images} />
        </div>
        <div
          style={{ height: "60px", backgroundColor: "" }}
          className="d-flex justify-content-center align-items-center "
        >
          <div
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "	#E0E0E0",
              borderRadius: "50%",
              border: "1px solid grey",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Mockup;
