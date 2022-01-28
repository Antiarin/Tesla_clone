import React from "react";
import "./Imagesgrid.css";
import { Fade, Slide } from "react-reveal";

const IMGGRID = [
  {
    id: 1,
    gridclassName: "grid1",
    img: "https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/game.jpg?alt=media&token=11a973d8-8a2d-41ed-9a4a-41ae9a6a066e",
    imgclassName: "Image1",
    textclassName: "Text1",
    containerclassName: "Container1",
    title: "Game from Anywhere",
    content:
      "Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.",
  },
  {
    id: 2,
    gridclassName: "grid2",
    img: "https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/connected.jpg?alt=media&token=975ab3e8-2f96-44bf-ba1a-e01f90382769",
    imgclassName: "Image2",
    textclassName: "Text2",
    containerclassName: "Container2",
    title: "Stay Connected",
    content:
      "Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.",
  },
  {
    id: 3,
    gridclassName: "grid3",
    img: "https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/audio.jpg?alt=media&token=84a1e3fe-3b5e-41bd-955f-1afba937be68",
    imgclassName: "Image3",
    textclassName: "Text3",
    containerclassName: "Container3",
    title: "Your Best Audio System",
    content:
      "A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.",
  },
  {
    id: 4,
    gridclassName: "grid4",
    img: "https://firebasestorage.googleapis.com/v0/b/the-tesla-clone.appspot.com/o/msrearspace.jpg?alt=media&token=a2380123-8c6a-4278-b4a7-fc3a1e104d85",
    imgclassName: "Image4",
    textclassName: "Text4",
    containerclassName: "Container4",
    title: "Real Storage",
    content:
      "With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.",
  },
];
function Imagesgrid() {
  return (
    <div className="grids">
      {IMGGRID.map((e) => (
        <div className={e.gridclassName} key={e.id}>
          <Fade bottom>
            <div className={e.imgclassName}>
              <img src={e.img} alt="" />
            </div>
          </Fade>
          <Slide bottom cascade>
            <div className={e.textclassName}>
              <div className={e.containerclassName}>
                <h3>{e.title}</h3>
                <p>{e.content}</p>
              </div>
            </div>
          </Slide>
        </div>
      ))}
    </div>
  );
}

export default Imagesgrid;
