import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Coin Exchange</h1>
        <h2>Best cryptocurrency prices</h2>

      </header>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      <Coin name = 'Bitcoin' ticker = 'BTC' price = {100000}/>
      <Coin name = 'Ethereum' ticker = 'ETH' price = {99}/>
      <Coin name = 'Tether' ticker = 'USDT'price = {1}/>
      <Coin name = 'Ripple' ticker = 'XRP'price = {9}/>
      </tbody>
      </table>
      
    </div>
  );
}

export default App;
