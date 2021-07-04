import React, { useState, useEffect } from 'react';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import Defi from './components/Defi/Defi';
import Metamask from './components/Coin/Metamask/Metamask'
import styled from 'styled-components';
import axios from 'axios';
import opengraphbtc from './opengraphbtc.png'

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const Link = styled.a`
color:white;
text-decoration: none; 
background-color: none;
`;

const COIN_COUNT = 25;
const coinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const tickerUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=';
const gasURL = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YK9XI24QV8JBJ7P5NX26W7C2HAIDSGNQ3K'

function App () {

  const [coinData, setCoinDataList] = useState([]);
  const [gasPriceA, setGasPriceA] = useState([]);
  const [gasPriceB, setGasPriceB] = useState([]);
  const [gasPriceC, setGasPriceC] = useState([]);
  

  useEffect( () => {
    (async () => {
      const response = await axios.get( coinsUrl );
      const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
  
      const promises = coinIds.map( id => axios.get( tickerUrl + id ));
      const coinGeckoURL = 'https://www.coingecko.com/en/coins/'
  
      const coinData = await Promise.all( promises );
  
      const coinPriceData = coinData.map( function(response) {
        const coin = response.data;
        //debugger;
        return {
          link: coinGeckoURL + coin[0].name.toLowerCase().replace(' ', '-'),
          image: coin[0].image.replace('large', 'small'),
          key: coin[0].id,
          name: coin[0].name,
          symbol: coin[0].symbol.toUpperCase(),
          current_price: coin[0].current_price ,
          price_change_percentage_24h:　coin[0].price_change_percentage_24h.toFixed(2),
          market_cap:coin[0].market_cap.toLocaleString()
  
        };
      });

      setCoinDataList( coinPriceData );
    })()
  }, []);

  useEffect( () => {
    (async () => {
      const response = await axios.get( gasURL );
      const gasPriceDataA = response.data.result.SafeGasPrice;
      const gasPriceDataB = response.data.result.ProposeGasPrice;
      const gasPriceDataC = response.data.result.FastGasPrice;

      setGasPriceA( gasPriceDataA );
      setGasPriceB( gasPriceDataB );
      setGasPriceC( gasPriceDataC );
    })()
  }, [])


  


    return (
      <div className="App">
        <header className="App-header">
          
          <Title>Rolands Cryptocurrency Exchange</Title>
          <img className ='App-logo' src = {opengraphbtc} alt = 'btc'/>
          <Link href={'https://etherscan.io/gastracker'}><h5>ETH Gas Prices Safe: {gasPriceA} Avg: {gasPriceB} Fast: {gasPriceC}</h5> </Link>
          <h6>Powered by Coin Gecko API and Etherscan API</h6>
        </header>
        <Metamask/>
        <Defi/>
        <h1>Top 25 Coins by Marketcap</h1>
        <CoinList 
          coinData={coinData} />
        
      </div>
    );

  
  
}

// class App extends React.Component {

  
//   constructor(props){
//     super(props);
//     this.state = {
//       coinData: [ ]
//     }
//   }

//   componentDidMount = async () => {

//     const response = await axios.get( coinsUrl );
//     const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );

//     const promises = coinIds.map( id => axios.get( tickerUrl + id ));

//     const coinData = await Promise.all( promises );

//     const coinPriceData = coinData.map( function(response) {
//       const coin = response.data;
//       //debugger;
//       return {
//         key: coin[0].id,
//         name: coin[0].name,
//         symbol: coin[0].symbol.toUpperCase(),
//         current_price: coin[0].current_price ,
//         price_change_percentage_24h:　coin[0].price_change_percentage_24h.toFixed(2),
//         market_cap:coin[0].market_cap.toLocaleString()

//       };
//     });
//     this.setState({ coinData: coinPriceData });
//   }
  

//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <Title>Cryptocurrency Exchange</Title>
          
//         </header>
//         <Metamask account = {this.state.account}/>
//         <CoinList 
//           coinData={this.state.coinData} />
        
//       </div>
//     );

//   }
  
// }

export default App;
