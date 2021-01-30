import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="navbar">
        <div className="search-box">
          <input placeholder="Search" />
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

export default connect(mapStateToProps)(Navbar);
