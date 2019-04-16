import React from "react";
import axios from "axios";
class NewDishForm extends React.Component {
  handleSubmit = e => {
    const {
      dishName,
      dishImg,
      quantity,
      cuisine_id,
      selectedQuantity,
      description,
      timeframe,
      handleChange,
      type,
      handleClick,
      price,
      user_id,
      handleToGo,
      date,
      handleSitDown,
      handleSubmit
    } = this.props;
    e.preventDefault();
    axios
      .post("/dishes/new", {
        name: dishName,
        description: description,
        user_id: user_id,
        cuisine_id: cuisine_id,
        img_url: dishImg,
        price: price,
        date: this.state.date,
        type: type,
        timeframe: timeframe
      })
      .catch(err => {
        if (err.response.status === 500) {
          console.log(err);
          this.setState({
            err_warning: true
          });
        } else {
          console.log(err);
        }
      });
  };

  render() {
    console.log(this.props.description);
    const {
      dishName,
      dishImg,
      quantity,
      cuisine_id,
      selectedQuantity,
      description,
      timeframe,
      handleChange,
      type,
      handleClick,
      price,
      date,
      user_id,
      handleToGo,
      handleSitDown,
      handleDateChange,
      handleSubmit
    } = this.props;

    const quantityOptions = quantity.map((number, i) => {
      return (
        <option key={i + 1} value={selectedQuantity}>
          {number}
        </option>
      );
    });

    return (
      <div className="new-dish">
        <form onSubmit={this.handleSubmit}>
          <section>
            <label htmlFor="dish-name">Dish Name</label>
            <input
              name="dishName"
              type="text"
              value={dishName}
              onChange={handleChange}
            />
            <div className="quantityForm">
              <label htmlFor="quantity"> Available Dishes: </label>
              <select value={selectedQuantity} onChange={handleChange}>
                <option key="0" value="" />
                {quantityOptions}
              </select>
            </div>
            <br />
            <div id="addDescription">
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                type="text"
                value={description}
                onChange={handleChange}
              />{" "}
            </div>
          </section>

          <section>
            <span>
              <div>
                <button
                  onClick={handleToGo}
                  value={type}
                  className={
                    type === "pick-up" ? "selected-type" : "unselected-type"
                  }
                >
                  {" "}
                  to-go{" "}
                </button>
              </div>
              <div>
                <button
                  onClick={handleSitDown}
                  value={type}
                  className={
                    type === "sit-down" ? "selected-type" : "unselected-type"
                  }
                >
                  {" "}
                  sit down{" "}
                </button>
              </div>
            </span>
          </section>

          <label htmlFor="start">Date:</label>
          <input
            type="date"
            id="start"
            name="date"
            value={date}
            min={date}
            max="2020-12-31"
            onChange={handleDateChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewDishForm;

//
// <br />
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

// <button onClick={handleToGo} value={pickUp}>
//   {" "}
//   to-go{" "}
// </button>
// <button onClick={handleSitDown} value={sitDown}>
//   {" "}
//   sit-down{" "}
// </button>
