import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
  return (
    <Carousel>
    <div>
        <img src="./assets/img1.jpg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="assets/img2.jpg" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="assets/img3.jpg" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  )
}

export default Slider