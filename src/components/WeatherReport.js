import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../action/weather";

class WeatherReport extends Component {
  componentDidMount() {
    this.props.dispatch(fetchWeather());
  }
  render() {
    return <div></div>;
  }
}
function mapStateToProps(state) {
  return {
    weather: state.weather,
  };
}

export default connect(mapStateToProps)(WeatherReport);
