import { combineReducers } from 'redux'
import weather from './weather'
import notification from './notification'

export default combineReducers({
  weather,
  notification
})