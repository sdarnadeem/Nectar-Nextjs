import LogoAnim from "../sections/logoAnim/LogoAnim";
import NavBar from "../sections/navBar/NavBar";
import { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import About from "../sections/about/About";
import AppFeatures from "../sections/AppFeatures/AppFeatures";

import Featured from "../sections/featured/Featured";
import NewSection from "../sections/newSection/NewSection";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);

      scroller.scrollTo("myScrollToElement", {
        duration: 1500,
        delay: 100,
        smooth: true,
        containerId: "ContainerElementID",
        offset: 50, // Scrolls to element + 50 pixels down the page
      });
    }, 3000);
  });

  function hanldeViewChange(inView, entry) {
    console.log(inView);
    if (inView) {
      setOpen(true);
    }
  }
  return (
    <>
      {loading && <LogoAnim />}

      {!loading && (
        <>
          {/* <Element name={"navbar"}>
            <NavBar />
          </Element> */}
          <NewSection />
          {/* <Element name="featured">
            <Featured />
          </Element> */}
          {/* <Element name="about">
            <About />
          </Element> */}
          {/* <Element name="about">
            <AppFeatures />
          </Element> */}
        </>
      )}
    </>
  );
}
