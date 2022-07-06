import React from 'react'
import "./MenuItem.css"
import MenuItemComponent from "./MenuItemComponent"

function MenuItem() {
  return (
    <div>
    <div className="menu">
    <h1>Menu</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
            <ul className='cards__items'>
            <MenuItemComponent
              src="images/img1.jpg"
              title="Food 1"
              description="Food Description."
              price="25$"
            />
            <MenuItemComponent
              src="images/img1.jpg"
              title="Food 2"
              description="Food Description."
            />
            <MenuItemComponent
              src="images/img1.jpg"
              title="Food 3"
              description="Food Description."
            />

          </ul>
          <ul className='cards__items'>
          <MenuItemComponent
              src="images/img1.jpg"
              title="Food 2"
              description="Food Description."
            />
            <MenuItemComponent
              src="images/img1.jpg"
              title="Food 2"
              description="Food Description."
            />
            <MenuItemComponent
              src="images/img1.jpg"
              title="Food 2"
              description="Food Description."
            />

          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MenuItem