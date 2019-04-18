import React from "react";
import NewDishForm from "./NewDishForm";
import axios from "axios";

class HandleNewDish extends React.Component {
  state = {
    dishName: "",
    description: "",
    type: "",
    dishImg: "",
    dishImgFile: "",
    cuisine_id: "",
    label_id: "",
    quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedQuantity: "",
    timeframe: "",
    date:
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1) +
      "-" +
      (new Date().getDate() + 1 < 10
        ? "0" + (new Date().getDate() + 1)
        : new Date().getDate() + 1),
    user_id: 14,
    price: "",
    submitted: false
  };

  componentDidMount() {
    this.props.getAllCuisines();
    this.props.getAllLabels();
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  handleQuantityChange = e => {
    e.preventDefault();
    this.setState({
      selectedQuantity: e.target.value
    });

    // console.log(e.target.value);
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      type: e.target.value
    });
    // console.log(e.target.value);
  };

  handleSubmit = e => {
    const {
      dishName,
      dishImg,
      cuisine_id,
      description,
      timeframe,
      type,
      price,
      user_id,
      date
    } = this.state;

    //if else statement
    e.preventDefault();
    axios
      .post("/dishes/new", {
        name: dishName,
        description: description,
        user_id: user_id,
        cuisine_id: cuisine_id,
        img_url: dishImg,
        price: price,
        date: date,
        type: type,
        timeframe: timeframe
      })
      .then(() => {
        this.setState({
          dishName: "",
          description: "",
          type: "",
          dishImg: "",
          cuisine_id: "",
          label_id: "",
          quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          selectedQuantity: "",
          timeframe: "",
          date:
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1 < 10
              ? "0" + (new Date().getMonth() + 1)
              : new Date().getMonth() + 1) +
            "-" +
            (new Date().getDate() + 1 < 10
              ? "0" + (new Date().getDate() + 1)
              : new Date().getDate() + 1),
          user_id: 14,
          price: "",
          submitted: true
        });
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
    console.log("done");
  };
  render() {
    // console.log(this.props.cuisines);
    const {
      dishName,
      cuisine_id,
      label_id,
      quantity,
      selectedQuantity,
      description,
      timeframe,
      type,
      price,
      dishImg,
      user_id,
      date,
      dishImgFile
    } = this.state;

    return (
      <>
        <NewDishForm
          dishName={dishName}
          quantity={quantity}
          type={type}
          description={description}
          labels={this.props.labels}
          label_id={label_id}
          cuisines={this.props.cuisines}
          dishImg={dishImg}
          cuisine_type={cuisine_id}
          user_id={user_id}
          timeframe={timeframe}
          price={price}
          date={date}
          dishImgFile={dishImgFile}
          selectedQuantity={selectedQuantity}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleQuantityChange={this.handleQuantityChange}
          handleSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

export default HandleNewDish;
