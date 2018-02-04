import { combineReducers } from 'redux'
import weather from './weather'
import notification from './notification'
import articles from './articles'
import filters from './filters'

export default combineReducers({
  weather,
  notification,
  articles,
  filters,
})
