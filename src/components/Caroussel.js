import React,{useState} from 'react';
import './css/Caroussel.css';
import {images} from "../Helpers/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Caroussel() {
    const [currImg,SetCurrImg]=useState(0);
    return (
                  
    
        <div className="carousel">
            <div className="carouselInner" style={{backgroundImage:`url(${images[currImg].img})`}}>

                <div className="left"  onClick={()=>{SetCurrImg(currImg-1)}}>
                   
                    <ArrowBackIosIcon/>
                </div>
                
                        
                
                <div className="right" onClick={()=>{SetCurrImg(currImg+1)}}>
                    <ArrowForwardIosIcon/>
                </div>
                
                
            

            </div>
        </div>
            
        
    )
}

export default Caroussel
