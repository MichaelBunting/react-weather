import React from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../containers/CardContainer';
import SearchContainer from '../containers/SearchContainer';

import Cookie from '../helpers/Cookies';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            cards: {
                block1: true,
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

    componentDidMount() {
        Cookie.all().forEach((cookie) => {
            if (cookie.value.length > 0) {
                var query = cookie.value.split('?q=')[1];

                this.addCard(query, false);
            }
        });
    }

    addCard(query, addCookie = true) {
        var cards = this.state.cards,
            highestCardNumer = 0;

        Object.keys(cards).forEach((c) => {
            var num = parseInt(c.replace('block', ''));

            if (num > highestCardNumer) {
                highestCardNumer = num;
            }
        });

        query.replace(/ /g, '');

        query = `weather?q=${query}`;

        cards[`block${highestCardNumer + 1}`] = query;

        this.setState({
            cards: cards
        });

        if (addCookie) {
            Cookie.set(`blocks${highestCardNumer + 1}`, query, 10);
        }
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
