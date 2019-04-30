import React from "react";
import axios from "axios";

class EditNewDishForm extends React.Component {
  state = {
    name: "",
    img_url: "",
    cuisine_id: "",
    quantity: "",
    date: "",
    description: "",
    timeframe: "",
    type: "",
    price: "",
    dishImgFile: ""
  };

  uploadImage = () => {
    var formData = new FormData();
    var imagefile = this.state.dishImgFile;
    formData.append("img", imagefile);

    return axios
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        this.setState({ img_url: res.data.url });
      });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.img_url !== this.props.dish.img_url) {
      await this.uploadImage();
    }

    const updateDish = this.state;
    delete updateDish.dishImgFile;

    await axios.patch(`/dishes/update/${this.props.dish.id}`, updateDish);
    await this.props.getOneDish(parseInt(this.props.match.params.id));
    await this.props.history.push(
      `/grandma/${parseInt(this.props.id)}/dashboard`
    );
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleTypeChange = e => {
    e.preventDefault();
    if (e.target.value === "0") {
      this.setState({
        type: "sit-down"
      });
    } else if (e.target.value === "1") {
      this.setState({
        type: "pick-up"
      });
    }
  };

  // handleChange = e => {
  //   e.preventDefault();
  //   this.setState({
  //     selectedQuantity: e.target.value
  //   });
  //

  handleClick = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImageInputChange = e => {
    let file = e.target.files[0];
    let previewImgUrl = URL.createObjectURL(file);
    this.setState({ img_url: previewImgUrl, dishImgFile: file });
  };

  componentDidMount() {
    this.props.getOneDish(parseInt(this.props.match.params.id));
    this.props.getAllCuisines();
    this.props.getAllLabels();

    axios.get(`/dishes/${parseInt(this.props.match.params.id)}`).then(res => {
      // debugger;
      this.setState({ ...res.data.dish });
    });
  }

  render() {
    // const quantityOptions = this.state.quantity.map((number, i) => {
    //   return (
    //     <option key={i + 1} value={i + 1} id="quantity" name="selectedQuantity">
    //       {number}
    //     </option>
    //   );
    // });

    const labelTypes = this.props.labels.map(label => {
      return (
        <button
          key={label.id}
          value={label.id}
          name="label_id"
          onClick={this.handleClick}
        >
          {" "}
          {label.label_name}
        </button>
      );
    });

    const cuisinesType = this.props.cuisines.map(cuisine => {
      return (
        <button
          value={this.state.type === "sit-down" ? 1 : 0}
          key={cuisine.id}
          id="cuisineType"
          name="cuisine_id"
          onClick={this.handleClick}
        >
          {cuisine.type}
        </button>
      );
    });

    const { timeframe, type } = this.props;

    return (
      <div className="new-dish">
        <p>dish form</p>
        <form onSubmit={this.handleSubmit}>
          <section>
            <label htmlFor="dish-name">Dish Name</label>

            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <span>
              <div className="dishtype">
                <label htmlFor="dishType"> Dish Type: </label>
                <button
                  onClick={this.handleTypeChange}
                  value="1"
                  name="type"
                  className={+type ? "selected-type" : "unselected-type"}
                >
                  {" "}
                  to-go{" "}
                </button>

                <button
                  onClick={this.handleTypeChange}
                  name="type"
                  value="0"
                  className={type ? "selected-type" : "unselected-type"}
                >
                  {" "}
                  sit down{" "}
                </button>
              </div>
            </span>
          </section>
          <br />
          <section>
            <div className="quantityForm">
              <label htmlFor="quantity">Available Dishes: </label>

              <input
                name="quantity"
                type="text"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </div>
            <br />
            <div id="addDescription">
              <br />
              <br />
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
              />{" "}
            </div>
            <section />
            <br />

            <label htmlFor="cuisineType"> Pick a Cuisine </label>
            <div className="filter-buttons">{cuisinesType}</div>
          </section>
          <br />
          <br />
          <label htmlFor="start">
            Date:{" "}
            {this.state.date !== this.props.dish.date
              ? this.state.date
              : this.props.dish.date}
          </label>{" "}
          <span>change date</span>
          <input
            type="date"
            id="start"
            name="date"
            value={this.state.date}
            max="2020-12-31"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <section>
            <span>
              <div>
                <label htmlFor="lunch" />
                <button
                  onClick={this.handleClick}
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
                  onClick={this.handleClick}
                  value="dinner"
                  id="dinner"
                  name="timeframe"
                  className={
                    timeframe === "lunch" ? "unselected-type" : "selected-type"
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
              src={this.state.img_url}
              onChange={this.handleChange}
            />

            <input
              type="file"
              name="dishImgFile"
              placeholder="Image url"
              onChange={this.handleImageInputChange}
            />
          </section>
          <br />
          <br />
          <label htmlFor="price">Price</label>
          <input
            name="price"
            type="text"
            id="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <div className="filter-buttons">
            <label htmlFor="labels">labels </label> {labelTypes}
          </div>
          <br />
          <br />
          <input type="submit" value="save" />
        </form>
      </div>
    );
  }
}

export default EditNewDishForm;
