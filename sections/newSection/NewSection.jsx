import React from "react";
import NewSection1 from "../../components/newSection/NewSection1";
import NewSection2 from "../../components/newSection/NewSection2";
import c from "./NewSection.module.css";

const NewSection = () => {
  return (
    <section className={c.newSection}>
      <NewSection1 />
      <NewSection2 />
    </section>
  );
};

export default NewSection;
