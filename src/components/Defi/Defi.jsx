import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
border: thick double #32a1ce;
margin: 0px auto 0px auto;
display: inline-block;
font-size: 1.7rem;
border-spacing: 14px;
    `;

    const Td = styled.td`
    border: 0px solid #cccccc;
    width: 25vh;
`;

 export default function Defi(props) {

        return (
            <Table> 
            <thead>
              <tr>
            <th>Uniswap</th>
            <th>Aave</th>
            <th>Yearn Finance</th>
            <th>Curve Finance</th>
            <th>Sushiswap</th>
              </tr>
            </thead>
            <tbody>
            <Td><a href={'https://uniswap.org/'}><img src = {"https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604"}/></a></Td>
            <Td><a href={'https://aave.com/'}><img src = {"https://assets.coingecko.com/coins/images/12645/small/AAVE.png?1601374110"}/></a></Td>
            <Td><a href={'https://yearn.finance/'}><img src = {"https://assets.coingecko.com/coins/images/11849/small/yfi-192x192.png?1598325330"}/></a></Td>
            <Td><a href={'https://curve.fi/'}><img src = {'https://assets.coingecko.com/coins/images/12124/small/Curve.png?1597369484'}/></a></Td>
            <Td><a href={'https://sushi.com/'}><img src = {"https://assets.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png?1606986688"}/></a></Td>
            </tbody>
          </Table>
        )

}

