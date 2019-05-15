import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Dish = ({ dish, handleClick }) => {
  let dish_name = dish.name.toUpperCase();
  let desc = dish.description;
  if (dish.description.length > 60) {
    desc = dish.description.slice(0, 57) + ' ...';
  }

  return (
    <div id="dish-container">
      <div id="dish-header">
        <h2 id="dish_name"> {dish_name}</h2>
        <p> ${dish.price} </p>
      </div>
      <div className="dish-view" key={dish.dish_id}>
        <div className="dish-left-side">
          <div className="dishInfo">
            <p>{desc}</p>
            {
              //comment in if needed
              // <p> On {dish.date.slice(0, 10)} </p>
            }
            <p> </p>

            <p> Available for {dish.timeframe} </p>
          </div>

          <div id="dish-bottom-left">
            <div className="dish-quantity">
              <p className="remaining-quantity">
                {dish.type === 'pick-up'
                  ? 'Available Dishes:'
                  : 'Available Dishes:'}{' '}
                {dish.remaining_quantity === null
                  ? dish.quantity
                  : dish.remaining_quantity}{' '}
                / {dish.quantity}{' '}
              </p>
            </div>
            <Link
              to={
                dish.remaining_quantity !== 0
                  ? `/order/dish/${dish.dish_id}`
                  : null
              }
            >
              <button id="orderBtn">
                {' '}
                {dish.remaining_quantity === 0
                  ? 'sold out'
                  : dish.type === 'sit-down'
                  ? 'order'
                  : 'order'}{' '}
              </button>
            </Link>
          </div>
        </div>
        <div className="dish-right-side">
          <img src={dish.img_url} alt="dish" className="dish_img" />

          <p className="dish-label">
            {' '}
            {dish.lable_list ? dish.lable_list.join(' - ') : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dish);

//<p id="dish-lables"> lables go here </p>

//todo
//add if else for btn if remaining_quantity = 0.
