import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/img1.jpg"; 
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg"



const Slider = () => {
  return (
    <Carousel>
    <div>
        <img alt= "imagen1" src={img1} />
   
    </div>
    <div>
        <img alt= "imagen2" src={img2} />

    </div>
    <div>
        <img alt= "imagen3" src={img3} />

    </div>
</Carousel>
  )
}

export default Slider