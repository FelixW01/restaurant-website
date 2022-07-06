import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
    <h1>Check Us Out</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
            <ul className='cards__items'>
            <CardItem
              src="images/img1.jpg"
              text='Menu'
              path='/menu'
            />
            <CardItem
              src='images/img1.jpg'
              text='Catering'
              path='/catering'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;