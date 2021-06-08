import React from 'react';
import Web3 from 'web3';
import styled from 'styled-components';

const Section = styled.section`
    border: 1px solid red;
    font-size: 2rem;
`

const rpcURL = 'https://kovan.infura.io/v3/0466e9bf793e40abba6293a11474fcff';
const web3 = new Web3(rpcURL);

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  };


export default class metamask extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            account: window.ethereum.selectedAddress,
            accountBalance: this.props.accountBalance,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    

  handleClick(event){
    event.preventDefault();
    window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log (window.ethereum.selectedAddress);
    
    
};


  async loadBlockChain() {
    const Web3 = require("web3");
    const ethEnabled = async () => {
      if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        return true;
      }
      return false;
    }
    const network = await web3.eth.net.getNetworkType();

    
    if (window.ethereum.selectedAddress){
    web3.eth.defaultAccount = window.ethereum.selectedAddress

    web3.eth.coinbase = window.ethereum.selectedAddress

    web3.eth.getBalance(web3.eth.coinbase, function(err, result) {
      if (err) {
        return console.log(err)
      } else {
        document.getElementById("balance").innerHTML = `Account Balance:` + result/1000000000000000000 + " ETH";
      }
    })
  }
    console.log(network) // should give you main if you're connected to the main network via metamask...
    if (!window.ethereum.selectedAddress){
        this.setState({account: "Not connected"})
    } else {
      this.setState({account: window.ethereum.selectedAddress})
    };


  }

  componentDidMount() {
    this.loadBlockChain()
  }
  render() {
    return (
      <div>
        <p>Your account: {this.state.account}</p>
        <Section id='balance'></Section>
        <button onClick={this.handleClick}>Connect Metamask</button>
      </div>
    );
  }
}