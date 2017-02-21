import axios from 'axios'

const API_KEY = 'eb4ed7fdf706ae9b81b6f66a9a7e0a88'  // openweather api key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = `${ROOT_URL}&q=${city},au`  // change country code
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
