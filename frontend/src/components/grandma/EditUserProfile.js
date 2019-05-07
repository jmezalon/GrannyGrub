import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class EditUserProfile extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    phone_number: "",
    profile_pic: "",
    delete: false,
    message: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  grannyId = () => {
    const path = this.props.location.pathname;
    return path.substring(path.lastIndexOf("/") + 1);
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
    const grandma = this.state;
    delete grandma.delete;
    delete grandma.message;
    delete grandma.cuisine_type;

    await axios.patch(`/users/update/${this.grannyId()}`, grandma);
    await this.props.getOneGrandma(this.grannyId());

    await this.props.history.push(`/user/${this.grannyId()}/dashboard`);
  };

  // TODO with correct redux we can probably kill this.

  componentDidMount() {
    // this.props.getOneGrandma(parseInt(this.props.user.id));
    axios.get(`/users/grandma/${this.grannyId()}`).then(res => {
      this.setState({ ...res.data.user });
    });
  }

  render() {
    const grandma = this.state;
    console.log("i am rendering");
    return (
      <div className="one-grandma">
        <h6>Edit your profile</h6>
        <Link to={`/user/${parseInt(this.props.user.id)}/dashboard`}>
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
                : "http://www.oakhillcamp.org/wp-content/uploads/2018/02/blank-profile.png"
            }
          />
          <label htmlFor="profile_pic">add a different image url </label>

          <input
            name="profile_pic"
            type="text"
            onChange={this.handleChange}
            value={grandma.profile_pic ? grandma.profile_pic : ""}
          />

          <br />
          <br />

          <div>
            <label htmlFor="deleteAccount"> Delete Account </label>

            <button
              onClick={e => {
                window.confirm(
                  "Are you sure you wish to delete your GrannyGrub account?"
                ) && this.handleDeleteAccount(e);
              }}
            >
              {" "}
              Delete Account{" "}
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

export default withRouter(EditUserProfile);
