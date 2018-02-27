import React, { Component } from 'react';
import { connect } from "react-redux";
import { addMessage } from "actions/notification";

class Notification extends Component {
  addNotification() {
    this.props.addMessage('Hello Notification');
  }
  render() {
    return (
      <div>
        <p>{ this.props.notification.message }</p>
        <button onClick={this.addNotification.bind(this)}>Notification</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
  };
};

const mapDispatchToProps = { addMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
