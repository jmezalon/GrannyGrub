import React from 'react';

class NewDishForm extends React.Component {
  state = {
    dish_name: '',
    sitDown: false,
    dishImg: '',
    cuisine_type: '',
    labels: [],
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedQuantity: '',
    description: '',
    time: '',
    date: '',
  };

  render() {
    // const { grandma } = this.props;
    // const grandmaProfile = this.props.grandma.map(grandma => {
    // onChange={this.handleChange}

    const quantityOptions = this.state.quantity.map((number, i) => {
      return (
        <option key={i + 1} value={this.state.selectedQuantity}>
          {number}
        </option>
      );
    });

    return (
      <div className="new-dish">
        <label htmlFor="dish-name">Dish Name</label>
        <input name="dishName" type="text" value={this.state.dishName} />
        <br />
        <label htmlFor="dish-type">dish type </label>

        <span>
          <button> to-go </button>
          <button> sit-down </button>
        </span>
        <br />
        <div id="addDescription">
          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            type="text"
            value={this.state.description}
          />
        </div>
        <div>
          <label htmlFor="quantity"> Available Dishes: </label>
          <select value={this.state.selectedQuantity}>
            <option key="0" value="" />
            {quantityOptions}
          </select>
        </div>
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
