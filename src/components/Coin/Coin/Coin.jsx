import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Td = styled.td `
border: 1px solid #cccccc;
width: 25vh;
`;

export default class Coin extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            ticker: this.props.ticker,
            price: this.props.price,
            image: this.props.image,
            openedCard: false,
            totalPackValue: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
            if (this.state.openedCard === true) {
              return;
            }
        fetch('https://api.scryfall.com/cards/random')
        .then(response => response.json())
        .then(card=> this.setState({name: card.name, price: card.prices.usd, ticker: card.set_name, image: card.image_uris.small, openedCard: true}, () => console.log (card.name, this.state.totalPackValue)))

    }


    render() {
        return (
            <tr>
              <Td>{this.state.name}</Td>
              <Td>{this.state.ticker}</Td>
              <Td>${this.state.price}</Td>
              <Td><img src ={this.state.image}/></Td>
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
