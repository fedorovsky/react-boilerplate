import React, { Component } from 'react';
import { connect } from "react-redux";
import { initialWeather } from "actions/weather";

class Weather extends Component {
  getWeather() {
    this.props.initialWeather('Kharkiv');
  }
  render() {
    return (
      <div>
        <p>{ this.props.weather.name }</p>
        <button onClick={this.getWeather.bind(this)}>Get Weather</button>
      </div>
    );
  }
}

Weather.propTypes = {};

const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
};

const mapDispatchToProps = { initialWeather };

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
