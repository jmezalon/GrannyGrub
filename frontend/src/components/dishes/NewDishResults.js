import React from 'react';
import { withRouter } from 'react-router';

const NewDishResults = props => {
  console.log(props);

  debugger;
  return (
    <div className="dishInfo">
      <form onSubmit={props.handleResultSubmit}>
        <h3> Dish name: {props.dishName}</h3>
        <p>
          {' '}
          dish Image: <img src={props.dishImg} alt="dish" id="dish_img" />{' '}
        </p>

        <p> Price: ${props.price} </p>
        <p> Meal type: {props.type} </p>
        <p> Description: {props.description} </p>
        <p> quantity: {props.selectedQuantity}</p>
        <p> Cuisine: {props.cuisine_type} </p>
        <p> timeframe: {props.timeframe} </p>
        <p> date: {props.date} </p>

        <input type="submit" value="Add Dish!" />
      </form>
    </div>
  );
};

// TODO:
// add btn for edit dish here
//or send them back to the page before

export default withRouter(NewDishResults);
