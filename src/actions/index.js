import axios from 'axios';

const API_KEY = 'fd1cdf1d5f5000e1ed32a6cd60ca3d71';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request =  axios.get(url);

  console.log(request);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
