import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import Weather from 'containers/Weather';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    );
  }
}

export default App;