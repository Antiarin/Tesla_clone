import React, { useState } from 'react';
import '../css/Caroussel.css';
import { images } from "../../Helpers/CarouselData"; // means two level up meaning src/components/ModelSX-->> src/
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Caroussel() {
const [currImg, setCurrImg] = useState(0);
console.log(images.length);

const nextSlide = () => {
    if(currImg!== images.length){
        setCurrImg(currImg + 1)
    } 
    else if (currImg === images.length){
        setCurrImg(1)
    }
}

const prevSlide = () => {
    if(currImg !== 1){
        setCurrImg(currImg - 1)
    }
    else if (currImg === 1){
        setCurrImg(images.length)
    }
}

return (

    <div className="carousel">


        <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>

            <div className="left" onClick={() => prevSlide}>


                
                <ArrowBackIosIcon />
            </div>



            <div className="right" onClick={() => nextSlide }>
                <ArrowForwardIosIcon />
            </div>


         
          

        </div>
    </div>


)
}

export default Caroussel
