import React from 'react';
import Coin from '../Coin/Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    border: thick double #32a1ce;
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
    `;

 export default function CoinList(props) {

        return (
            <Table> 
            <thead>
              <tr>
            <th>Coin Name</th>
            <th>Coin Ticker</th>
            <th>Price</th>
            <th>Market Capitalization</th>
            <th>Percentage Change Past 24 Hours</th>
              </tr>
            </thead>
            <tbody>
              {
                props.coinData.map( ({key, name, symbol, current_price,price_change_percentage_24h, market_cap}) =>
                  <Coin 
                  key={key} 
                  id={key}
                  name={name} 
                  symbol={symbol}
                  current_price={current_price} 
                  price_change_percentage_24h={price_change_percentage_24h}
                  market_cap={market_cap}
                  />
                )
              }
            </tbody>
          </Table>
        )

}

