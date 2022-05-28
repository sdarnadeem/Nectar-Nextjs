import React from "react";
import styles from "./Caresual.module.css";
import { Carousel } from "react-bootstrap";

const Caresual = ({ images }) => {
  return (
    <Carousel controls={false}>
      {images.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            src={item.imageurl}
            alt="First slide"
            style={{ height: "465px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Caresual;
