import React from 'react';
import Caroussel from './Caroussel';
import './css/CarInterior.css';
import Imagesgrid from './Imagesgrid';




function CarInterior() {
    return (
        <div className="container">
            <div className="interior">
                <div className="Text">
                <h1> All New Interior</h1>
                </div>
                <div className="carinterior" 
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/msinterior.jpg'})` }}>
                    

                </div>
            </div>
            <div className="slideshow">
                <Caroussel />
            </div>
            <div className="gridimg">
                <Imagesgrid />

            </div>
            

        </div >

    )
}
export default CarInterior