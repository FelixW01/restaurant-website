import React, {useState} from 'react'
import {Carousel} from "react-bootstrap"
import "./Carousel.css"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel  activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="img">
          <img
            className="d-block w-100"
            src="images/img2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="">
            <h3>Homemade, Fresh, Authentic</h3>
            <p>Delightful Indonesian cuisine delivered straight to your door</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img">
          <img
            className="d-block w-100"
            src="images/img2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;