import React from "react";

class NewDishForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    cuisine_type: "",
    building_number: "",
    address: "",
    zip_code: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.props.getOneGrandma(5);
  }

  render() {
    const { grandma } = this.props;
    // const grandmaProfile = this.props.grandma.map(grandma => {
    return (
      <div className="one-grandma">
        <label htmlFor="first_name">Fist Name</label>
        <input
          name="first_name"
          onChange={this.handleChange}
          type="text"
          value={grandma.first_name || this.state.first_name}
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          name="last_name"
          type="text"
          onChange={this.handleChange}
          value={grandma.last_name || this.state.last_name}
        />
        <br />
        <label htmlFor="bio">bio</label>
        <textarea
          name="bio"
          onChange={this.handleChange}
          type="text"
          value={grandma.bio || this.state.bio}
        />
        <br />
        <h3>adress</h3>
        <div className="address">
          <span>
            <input
              type="text"
              placeholder="add building number"
              name="building_number"
              onChange={this.handleChange}
              value={grandma.building_number || this.state.building_number}
            />
          </span>
          <span>
            <input
              type="text"
              placeholder="add street address"
              name="address"
              onChange={this.handleChange}
              value={grandma.address || this.state.address}
            />
          </span>
          <span>
            <input
              type="text"
              placeholder="add zip code"
              name="zip_code"
              onChange={this.handleChange}
              value={grandma.zip_code || this.state.zip_code}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default NewDishForm;
