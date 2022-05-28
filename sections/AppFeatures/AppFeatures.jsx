import React from "react";
import styles from "./AppFeatures.module.css";
import Lottie from "react-lottie";
import chat from "./json/chat.json";
import icebreaker from "./json/icebreaker.json";
import profile from "./json/profile.json";
import videocall from "./json/videocall.json";

function AppFeatures() {
  const defaultOptions = [
    {
      loop: true,
      autoplay: true,
      animationData: profile,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: chat,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: icebreaker,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
    {
      loop: true,
      autoplay: true,
      animationData: videocall,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  ];
  return (
    <div className={`pt-5 row ${styles.pading}`}>
      <div className="col-md-4 offset-md-1 col-xs-12">
        <div className="row ">
          <div className="col-12  col-sm-4  d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/harth.png"
              className={styles.image}
              alt=""
            /> */}
            <div className={`w-30 h-30 ${styles.lottie}`}>
              <Lottie
                options={defaultOptions[0]}
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
            </div>
          </div>
          <div className={`col-12 col-sm-8  ${styles.para}`}>
            <h3> User Profiles</h3>
            <div></div>
            <p style={{ textAlign: "justify" }}>
              We help you to make your own profiles more interesting and
              creative in a way that helps your individual personalities shine
              through.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-2 col-xs-12">
        <div className="row ">
          <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/privacy.png"
              className={styles.image}
              alt=""
            /> */}
            <div className={`w-30 h-30  ${styles.lottie2} ${styles.lottie}`}>
              <Lottie
                options={defaultOptions[1]}
                style={{
                  marginBottom: "15px",
                  marginLeft: "2px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className={`col-12 col-sm-8 ${styles.para}`}>
            <h3>Chat and Messaging</h3>
            <div></div>
            <p style={{ textAlign: "justify" }}>
              With full-featured chat it will help to build better connections
              between you and your connection, increasing the chance of
              relationships in real life.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-1 col-xs-12">
        <div className="row">
          <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/email.png"
              className={styles.image}
              alt=""
            /> */}
            <div className={`w-30 h-30 ${styles.lottie}`}>
              <Lottie
                options={defaultOptions[2]}
                style={{
                  width: "65%",
                  height: "65%",
                }}
              />
            </div>
          </div>
          <div className={`col-12 col-sm-8 ${styles.para}`}>
            <h3>Ice breakers</h3>
            <div></div>
            <p style={{ textAlign: "justify" }}>
              Icebreaker allows you to discover the similarities with your
              match. You’ll have some easy conversation starters to break the
              ice.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 offset-md-2 col-xs-12">
        <div className="row">
          <div className="col-12  col-sm-4 d-flex align-items-center justify-content-center">
            {/* <img
              src="/images/datingNew/report.png"
              className={styles.image}
              alt=""
            /> */}
            <div className={`w-30 h-30 ${styles.lottie}`}>
              <Lottie
                options={defaultOptions[3]}
                style={{
                  width: "65%",
                  height: "65%",
                }}
              />
            </div>
          </div>
          <div className={`col-12 col-sm-8 ${styles.para}`}>
            <h3>Voice and Video Calling</h3>
            <div></div>
            <p style={{ textAlign: "justify" }}>
              Voice and video calling features, with filters, allows users to
              move beyond text chat into something more personal and intimate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
