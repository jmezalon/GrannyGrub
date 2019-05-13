import React from "react";
// import axios from 'axios';

class NewDishForm extends React.Component {
  render() {
    const {
      name,
      img_url,
      quantity,
      description,
      timeframe,
      type,
      handleChange,
      price,
      date,
      dishImgFile,
      handleSubmit,
      handleQuantityChange,
      handleClick,
      handleTypeChange,
      handleImageInputChange
    } = this.props;

    const quantityOptions = quantity.map((number, i) => {
      return (
        <option key={i + 1} value={i + 1} id="quantity" name="selectedQuantity">
          {number}
        </option>
      );
    });

    const labelTypes = this.props.labels.map(label => {
      return (
        <button
          key={label.id}
          value={label.id}
          name="label_id"
          onClick={handleClick}
        >
          {" "}
          {label.label_name}
        </button>
      );
    });

    const cuisinesType = this.props.cuisines.cuisines.map(cuisine => {
      return (
        <button
          value={cuisine.id}
          key={cuisine.id}
          id="cuisineType"
          name="cuisine_id"
          onClick={handleClick}
        >
          {cuisine.type}
        </button>
      );
    });
    console.log(date, "date");
    return (
      <div className="new-dish">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="dish-name">Dish Name</label>

            <input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <br />
            <br />
            <span>
              <div className="dishtype">
                <label htmlFor="dishType"> Dish Type: </label>
                <button
                  onClick={handleTypeChange}
                  value="1"
                  name="type"
                  className={
                    type === "pick-up" ? "selected-type" : "unselected-type"
                  }
                >
                  {" "}
                  Pick-up{" "}
                </button>

                <button
                  onClick={handleTypeChange}
                  name="type"
                  value="0"
                  className={
                    type === "sit-down" ? "selected-type" : "unselected-type"
                  }
                >
                  {" "}
                  Delivery{" "}
                </button>
              </div>
            </span>
          </section>

          <br />
          <section>
            <div className="quantityForm">
              <label htmlFor="quantity">Available Dishes: </label>

              <select onChange={handleQuantityChange}>
                <option key="0" value="" />
                {quantityOptions}
              </select>
            </div>
            <br />
            <div id="addDescription">
              <br />
              <br />
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                type="text"
                value={description}
                onChange={handleChange}
              />{" "}
            </div>
            <section />
            <br />

            <label htmlFor="cuisineType"> Pick a Cuisine </label>
            <div className="filter-buttons">{cuisinesType}</div>
          </section>
          <br />
          <br />

          <label htmlFor="start">Date:</label>
          <input
            type="date"
            id="start"
            name="date"
            value={date}
            min={date}
            max="2020-12-31"
            onChange={handleChange}
          />
          <br />
          <br />
          <section>
            <span>
              <div>
                <label htmlFor="lunch" />
                <button
                  onClick={handleClick}
                  value="lunch"
                  id="lunch"
                  name="timeframe"
                  className={
                    timeframe === "lunch" ? "selected-type" : "unselected-type"
                  }
                >
                  {" "}
                  Lunch{" "}
                </button>
              </div>
              <div>
                <label htmlFor="dinner" />
                <button
                  onClick={handleClick}
                  value="dinner"
                  id="dinner"
                  name="timeframe"
                  className={
                    timeframe === "dinner" ? "selected-type" : "unselected-type"
                  }
                >
                  {" "}
                  Dinner{" "}
                </button>
              </div>
            </span>
          </section>
          <br />
          <br />
          <section>
            <label htmlFor="img"> Dish Image </label>
            <img
              id="profile-pic"
              alt=""
              src={this.props.imgPreview}
              onChange={handleChange}
            />
            <input
              type="text"
              value={dishImgFile ? "" : img_url}
              id="img"
              name="img_url"
              placeholder="Image url"
              onChange={handleChange}
            />
            <input
              type="file"
              name="dishImgFile"
              placeholder="Image url"
              onChange={handleImageInputChange}
            />
          </section>
          <br />

          <br />
          <label htmlFor="price">Price</label>
          <input
            name="price"
            type="text"
            id="price"
            value={price}
            onChange={handleChange}
          />
          <br />
          <br />

          <div className="filter-buttons">
            <label htmlFor="labels"> Dietary restrictions: </label> {labelTypes}
          </div>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewDishForm;
