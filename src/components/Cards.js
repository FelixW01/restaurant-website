import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <div className="cards__container">
            <div className="cards__wrapper">
            <div className='cards__item1'>
            <CardItem
              src="images/img1.jpg"
              path='/menu'
            />
            <div className="paragraph-container">
            <div className="header-1">
            <h2>à la carte</h2>
            <br/>
            <h3>_</h3>
            <div className="paragraph-1">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
          </div>
          </div>
          
          <div className="cards__item2">
          <CardItem
              src='images/img1.jpg'
              path='/catering'
            />
            <div className="paragraph-container">
            <div className="header-2">
            <h2>Private Catering</h2>
            <br/>
            <h3>_</h3>
            <div className="paragraph-2">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;