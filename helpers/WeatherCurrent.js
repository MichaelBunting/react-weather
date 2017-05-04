import Axios from 'axios';

export function WeatherCurrent(query) {
    const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/';
    const apiKey = '&units=Imperial&appid=fe7a309af188766599d123663a836f1d';

    var openWeatherFinalUrl = openWeatherUrl + query + apiKey;

    return (Axios.get(openWeatherFinalUrl));
}
