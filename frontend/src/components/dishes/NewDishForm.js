import React from 'react';
import axios from 'axios';

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
      type,
      price,
      user_id,
      date,
    } = this.props;

    e.preventDefault();
    axios
      .post('/dishes/new', {
        name: dishName,
        description: description,
        user_id: user_id,
        cuisine_id: cuisine_id,
        img_url: dishImg,
        price: price,
        date: date,
        type: type,
        timeframe: timeframe,
      })
      .catch(err => {
        if (err.response.status === 500) {
          console.log(err);
          this.setState({
            err_warning: true,
          });
        } else {
          console.log(err);
        }
      });
  };

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
      handleNameChange,
      type,
      handleClick,
      price,
      date,
      handleDescriptionChange,
      user_id,
      handleToGo,
      handleSitDown,
      handleDateChange,
      handleSubmit,
      handleQuantityChange,
      handleDishType,
      handleTimeFrame,
      handleCuisine,
      cuisines,
      handlePriceChange,
      handleImgChange,
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
          onClick={e => handleCuisine(e)}
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
          onClick={e => handleCuisine(e)}
        >
          {cuisine.type}
        </button>
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
              onChange={handleNameChange}
            />

            <div className="quantityForm">
              <label htmlFor="quantity">Available Dishes: </label>

              <select onChange={handleQuantityChange} value={selectedQuantity}>
                <option key="0" value="" />
                {quantityOptions}
              </select>
            </div>
            <br />
            <div id="addDescription">
              <label htmlFor="description">Description: </label>
              <textinput
                name="description"
                type="text"
                value={description}
                onChange={handleDescriptionChange}
              />{' '}
            </div>
          </section>

          <section>
            <span>
              <div>
                <button
                  onClick={handleDishType}
                  value="1"
                  className={+type ? 'selected-type' : 'unselected-type'}
                >
                  {' '}
                  to-go{' '}
                </button>
              </div>
              <div>
                <button
                  onClick={e => handleDishType(e)}
                  value="0"
                  className={+type ? 'unselected-type' : 'selected-type'}
                >
                  {' '}
                  sit down{' '}
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
          <br />
          <br />
          <section>
            <span>
              <div>
                <label htmlFor="lunch" />
                <button
                  onClick={handleTimeFrame}
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
                  onClick={e => handleDishType(e)}
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
              onChange={handleImgChange}
            />
          </section>
          <br />
          <section>
            <label htmlFor="cuisineType"> Pick a Cuisine </label>
            {cuisinesType}
          </section>
          <br />
          <br />
          <label htmlFor="dish-name">Price</label>
          <input
            name="price"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
          <br />
          <br />
          <section>
            <label htmlFor="labels">labels </label> {labelTypes}
          </section>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default NewDishForm;
