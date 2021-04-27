import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '944bdab6165d9e2e02a2dedefb3bb071';

export const fetchWeather = async (query) => {
    const response = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    });
    const { data } = response;
    return data;
} 