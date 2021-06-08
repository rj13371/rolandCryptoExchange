import React from 'react';
import './App.css';
import Coin from './components/Coin/Coin/Coin';
import AccountBalance from './components/Coin/AccountBalance/AccountBalance';
import styled from 'styled-components';
import Metamask from './components/Coin/Metamask/Metamask'


const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
`;



class App extends React.Component {

  
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Card #1',
          ticker: '',
          price: 0
        },
        {
          name: 'Card #2',
          ticker: '',
          price: 0
        },
        {
          name: 'Card #3',
          ticker: '',
          price: 0
        },
        {
          name: 'Card #4',
          ticker: '',
          price: 0
        },
        {
          name: 'Card #5',
          ticker: '',
          price: 0
        }
      ]
    }
  }

  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <Title>Magic the Gathering Pack Wars</Title>
          <h2>Pack war on the blockchain and win cryptocurrency!</h2>
          
        </header>
        <Metamask account = {this.state.account}/>
        <table>
        <thead>
          <tr>
            <th>Card Name</th>
            <th>Card Set</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.coinData.map( value => <Coin key={value.ticker} name={value.name} ticker={value.ticker} price={value.price} />)
          }
        </tbody>
        </table>
        
      </div>
    );

  }
  
}

export default App;
