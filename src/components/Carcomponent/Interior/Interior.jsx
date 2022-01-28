import React from "react";
import "./Interior.css";
import Imagesgrid from "./Imagesgrid/Imagesgrid";
import Carousel from "./Carousel/Carousel";
import { Slide } from "react-reveal";

function Interior() {
  return (
    <div className="container">
      <div className="interior">
        <div className="Text">
          <Slide bottom>
            <h1> All New Interior</h1>
          </Slide>
        </div>
        <div
          className="carinterior"
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/msinterior.jpg?alt=media&token=8876011f-2426-4ca4-b7d6-102296baf9ec")`,
          }}
        ></div>
      </div>
      <div className="slideshow">
        <Carousel />
      </div>
      <div className="gridimg">
        <Imagesgrid />
      </div>
    </div>
  );
}
export default Interior;

// {{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/msinterior.jpg"})`}}
