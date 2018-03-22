import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialWeather } from 'actions/weather';

class Weather extends Component {
  static propTypes = {
    initialWeather: PropTypes.func.isRequired,
    weather: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  };
  getWeather = () => {
    this.props.initialWeather('Kharkiv');
  }
  render() {
    return (
      <div>
        <p>{ this.props.weather.name }</p>
        <button onClick={this.getWeather}>Get Weather</button>
      </div>
    );
  }
}

Weather.propTypes = {};

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = { initialWeather };

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
