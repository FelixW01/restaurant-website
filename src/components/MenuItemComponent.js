import React from 'react'


function MenuItemComponent(props) {
  return (
    <div className='card'>
        <img src={props.src} alt="" />
        <div className="card__info">
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h3>{props.price}</h3>
        </div>
    </div>
)
}

export default MenuItemComponent