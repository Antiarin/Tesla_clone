import React, { useState } from 'react';
import './Carousel.css';
import { IMAGES } from "../../../../Helpers/CarouselData"; // means two level up meaning src/components/ModelSX-->> src/
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Carousel() {
const [currImg, setCurrImg] = useState(0);
var x=IMAGES.length;

const nextSlide = () => {
    if(currImg === 3){
        setCurrImg(0);
    }
    setCurrImg(prevImg=>prevImg+1);
}

const prevSlide = () => {
    if(currImg === 0){
        setCurrImg(x)
    }
    setCurrImg(prevImg=>prevImg-1);    
}

return (
    <div className="carousel">
        <div className="carouselInner" style={{ backgroundImage: `url(${IMAGES[currImg].img})` }}>
            <div className="left" onClick={ prevSlide}>               
                <ArrowBackIosIcon />
            </div>
            <div className="right" onClick={ nextSlide }>
                <ArrowForwardIosIcon />
            </div>
        </div>
    </div>
    )
}

export default Carousel;
