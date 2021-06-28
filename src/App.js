import React from 'react';
import './App.css';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import Metamask from './components/Coin/Metamask/Metamask'
import axios from 'axios';

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
`;

const COIN_COUNT = 25;
const coinsUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
const tickerUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=';

class App extends React.Component {

  
  constructor(props){
    super(props);
    this.state = {
      coinData: [ ]
    }
  }

  componentDidMount = async () => {
    const response = await axios.get( coinsUrl );
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );

    const promises = coinIds.map( id => axios.get( tickerUrl + id ));

    const coinData = await Promise.all( promises );

    const coinPriceData = coinData.map( function(response) {
      const coin = response.data;
      console.log (coin[0].current_price)
      //debugger;
      return {
        key: coin[0].id,
        name: coin[0].name,
        symbol: coin[0].symbol.toUpperCase(),
        current_price: coin[0].current_price ,
        price_change_percentage_24h:　coin[0].price_change_percentage_24h.toFixed(2),
        market_cap:coin[0].market_cap.toLocaleString()

      };
    });
    // console.log(coinIds,coinData, coinPriceData);
    this.setState({ coinData: coinPriceData });
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <Title>Cryptocurrency Exchange</Title>
          
        </header>
        <Metamask account = {this.state.account}/>
        <CoinList 
          coinData={this.state.coinData} />
        
      </div>
    );

  }
  
}

export default App;
