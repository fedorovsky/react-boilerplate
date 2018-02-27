import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import HelloWorld from 'components/HelloWorld';
import Notification from 'components/Notification';
import Weather from 'components/Weather';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <HelloWorld />
          <Notification />
          <Weather />
        </div>
      </Provider>
    );
  }
}

export default App;
