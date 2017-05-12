import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../containers/CardContainer';
import SearchContainer from '../containers/SearchContainer';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            cards: {
                block1: true,
                block2: "weather?q=NewYork,NY",
                block3: "weather?q=SanFrancisco,CA"
            },
            searchVal: "",
        }

        this.addCard = this.addCard.bind(this);
    }

    getChildContext() {
        return {
            addCard: this.addCard
        }
    }

    addCard(query) {
        var cards = this.state.cards,
            cardLength = Object.keys(cards).length;

        query = `weather?q=${query.trim()}`;

        cards[`block${cardLength + 1}`] = query;

        this.setState({
            cards: cards
        });
    }

    render() {
        return (
            <div className="container">
                <SearchContainer />

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

App.childContextTypes = {
    addCard: PropTypes.func
}

export default App;
