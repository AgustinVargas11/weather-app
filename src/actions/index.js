const API_KEY = '8e7eeef4ec718dfc0080c28434d5a7c9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial&cnt=5`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = fetch(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}