import axios from 'axios';

const API_KEY = 'b1b15e88fa797225412429c1c50c122a1';

const ROOT_URL = `http://openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    console.log('Request : ', request);
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}