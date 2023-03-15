import React, { useState, useEffect } from "react";
import Web3 from "web3";

const web3 = new Web3(window.ethereum);

function ETHInfo() {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function getBalance() {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const balanceInWei = await web3.eth.getBalance(account);
      const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
      const balanceWith4Decimals = Number.parseFloat(balanceInEther).toFixed(4);
      setBalance(balanceWith4Decimals);
    }

    getBalance();
  }, []);

  return (
    <div
      style={{
        color: "rgb(167, 230, 255)",
      }}
    >
      {balance} ETH
    </div>
  );
}

export default ETHInfo;
