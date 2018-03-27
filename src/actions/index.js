import { API_KEY } from 'babel-dotenv';

const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=b6907d289e10d714a6e88b30761fae22${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
