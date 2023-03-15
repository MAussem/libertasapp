import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { Container, Grid, Paper, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const buttonSty = makeStyles((theme) => ({
  buttonS: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [14, "!important"],
    },
  },
}));

const TokenFaucet = (props) => {
  // const [lastClaimTime, setLastClaimTime] = useState(0);
  const [web3, setWeb3] = useState(null);
  // const [contract, setContract] = useState(null);
  // const [account, setAccount] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);

  useEffect(() => {
    // Check if the user has metamask installed and is logged in
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      const TokenFaucetABI = [
        {
          inputs: [
            {
              internalType: "address",
              name: "_tokenAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "claim",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "lastClaimTime",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      const TokenFaucetAddress = "0xEB4a65Da70003d5a96933407AD05989344c11ac8";
      const contractInstance = new web3.eth.Contract(
        TokenFaucetABI,
        TokenFaucetAddress
      );
      setContractInstance(contractInstance);
    } else {
      console.log("You need to install metamask");
    }
  }, []);

  const handleClaim = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await contractInstance.methods
      .claim()
      .send({ from: accounts[0] });
    console.log(result);
  };

  const buttonStyles = {
    marginTop: "10px",
    width: "100%",
    fontWeight: 800,
    color: "black",
    borderRadius: "10px",
    background: "linear-gradient(to right, #fa8128, #C8E9E9);",
    "&:hover": {
      background: "linear-gradient(to right, #C8E9E9, #fa8128);",
      transition: ".4s",
      boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
      borderRadius: "15px",
    },
  };

  const classe = buttonSty();

  return (
    <Container maxWidth="xs">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              background: "rgba(0, 21, 66, 0.95)",
              marginTop: 130,
              padding: 15,
            }}
          >
            <h1>XLB Token Faucet</h1>
            <br />
            <p>YOU MAY ONLY CLAIM ONCE PER DAY</p>
            <br />
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
              type="button"
              onClick={handleClaim}
            >
              Claim 100 XLB Tokens
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TokenFaucet;
