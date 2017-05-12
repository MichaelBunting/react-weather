import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onAddCard = this.onAddCard.bind(this);
    }

    onAddCard() {
        this.context.addCard(this.refs.searchInput.value);
        this.refs.searchInput.value = '';
    }

    render() {
        return (
            <div className="search">
                <input
                    ref="searchInput"
                    type="search"
                    className="search__input"
                    placeholder="Search for City"
                    required />

                <button
                    type="button"
                    className="search__btn"
                    onClick={this.onAddCard}>
                        Search
                </button>
            </div>
        )
    }
}

Search.contextTypes = {
    addCard: PropTypes.func
}

export default Search;
