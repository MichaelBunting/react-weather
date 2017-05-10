import React from 'react';

import CardContainer from '../containers/CardContainer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            cards: {
                currentLocation: true,
                newYork: "weather?q=NewYork,NY",
                sanFrancisco: "weather?q=SanFrancisco,CA"
            }
        }
    }

    render() {
        return (
            <div className="container">
                {
                    Object.values(this.state.cards).map(function(card, i) {
                        return (
                            <CardContainer
                                key={i}
                                {...card === true ? {currentLocation: "true"} : {query: card}}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
