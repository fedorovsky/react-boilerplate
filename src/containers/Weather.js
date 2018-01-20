import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HelloWorld from 'components/HelloWorld';
import * as weatherActions from "../actions/weather";
import * as notificationActions from "../actions/notification";

class Weather extends Component {
  init() {
      this.props.actions.weather.initialWeather('Kharkiv');
  }

  addNotification() {
    this.props.actions.notification.addMessage('Hello Notification');
  }

  componentDidUpdate(){}

  render() {
    return (
      <div>
        <HelloWorld />
        <p>{ this.props.weather.name }</p>
        <p>{ this.props.notification.message }</p>
        <button onClick={this.init.bind(this)}>Get Weather</button>
        <button onClick={this.addNotification.bind(this)}>Notification</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather,
    notification: state.notification,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      weather: bindActionCreators(weatherActions, dispatch),
      notification: bindActionCreators(notificationActions, dispatch),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
