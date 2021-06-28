import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;


export default class Coin extends Component {
    render() {
            return(
                <tr>
                  <Td>{this.props.name}</Td>
                  <Td>{this.props.symbol}</Td>
                  <Td>${this.props.current_price}</Td>
                  <Td>${this.props.market_cap}</Td>
                  <Td>{this.props.price_change_percentage_24h}%</Td>
                </tr>
              );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
}