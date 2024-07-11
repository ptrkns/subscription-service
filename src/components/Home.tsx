import { useState } from "react";

function Home() {

  const [userAddress, setUserAddress] = useState('Address');

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts", });
        setUserAddress(accounts[0]);
      } catch (error) { console.log('Error connecting: ' + error) }
    } else { console.log('MetaMask extension is missing!'); }
  }

  return (
    <div className="h-screen flex flex-col md:mt-20">
      <h1 className="font-bold text-2xl py-5 md:text-4xl text-gray-800 cursor-default">Welcome to Subs-3!</h1>
      <p className="text-base md:text-xl my-2 cursor-default">Subs-3 allows you to pay for your favorite services using Ethereum.</p>
      <p className="text-base md:text-xl mb-10 cursor-default">In order to use this platform you need to have a MetaMask wallet, that you need to connect.</p>
      <div className="flex flex-col justify-center bg-gray-200 pt-1 px-5 pb-5 shadow-lg">
        <h2 className="font-bold text-xl md:text-2xl py-4 text-gray-800 cursor-default">Connect MetaMask wallet</h2>
        <p className="text-base md:text-xl mt-5 mb-2 cursor-default">A MetaMask wallet is required to pay for the services on this app.</p>
        <p className="text-base md:text-xl mb-10 cursor-default">Select the wallet you want to use in your MetaMask extesion, then click the <b>Connect wallet</b> button.</p>
        <div className="text-base md:text-xl mb-10 p-1 border-2 border-black bg-white cursor-default">{userAddress}</div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold m-auto py-4 w-1/2 mb:w-1/4 lg:w-1/4" onClick={requestAccount}>Connect wallet</button>
      </div>
    </div>
  );
}

export default Home;