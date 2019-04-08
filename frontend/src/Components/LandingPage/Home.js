import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <form>
            <input
              className="searchbar"
              type="text"
              placeholder="Search for a cuisine"
            />
            <button>Search</button>
          </form>
          <div>
            <p>we will have a cuisine component in this div</p>
          </div>
          <div>
            <h5>
              this is the component that will hold the map, just like we have in
              wireframe, mapview.png
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
