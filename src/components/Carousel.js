import React,{useState} from 'react';
import './css/Carousel.css';
import {images} from "../Helpers/CarouselData";
function Carousel() {
    const [currImg,SetCurrImg]=useState(0);
    return (
        <div className="carousel">
            <div className="carouselInner" style={{backgroundImage:`url(${images[currImg].img})`}}>
                <div className="left">
                    <h1>dfd</h1>
                </div>
                <div classname="center">
                    <h1>hi</h1>
                </div>
                <div className="right">
                    <h1>hhhh</h1>
                </div>
                
                
            

            </div>
        </div>
    )
}

export default Carousel

