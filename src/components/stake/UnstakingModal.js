import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import { StakingAbi } from "../../abi/staking";

import { useAccount } from "wagmi";
import { useContractStaking30Read } from "../../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

// import { getCurrentDate } from "../hooks/currentDate";

import Web3 from "web3";

const contractAddress = "0x31b41E3b75358a7ffbC031dE7F1e435DDCc8729b";

const fontStyles = makeStyles((theme) => ({
  hTitle: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [15, "!important"],
    },
  },
}));

const buttonSty = makeStyles((theme) => ({
  buttonS: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [14, "!important"],
    },
  },
}));

const UnstakingModal = () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  // state
  const [amount, setAmount] = useState(0);
  const [setStakeSuccess] = useState(false);
  const [inputStatus, setInputStatus] = useState(0);

  useEffect(() => {
    const checkWeb3 = async () => {
      if (web3.currentProvider.host === "http://localhost:8545") {
        console.log(
          "Please connect to a real Ethereum node to interact with this contract"
        );
        return;
      }
    };
    checkWeb3();
  }, [web3.currentProvider.host]);

  const handleUnstake = async () => {
    const contract = new web3.eth.Contract(StakingAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .unstake(amount)
      .send({ from: accounts[0] })
      .then(() => {
        setStakeSuccess(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { address } = useAccount();
  // const { data: balanceRaw } = useContractStakingRead("balanceOf", address);
  const { data: stakedBalance } = useContractStaking30Read("staked", [address]);

  const sBalance = useMemo(
    () =>
      stakedBalance
        ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [stakedBalance]
  );

  const vPower = useMemo(
    () =>
      stakedBalance
        ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
          " sXLB"
        : "n/a sXLB",
    [stakedBalance]
  );
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
  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xs">
      {!matches && (
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
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    paddingTop: 10,
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  Unstake
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    paddingTop: 10,
                    color: "#fff",
                  }}
                >
                  XLB
                </Typography>
              </Box>
              <hr />
              {/* <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    textDecoration: "underline",
                    fontWeight: 700,
                  }}
                >
                  Stake
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "grey",
                  }}
                >
                  Unstake
                </Typography>
              </Box> */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      marginTop: "2%",
                      color: "white",
                    }}
                  >
                    Select Amount
                  </Typography>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      marginTop: "2%",
                      color: "grey",
                    }}
                  >
                    Balance: {sBalance}
                  </Typography>
                </Box>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  onInput={(event) => setInputStatus(event.target.value)}
                  style={{
                    marginTop: "2%",
                    marginBottom: "3%",
                    color: "black",
                    width: "100%",
                    height: "45px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderStyle: "double",
                    borderColor: "rgb(167, 230, 255)",
                    background: "white",
                    borderRadius: "10px",
                  }}
                />
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  XLB APR
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  30%
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  ETH APR
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  0%
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  Staked Amount
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  {sBalance}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  Voting Power
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  {vPower}
                </Typography>
              </Box>
              {/* <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  Time Left
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  {sLockInDays} days
                </Typography>
                
              </Box> */}
              <Link to="/">
                <Button
                  disabled={!inputStatus}
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                  type="button"
                  onClick={handleUnstake}
                >
                  Unstake XLB
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* {console.log("stakedAmount:", amount)} */}
      {matches && (
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper
              elevation={10}
              style={{
                borderStyle: "double",
                borderColor: "#fa8128",
                background: "rgba(0, 21, 66, 0.651)",
                marginTop: 40,
                marginBottom: 40,
                padding: 15,
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    paddingTop: 10,
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  Stake
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    paddingTop: 10,
                    color: "#fff",
                  }}
                >
                  XLB
                </Typography>
              </Box>
              <hr />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    textDecoration: "underline",
                    fontWeight: 700,
                  }}
                >
                  Stake
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "grey",
                  }}
                >
                  Unstake
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      color: "white",
                    }}
                  >
                    Select Amount
                  </Typography>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      color: "grey",
                    }}
                  >
                    Balance: 0.00
                  </Typography>
                </Box>
                <input
                  type="text"
                  defaultValue="0.0"
                  style={{
                    marginTop: "2%",
                    marginBottom: "3%",
                    color: "black",
                    width: "100%",
                    height: "45px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderStyle: "double",
                    borderColor: "rgb(167, 230, 255)",
                    background: "white",
                    borderRadius: "10px",
                  }}
                ></input>
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  APY
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  5% - 9%
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  Staked Amount
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  0.00 XLB
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  Voting Power
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  0.00 $sXLB
                </Typography>
              </Box>
              {/* <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  Time Left
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    color: "white",
                  }}
                >
                  0 mark
                </Typography>
              </Box> */}
              <Link to="/">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                  type="button"
                >
                  Unstake XLB
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default UnstakingModal;
