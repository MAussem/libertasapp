import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { StakingAbi } from "../../abi/staking";

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const TimeUntilUnstake = ({ account }) => {
  const [timeUntilUnstake, setTimeUntilUnstake] = useState();
  const contractAddress = "0x31b41E3b75358a7ffbC031dE7F1e435DDCc8729b";

  useEffect(() => {
    const contract = new web3.eth.Contract(StakingAbi, contractAddress);
    contract.methods
      .timeUntilUnstake(account)
      .call()
      .then((result) => {
        setTimeUntilUnstake(result);
      });
  }, [account]);

  return <div>Time Until Unstake: {timeUntilUnstake}</div>;
};

export default TimeUntilUnstake;
