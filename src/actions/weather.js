import types from '../constants/actionTypes';
import axios from 'axios';

const API_KEY = '2f3a7af36479d22a6e9f15de6744cd7d';
const API_URL = `http://api.openweathermap.org/data/2.5/weather`;

export const initialWeather = (city) => (dispatch) => {
  const URL = `${API_URL}?q=${city}&APPID=${API_KEY}&units=metric`;
  dispatch({
    type: types.GET_WEATHER_REQUEST,
  });
  axios.get(URL)
    .then((response) => {
      dispatch({
        type: types.GET_WEATHER_SUCCESS,
        weather: response.data,
      })
    })
    .catch((response) => {
      dispatch({
        type: types.GET_WEATHER_ERROR,
        weather: response.data,
      })
    })
};