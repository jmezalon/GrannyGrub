import React from 'react';
// import axios from 'axios';

class NewDishForm extends React.Component {
  render() {
    const {
      dishName,
      dishImg,
      quantity,
      labels,
      label_id,
      cuisine_id,
      selectedQuantity,
      description,
      timeframe,
      type,
      handleChange,
      price,
      date,
      dishImgFile,
      user_id,
      handleSubmit,
      handleQuantityChange,
      handleClick,
      cuisines,
    } = this.props;

    const quantityOptions = quantity.map((number, i) => {
      return (
        <option key={i + 1} value={i + 1} id="quantity">
          {number}
        </option>
      );
    });

    const labelTypes = this.props.labels.map(label => {
      return (
        <button
          key={label.id}
          value={label.id}
          name="labe l_id"
          onClick={e => handleClick(e)}
        >
          {' '}
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
          onClick={e => handleClick(e)}
        >
          {cuisine.type}
        </button>
      );
    });

    return (
      <div className="new-dish">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="dish-name">Dish Name</label>

            <input
              name="dishName"
              type="text"
              value={dishName}
              onChange={handleChange}
            />
            <br />
            <br />
            <span>
              <div className="dishtype">
                <label htmlFor="dishType"> Dish Type: </label>
                <button
                  onClick={handleClick}
                  value="1"
                  className={+type ? 'selected-type' : 'unselected-type'}
                >
                  {' '}
                  to-go{' '}
                </button>

                <button
                  onClick={e => handleClick(e)}
                  value="0"
                  className={type ? 'selected-type' : 'unselected-type'}
                >
                  {' '}
                  sit down{' '}
                </button>
              </div>
            </span>
          </section>

          <br />
          <section>
            <div className="quantityForm">
              <label htmlFor="quantity">Available Dishes: </label>

              <select onChange={handleQuantityChange} value={selectedQuantity}>
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
              />{' '}
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
                  onClick={e => handleClick(e)}
                  value="lunch"
                  id="lunch"
                  className={
                    timeframe === 'lunch' ? 'selected-type' : 'unselected-type'
                  }
                >
                  {' '}
                  Lunch{' '}
                </button>
              </div>
              <div>
                <label htmlFor="dinner" />
                <button
                  onClick={e => handleClick(e)}
                  value="dinner"
                  id="dinner"
                  className={
                    timeframe === 'lunch' ? 'unselected-type' : 'selected-type'
                  }
                >
                  {' '}
                  Dinner{' '}
                </button>
              </div>
            </span>
          </section>
          <br />
          <br />
          <section>
            <label htmlFor="img"> Dish Image </label>
            <input
              type="text"
              value={dishImg}
              id="img"
              name="dishImg"
              placeholder="Image url"
              onChange={handleChange}
            />
            <input
              type="file"
              value={dishImgFile}
              name="dishImgFile"
              placeholder="Image url"
              onChange={handleClick}
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
            <label htmlFor="labels">labels </label> {labelTypes}
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
