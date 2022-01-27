import React from 'react'
import '../css/Imagesgrid.css';

function Imagesgrid() {
    return (
        <div className="grids">
            <div className="grid1">
                <div className="Image1" >

                    <img src="images/game.jpg"/>
                
                
                </div>

                
                <div className="Text1">
                    <div className="Container1">
                        <h3>Game from Anywhere</h3>
                        <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>

                    </div>


                </div>

            </div>

            <div className="grid2">

                <div className="Text2">
                    <div className="Container2">
                        <h3>Stay Connected</h3>
                        <p>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.</p>

                    </div>

                </div>
                <div className="Image2" > {/*use backgroundImage instead of backgroundimage*/}
                <img src="images/msstayconnected.jpg"/>
                </div>
            </div>
            <div className="grid3">
                <div className="Image3">
                <img src="images/audio.jpg"/>
                </div>
                <div className="Text3">
                    <div className="Container3">
                        <h3>Your Best Audio System</h3>
                        <p>A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.</p>
                    </div>

                </div>
            </div>
            <div className="grid4">

                <div className="Text4">
                    <div className="Container4">
                        <h3>Real Storage</h3>
                        <p>With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.</p>
                    </div>

                </div>
                <div className="Image4" >
                <img src="images/msrearspace.jpg"/>
                </div>
            </div>


        </div>

    )
}

export default Imagesgrid
