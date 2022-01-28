import React from "react";
import "./Interior.css";
import Imagesgrid from "./Imagesgrid/Imagesgrid";
import Carousel from "./Carousel/Carousel";

function Interior() {
  return (
    <div className="container">
      <div className="interior">
        <div className="Text">
          <h1> All New Interior</h1>
        </div>
        <div
          className="carinterior"
          style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/msinterior.jpg"})`}}></div>
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
