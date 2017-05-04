import React from 'react';

import CardContainer from '../containers/CardContainer';

class App extends React.Component {
    constructor() {
        super();

        // const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/';
        // const query = 'weather?q=Lititz,PA';
        // const apiKey = '&units=Imperial&appid=fe7a309af188766599d123663a836f1d';
        //
        // const openWeatherFinalUrl = openWeatherUrl + query + apiKey;
        //
        // Axios.get(openWeatherFinalUrl)
        //     .then(function(response) {
        //         console.log(response.data);
        //     })
        //     .catch(function(error) {
        //         console.error(error);
        //     });
    }

    render() {
        return (
            <div>
                <CardContainer />
            </div>
        )
    }
}

export default App;
