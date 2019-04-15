import React from "react";

class NewDishForm extends React.Component {
  render() {
    const {
      dishName,
      // sitDown,
      // dishImg,
      quantity,
      selectedQuantity,
      // description,
      // timeframe,
      handleChange
      // pickUp,
      // handleClick,
      // date,
    } = this.props;

    const quantityOptions = quantity.map((number, i) => {
      return (
        <option key={i + 1} value={selectedQuantity}>
          {number}
        </option>
      );
    });

    //
    // const quantityOptions = quantity.map((number, i) => {
    //   return (
    //     <option key={i + 1} value={selectedQuantity}>
    //       {number}
    //     </option>
    //   );
    // });

    return (
      <div className="new-dish">
        <form>
          <label htmlFor="dish-name">Dish Name</label>
          <input
            name="dishName"
            type="text"
            value={dishName}
            onChange={handleChange}
          />

          <label htmlFor="quantity"> Available Dishes: </label>
          <select value={selectedQuantity}>
            <option key="0" value="" />
            {quantityOptions}
          </select>
        </form>
      </div>
    );
  }
}

export default NewDishForm;

//
// <br />
// <h3>adress</h3>
// <div className="address">
//   <span>
//     <input
//       type="text"
//       placeholder="add building number"
//       name="building_number"
//       onChange={this.handleChange}
//       value={grandma.building_number || this.state.building_number}
//     />
//   </span>
//   <span>
//     <input
//       type="text"
//       placeholder="add street address"
//       name="address"
//       onChange={this.handleChange}
//       value={grandma.address || this.state.address}
//     />
//   </span>
//   <span>
//     <input
//       type="text"
//       placeholder="add zip code"
//       name="zip_code"
//       onChange={this.handleChange}
//       value={grandma.zip_code || this.state.zip_code}
//     />
//   </span>
// </div>
//
//
// <div>
//   <span>
//     <label htmlFor="timeframe"> Timeframe: </label>
//     <input name="timeframe" type="text" value={timeframe} />
//   </span>
// </div>
// </div>

// <br />
// <label htmlFor="dish-type">dish type </label>

// <span>
//   <button onClick={handleClick} value={pickUp}>
//     {" "}
//     to-go{" "}
//   </button>
//   <button onClick={handleClick} value={sitDown}>
//     {" "}
//     sit-down{" "}
//   </button>
// </span>
// <br />
// <div id="addDescription">
//   <label htmlFor="description">Description: </label>
//   <textarea name="description" type="text" value={description} />
// </div>
