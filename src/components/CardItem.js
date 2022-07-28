import React from 'react';
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link to={props.path} className="cards__item__link">
            <div className="cards__item__pic-wrap">
                <img src={props.src} alt="Food Img" 
                className="cards__item__img"/>
            </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem