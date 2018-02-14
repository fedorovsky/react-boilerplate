import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers'

const logger = createLogger({
  // ...options
});

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger
    )
  )
);
