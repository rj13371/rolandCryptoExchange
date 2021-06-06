import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Td = styled.td `
border: 1px solid #cccccc;
width: 25vh;
`;

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            ticker: this.props.ticker,
            price: this.props.price
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();

        // const randomPercentage = 0.995 + Math.random() * 0.1;
        // this.setState(function(oldState) {
        //     return {
        //         price: oldState.price * randomPercentage
        //     };
        // });

        fetch('https://api.scryfall.com/cards/random')
        .then(response => response.json())
        .then(card=> this.setState({name: card.name, price: card.prices.usd, ticker: card.set_name }, () => console.log (card.name)))

    }


    render() {
        return (
            <tr>
              <Td>{this.state.name}</Td>
              <Td>{this.state.ticker}</Td>
              <Td>${this.state.price}</Td>
              <Td>
                  <form action = '#' method ="POST">
                  <button onClick={this.handleClick}>Open a card</button>
                    </form>
                      </Td>
            </tr>
            );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
