import React　from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;


export default function Coin (props) {
            return(
                <tr>
                  <Td>{props.name}</Td>
                  <Td>{props.symbol}</Td>
                  <Td>${props.current_price}</Td>
                  <Td>${props.market_cap}</Td>
                  <Td>{props.price_change_percentage_24h}%</Td>
                </tr>
              );
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
}

