import React from "react";
import NewDishForm from "./NewDishForm";
import axios from "axios";
import NewDishResults from "./NewDishResults";

class HandleNewDish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      type: "",
      img_url: "",
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
          ? "0" + new Date().getDate()
          : new Date().getDate()),
      user_id: "",
      price: "",
      imgPreview: "",
      submitted: false
    };
    this.handleResultSubmit = this.handleResultSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getAllCuisines();
    this.props.getAllLabels();
  }

  goBack = () => {
    this.setState({
      submitted: false
    });
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

  handleImageInputChange = e => {
    let file = e.target.files[0];
    let previewImgUrl = URL.createObjectURL(file);
    this.setState({ imgPreview: previewImgUrl, dishImgFile: file });
  };

  handleResultSubmit = async e => {
    const {
      name,
      img_url,
      cuisine_id,
      description,
      timeframe,
      type,
      price,
      date,
      selectedQuantity
    } = this.state;

    e.preventDefault();

    // if (this.props.imgPreview) {
    //   await this.uploadImage();
    // }
    let newDish = await axios.post("/dishes/new", {
      name: name,
      description: description,
      user_id: parseInt(this.props.id),
      cuisine_id: cuisine_id,
      img_url: img_url,
      price: price,
      date: date,
      timeframe: timeframe,
      quantity: selectedQuantity,
      label_id: this.state.label_id
    });

    // await axios.post("/labels/new", {
    //   dish_id: newDish.data.dish.id,
    //   label_id: parseInt(this.state.label_id)
    // });

    this.props.history.push(`/grandma/${parseInt(this.props.id)}/dashboard`);

    // console.log("done");
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  };

  handleQuantityChange = e => {
    e.preventDefault();
    this.setState({
      selectedQuantity: e.target.value
    });

    // console.log("quantity", this.state.selectedQuantity);
  };

  handleTypeChange = e => {
    e.preventDefault();
    if (e.target.value === "0") {
      this.setState({
        type: "delivery"
      });
    } else if (e.target.value === "1") {
      this.setState({
        type: "pick-up"
      });
    }
    console.log(e.target.value);
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.dishImgFile);
    if (this.state.dishImgFile !== "") {
      this.uploadImage();
    }
    this.setState({
      submitted: true
    });
  };

  render() {
    // console.log(this.props.cuisines);
    const {
      name,
      cuisine_id,
      label_id,
      quantity,
      selectedQuantity,
      description,
      timeframe,
      type,
      price,
      img_url,
      user_id,
      date,
      dishImgFile,
      submitted
    } = this.state;

    if (!submitted) {
      return (
        <>
          <div className="newDishContainer">
            <NewDishForm
              name={name}
              quantity={quantity}
              type={type}
              description={description}
              labels={this.props.labels}
              label_id={label_id}
              cuisines={this.props.cuisines}
              img_url={img_url}
              cuisine_type={cuisine_id}
              user_id={user_id}
              timeframe={timeframe}
              price={price}
              date={date}
              imgPreview={this.state.imgPreview}
              dishImgFile={dishImgFile}
              selectedQuantity={selectedQuantity}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              handleQuantityChange={this.handleQuantityChange}
              handleSubmit={this.handleSubmit}
              handleTypeChange={this.handleTypeChange}
              handleImageInputChange={this.handleImageInputChange}
            />
          </div>
        </>
      );
    } else {
      return (
        <div className="newDishContainer">
          <NewDishResults
            name={name}
            quantity={quantity}
            type={type}
            dishImgFile={dishImgFile}
            description={description}
            img_url={img_url}
            cuisine_type={cuisine_id}
            timeframe={timeframe}
            price={price}
            label_id={label_id}
            date={date}
            submitted={submitted}
            goBack={this.goBack}
            imgPreview={this.state.imgPreview}
            selectedQuantity={selectedQuantity}
            handleResultSubmit={this.handleResultSubmit}
            handleImageInputChange={this.handleImageInputChange}
          />
        </div>
      );
    }
  }
}

//
// await catch(err => {
//     if (err.response.status === 500) {
//       console.log(err);
//       this.setState({
//         err_warning: true
//       });
//     } else {
//       console.log(err);
//     }
//   });

export default HandleNewDish;
