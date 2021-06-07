import React from 'react';
import Web3 from 'web3'

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  };


export default class metamask extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            account: window.ethereum.selectedAddress,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    

  handleClick(event){
    event.preventDefault();
    window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log (window.ethereum.selectedAddress);

};


  async loadBlockChain() {
    const rpcURL = 'https://kovan.infura.io/v3/0466e9bf793e40abba6293a11474fcff' // Your RCkP URL goes here
    const web3 = new Web3(rpcURL)
    const network = await web3.eth.net.getNetworkType();
    console.log(network) // should give you main if you're connected to the main network via metamask...
    if (!window.ethereum.selectedAddress){
        this.setState({account: "Not connected"})
    } else {
        this.setState({account: window.ethereum.selectedAddress})
    }
  }

  componentDidMount() {
    this.loadBlockChain()
  }
  render() {
    return (
      <div>
        <p>Check out the the console....</p>
        <p>Your account: {this.state.account}</p>
        <button onClick={this.handleClick}>Connect Metamask</button>
      </div>
    );
  }
}