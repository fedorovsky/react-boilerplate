import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from 'actions/notification';

class Notification extends Component {
  static propTypes = {
    addMessage: PropTypes.func.isRequired,
    notification: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
  };
  addNotification = () => {
    this.props.addMessage('Hello Notification');
  };
  render() {
    return (
      <div>
        <p>{ this.props.notification.message }</p>
        <button onClick={this.addNotification}>Notification</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notification: state.notification,
});

const mapDispatchToProps = { addMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
