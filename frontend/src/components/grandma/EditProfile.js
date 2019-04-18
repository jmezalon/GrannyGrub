import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      bio: "",
      profile_pic: "",
      cuisine_id: "",
      building_number: "",
      address: "",
      zip_code: "",
      infoChanged: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelect = e => {
    e.preventDefault();
    this.setState({
      cuisine_id: e.target.value
    });
    console.log(e.target.value);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let grandma = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      bio: this.state.bio,
      address: this.state.address,
      zip_code: this.state.zip_code,
      building_number: this.state.building_number,
      profile_pic: this.state.profile_pic,
      phone_number: this.state.phone_number
    };
    await axios.patch(`/users/update/${parseInt(this.props.user.id)}`, grandma);

    await this.props.getOneGrandma(parseInt(this.props.user.id));
    await this.setState({
      infoChanged: true
    });
  };

  // this.props.history.push(
  //   `/grandma/${parseInt(this.props.user.id)}/dashboard`
  // );

  componentDidMount() {
    // this.props.getOneGrandma(parseInt(this.props.user.id));
    this.props.getAllCuisines();
    console.log(this.props);
    axios.get(`/users/grandma/${parseInt(this.props.user.id)}`).then(res => {
      this.setState({
        first_name: res.data.user.first_name,
        last_name: res.data.user.last_name,
        bio: res.data.user.bio,
        address: res.data.user.address,
        zip_code: res.data.user.zip_code,
        building_number: res.data.user.building_number,
        profile_pic: res.data.user.profile_pic,
        phone_number: res.data.user.phone_number,
        cuisine_id: res.data.user.cuisine_type
      });
    });
  }

  render() {
    const { grandma } = this.props;

    // const grandmaProfile = this.props.grandma.map(grandma => {

    const cuisineTypes = this.props.cuisines.map(cuisine => {
      return (
        <option key={cuisine.id} value={cuisine.id}>
          {cuisine.type}
        </option>
      );
    });

    return (
      <div className="one-grandma">
        <h6>Edit your profile</h6>
        <Link to={`/grandma/${this.props.user.id}/dashboard`}>
          <p>back to Dashboard</p>
        </Link>
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">Fist Name</label>
          <input
            name="first_name"
            onChange={this.handleChange}
            type="text"
            value={this.state.first_name}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            type="text"
            onChange={this.handleChange}
            value={this.state.last_name}
          />
          <label htmlFor="phone_number">Phone number</label>
          <input
            name="phone_number"
            type="text"
            onChange={this.handleChange}
            value={this.state.phone_number}
          />
          <br />
          <br />

          <img id="profile-pic" alt="" src={this.state.profile_pic} />
          <label htmlFor="profile_pic">add a different image url </label>

          <input
            name="profile_pic"
            type="text"
            onChange={this.handleChange}
            value={this.state.profile_pic}
          />

          <br />
          <br />
          <label htmlFor="cuisine">edit cuisine</label>

          <select onChange={this.handleSelect}>
            <option key="0" value="">
              select a cuisines
            </option>
            {cuisineTypes}
          </select>

          <br />
          <br />
          <label htmlFor="bio">bio</label>

          <textarea
            name="bio"
            onChange={this.handleChange}
            type="text"
            value={this.state.bio}
          />
          <br />
          <h3>address</h3>
          <div className="address">
            <span>
              <input
                type="text"
                placeholder="add building number"
                name="building_number"
                onChange={this.handleChange}
                value={this.state.building_number}
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="add street address"
                name="address"
                onChange={this.handleChange}
                value={this.state.address}
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="add zip code"
                name="zip_code"
                onChange={this.handleChange}
                value={this.state.zip_code}
              />
            </span>
          </div>
          <div className="save-button">
            <button>Save</button>
          </div>
          {this.state.infoChanged ? (
            <div className="confirmation">
              <p>your info has been updated</p>
              <Link to={`/grandma/${parseInt(this.props.user.id)}/dashboard`}>
                <input type="button" value="Dashboard" />
              </Link>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(EditProfile);
