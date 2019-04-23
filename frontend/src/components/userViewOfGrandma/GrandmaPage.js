import React, { Component } from 'react';
import axios from 'axios';
import '../../css/userViewOfGrandma/GrandmaPage.css';
import GrandmasDishes from '../dishes/dishesUserView';

class GrandmaPage extends Component {
  state = {
    type: '',
    selectedDish: [],
  };

  componentDidMount() {
    let id = parseInt(this.props.match.params.id);
    this.props.getGrandmasDishes(id);
    this.props.getOneGrandma(id);
  }

  componentDidUpdate(prevProps) {
    // let defaultDishes = prevProps.dishes;
    // debugger;
    if (
      prevProps.dishes[0] &&
      this.props.dishes[0] &&
      prevProps.dishes[0].dish_id !== this.props.dishes[0].dish_id
    ) {
      this.setState({
        type: this.props.dishes[0].type,
      });
    }
  }

  handleTypeToggle = e => {
    this.setState({
      type: e.target.value,
    });
  };

  handleChange = dish => {
    this.props.setSelectedDish(dish);
  };

  render() {
    let { grandma, dishes } = this.props;
    if (!Object.values(grandma).length) return null;

    if (dishes.length && !this.state.type) {
      this.setState({
        type: dishes[0].type,
      });
    }
    // console.log(this.state.selectedDish);

    let grannyId = this.props.match.params.id;
    console.log('THE GRANDMA STATE', this.state);
    return (
      <div className="user-view-granny-page">
        <label htmlFor="pick-up"> pickup </label>
        <input
          type="radio"
          name="type"
          value="pick-up"
          onChange={this.handleTypeToggle}
          checked={this.state.type === 'pick-up'}
        />
        <label htmlFor="sit-down"> sitdown </label>
        <input
          type="radio"
          name="type"
          value="sit-down"
          onChange={this.handleTypeToggle}
          checked={this.state.type === 'sit-down'}
        />

        <div>
          <GrandmasDishes
            dishes={this.props.dishes}
            type={this.state.type}
            handleChange={this.handleChange}
            setSelectedDish={this.props.setSelectedDish}
          />
        </div>

        <div className="profile-sidebar">
          <p>{grandma.first_name}</p>
          <img
            className="user-view-granny-pic"
            src={grandma.profile_pic}
            alt=""
          />
          <p>id: {grandma.user_id}</p>
          <p>cuisine type: {grandma.cuisine_type}</p>
          <p>bio: {grandma.bio}</p>
        </div>
      </div>
    );
  }
}

export default GrandmaPage;
