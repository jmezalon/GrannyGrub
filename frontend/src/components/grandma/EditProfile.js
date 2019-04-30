import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class EditProfile extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    phone_number: '',
    bio: '',
    profile_pic: '',
    cuisine_id: '',
    // cuisine_type: "",
    building_number: '',
    address: '',
    zip_code: '',
    longitude: '',
    latitude: '',
    delete: false,
    message: '',
    ispublic: false,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSelect = e => {
    e.preventDefault();
    this.setState({ cuisine_id: e.target.value });
  };

  handleIsPublic = () => {
    this.setState({ ispublic: !this.state.ispublic });
  };

  grannyId = () => {
    const path = this.props.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1);
  };

  // handleFirstClick = e => {
  //   e.preventDefault();
  // };

  handleDeleteAccount = async e => {
    e.preventDefault();
    await this.props.logoutUser();
    await this.props.deleteGrandmaAccount(this.props.id);
    await this.props.history.push(`/`);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { building_number, address, zip_code } = this.state;

    if (
      this.props.grandma.address !== address ||
      this.props.grandma.building_number !== building_number ||
      this.props.zip_code !== zip_code
    ) {
      let coords = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${building_number}, ${address}, New York, ${zip_code}&key=AIzaSyAThAa2thsgXHfh-D09OkhewLe5VVAlhYs`
      );

      this.setState({
        longitude: coords.data.results[0].geometry.location.lng,
        latitude: coords.data.results[0].geometry.location.lat,
      });
    }

    const grandma = this.state;
    delete grandma.cuisine_type;
    delete grandma.delete;
    delete grandma.message;

    await axios.patch(`/users/update/${this.grannyId()}`, grandma);
    await this.props.getOneGrandma(this.grannyId());

    await this.props.history.push(`/grandma/${this.grannyId()}/dashboard`);
  };

  // TODO with correct redux we can probably kill this.

  componentDidMount() {
    // this.props.getOneGrandma(parseInt(this.props.user.id));
    this.props.getAllCuisines();
    axios.get(`/users/grandma/${this.grannyId()}`).then(res => {
      this.setState({ ...res.data.user });
    });
  }

  render() {
    const grandma = this.state;

    const cuisineTypes = this.props.cuisines.map(cuisine => {
      return (
        <option key={cuisine.id} value={Number(cuisine.id)}>
          {cuisine.type}
        </option>
      );
    });

    return (
      <div className="one-grandma">
        <h6>Edit your profile</h6>
        <Link to={`/grandma/${parseInt(this.props.user.id)}/dashboard`}>
          <p>back to Dashboard</p>
        </Link>
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <label htmlFor="first_name">Fist Name</label>
          <input
            name="first_name"
            onChange={this.handleChange}
            type="text"
            value={grandma.first_name}
          />
          <label htmlFor="last_name">Last Name</label>
          <input
            name="last_name"
            type="text"
            onChange={this.handleChange}
            value={grandma.last_name}
          />
          <label htmlFor="phone_number">Phone number</label>
          <input
            name="phone_number"
            type="text"
            onChange={this.handleChange}
            value={grandma.phone_number}
          />
          <br />
          <br />

          <img
            id="profile-pic"
            alt=""
            src={
              grandma.profile_pic
                ? grandma.profile_pic
                : 'http://www.oakhillcamp.org/wp-content/uploads/2018/02/blank-profile.png'
            }
          />
          <label htmlFor="profile_pic">add a different image url </label>

          <input
            name="profile_pic"
            type="text"
            onChange={this.handleChange}
            value={grandma.profile_pic ? grandma.profile_pic : ''}
          />

          <br />
          <br />
          <label htmlFor="cuisine">edit cuisine</label>

          <select onChange={this.handleSelect}>
            <option key="0" value="">
              {grandma.cuisine_type ? 'new cuisine' : 'Select a cuisine'}
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
            placeholder={grandma.bio ? '' : 'add some info'}
            value={grandma.bio ? grandma.bio : ''}
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
                value={grandma.building_number}
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="add street address"
                name="address"
                onChange={this.handleChange}
                value={grandma.address}
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="add zip code"
                name="zip_code"
                onChange={this.handleChange}
                value={grandma.zip_code}
              />
            </span>
          </div>
          <div className="switchBtn-container">
            <label htmlFor="public-display">
              {' '}
              {this.state.isPublic
                ? 'Your Account is set to Public'
                : 'Your Account is set to Private'}{' '}
            </label>
            <input
              onChange={this.handleIsPublic}
              value={this.state.ispublic}
              ref="switch"
              type="checkbox"
              className="switch"
            />
          </div>

          <div>
            <label htmlFor="deleteAccount"> Delete Account </label>

            <button
              onClick={e => {
                window.confirm(
                  'Are you sure you wish to delete your GrannyGrub account?'
                ) && this.handleDeleteAccount(e);
              }}
            >
              {' '}
              Delete Account{' '}
            </button>
            <p> please note that this will permanently delete your account </p>
          </div>

          <div className="save-button">
            <button>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditProfile);
