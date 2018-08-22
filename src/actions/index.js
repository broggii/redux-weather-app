import axios from 'axios';
const API_KEY = process.env.REACT_APP_WEATHER_API;

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
