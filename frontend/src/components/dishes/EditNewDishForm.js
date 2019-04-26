import React from "react";
// import axios from 'axios';

class EditNewDishForm extends React.Component {
  state = {
    dishName: "",
    dishImg: "",
    quantity: "",
    cuisine_id: "",
    selectedQuantity: "",
    description: "",
    timeframe: "",
    type: "",
    price: "",
    date: "",
    dishImgFile: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    let dish = this.state;
    // const dish =

    // axios.patch(`dishes/${this.props.dish.id}`, dish);
  };

  componentDidMount() {
    this.props.getOneDish(parseInt(this.props.match.params.id));
  }

  render() {
    const {
      dishName,
      dishImg,
      quantity,
      cuisine_id,
      selectedQuantity,
      description,
      timeframe,
      type,
      price,
      date,
      dishImgFile
    } = this.state;

    return (
      <div className="new-dish">
        <p>dish form</p>
        <p>hi</p>
      </div>
    );
  }
}

export default EditNewDishForm;

// <form onSubmit={handleSubmit}>
//   <section>
//     <label htmlFor="dish-name">Dish Name</label>
//
//     <input
//       name="dishName"
//       type="text"
//       value={dishName}
//       onChange={handleChange}
//     />
//     <br />
//     <br />
//     <span>
//       <div className="dishtype">
//         <label htmlFor="dishType"> Dish Type: </label>
//         <button
//           onClick={handleTypeChange}
//           value="1"
//           name="type"
//           className={+type ? "selected-type" : "unselected-type"}
//         >
//           {" "}
//           to-go{" "}
//         </button>
//
//         <button
//           onClick={handleTypeChange}
//           name="type"
//           value="0"
//           className={type ? "selected-type" : "unselected-type"}
//         >
//           {" "}
//           sit down{" "}
//         </button>
//       </div>
//     </span>
//   </section>
//
//   <br />
//   <section>
//     <div className="quantityForm">
//       <label htmlFor="quantity">Available Dishes: </label>
//
//       <select onChange={handleQuantityChange}>
//         <option key="0" value="" />
//         {quantityOptions}
//       </select>
//     </div>
//     <br />
//     <div id="addDescription">
//       <br />
//       <br />
//       <label htmlFor="description">Description: </label>
//       <textarea
//         name="description"
//         type="text"
//         value={description}
//         onChange={handleChange}
//       />{" "}
//     </div>
//     <section />
//     <br />
//
//     <label htmlFor="cuisineType"> Pick a Cuisine </label>
//     <div className="filter-buttons">{cuisinesType}</div>
//   </section>
//   <br />
//   <br />
//
//   <label htmlFor="start">Date:</label>
//   <input
//     type="date"
//     id="start"
//     name="date"
//     value={date}
//     min={date}
//     max="2020-12-31"
//     onChange={handleChange}
//   />
//   <br />
//   <br />
//   <section>
//     <span>
//       <div>
//         <label htmlFor="lunch" />
//         <button
//           onClick={handleClick}
//           value="lunch"
//           id="lunch"
//           name="timeframe"
//           className={
//             timeframe === "lunch" ? "selected-type" : "unselected-type"
//           }
//         >
//           {" "}
//           Lunch{" "}
//         </button>
//       </div>
//       <div>
//         <label htmlFor="dinner" />
//         <button
//           onClick={handleClick}
//           value="dinner"
//           id="dinner"
//           name="timeframe"
//           className={
//             timeframe === "lunch" ? "unselected-type" : "selected-type"
//           }
//         >
//           {" "}
//           Dinner{" "}
//         </button>
//       </div>
//     </span>
//   </section>
//   <br />
//   <br />
//   <section>
//     <label htmlFor="img"> Dish Image </label>
//     <input
//       type="text"
//       value={dishImg}
//       id="img"
//       name="dishImg"
//       placeholder="Image url"
//       onChange={handleChange}
//     />
//     <input
//       type="file"
//       value={dishImgFile}
//       name="dishImgFile"
//       placeholder="Image url"
//       onChange={handleClick}
//     />
//   </section>
//   <br />
//
//   <br />
//   <label htmlFor="price">Price</label>
//   <input
//     name="price"
//     type="text"
//     id="price"
//     value={price}
//     onChange={handleChange}
//   />
//   <br />
//   <br />
//
//   <div className="filter-buttons">
//     <label htmlFor="labels">labels </label> {labelTypes}
//   </div>
//   <br />
//   <br />
//   <input type="submit" />
// </form>
