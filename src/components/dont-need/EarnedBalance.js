import React, { useState, useEffect } from "react";
import { useWeb3 } from "wagmi";

const EarnedBalance = ({ contract }) => {
  const { web3 } = useWeb3();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getEarnedBalance = async () => {
      const account = await web3.eth.getAccounts();
      const earnedBalance = await contract.methods.earned(account[0]).call();
      setBalance(earnedBalance);
    };
    getEarnedBalance();
  }, [web3, contract]);

  return <div>Earned balance: {balance}</div>;
};

export default EarnedBalance;
