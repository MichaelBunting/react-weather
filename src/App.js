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
        this.removeCard = this.removeCard.bind(this);
    }

    getChildContext() {
        return {
            addCard: this.addCard,
            removeCard: this.removeCard
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
            Cookie.set(`block${highestCardNumer + 1}`, query, 10);
        }
    }

    removeCard(blockName) {
        var cards = this.state.cards;

        delete cards[blockName];

        this.setState({
            cards: cards
        }, () => {
            Object.keys(this.state.cards).forEach((card) => {
                var val = this.state.cards[card];

                if (val !== true) {
                    this.refs[card].getWeatherInfo(val);
                }
            });
        });

        // this.refs[blockName].getWeatherInfo

        // Cookie.delete(blockName);

        // delete this.state.cards[blockName];

        // console.log(this.state.cards);
    }

    render() {
        return (
            <div className="container">
                <SearchContainer />

                {
                    Object.keys(this.state.cards).map((card, i) => {
                        return (
                            <CardContainer
                                ref={card}
                                key={i}
                                {...this.state.cards[card] === true ? {currentLocation: "true"} : {query: this.state.cards[card]}}
                                blockName={card}/>
                        )
                    })
                }
            </div>
        )
    }
}

App.childContextTypes = {
    addCard: PropTypes.func,
    removeCard: PropTypes.func
}

export default App;
