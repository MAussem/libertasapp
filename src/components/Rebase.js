import { Box, Typography } from '@mui/material';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { displayBalance } from './Web3Client';
import React, { useState, useEffect } from 'react';
import {useRef} from "react";

// const Timer = () => {
//   const [secondsLeft, setSecondsLeft] = useState(0);
//   const secondsLeftRef = useRef(secondsLeft);

//   function tick() {
//     secondsLeftRef.current--;
//     setSecondsLeft(secondsLeftRef.current);
//   }
// }

const percentage = "30:00";
let selectedAccount;

const Rebase = () => {

  const [balance, setBalance] = useState(0);

  
  useEffect(() => {

    const loadAccounts = async () => {
      let provider = window.ethereum;
    
      if(typeof provider !== 'undefined') {
        provider.request({method: 'eth_requestAccounts' }).then(accounts => {
          selectedAccount = accounts[0];
          console.log({selectedAccount});
        }).catch(err => {
          console.log(err);
        });
    
        window.ethereum.on('accountsChanged', function (accounts) {
          selectedAccount = accounts[0];
          console.log({selectedAccount});
        });
      }
  }
  const fetchBalance = async () => {
    displayBalance().then(balance => {
    setBalance(balance);
    console.log({balance});
  })
  .catch(err => {
    console.log(err);
  });
  }
    loadAccounts();
    fetchBalance();
  }, [])

  const rebaseRate = 0.0302487;

  const nextReward = (balance / 100) * rebaseRate;

  return (
    <div style={{ 
      marginTop: -25,
      width: 200, 
      height: 200
    }}>
      <CircularProgressbar 
        value={percentage} 
        text={`${percentage}`}
        styles={buildStyles ({ 
        textColor:'#fff',
        pathColor:'rgba(255, 0, 0, 0.1)',
        trailColor:'rgb(140, 230, 270)',
      })} />
      <Box sx={{
        margin: 1,
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
      }}>
        <Typography variant='subtitle2'>
          NEXT REWARD: {rebaseRate}%
        </Typography>
        <Typography variant='subtitle2' style={{
          color: "rgb(167, 230, 255)"
        }}>
          {nextReward} XLB
        </Typography>
      </Box>
      {/* <button onClick={() => fetchBalance()}>click me</button> */}
    </div>
  )
}

export default Rebase;