import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import { StakingAbi } from "../abi/staking";

import { useAccount } from "wagmi";
import { useContractStakingRead } from "../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

// import { getCurrentDate } from "../hooks/currentDate";

import Web3 from "web3";

const contractAddress = "0xd33069d6d59688255784BE48c726aFb9DAFB070A";

const fontStyles = makeStyles((theme) => ({
  hTitle: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [13, "!important"],
    },
  },
}));

const buttonSty = makeStyles((theme) => ({
  buttonS: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [10, "!important"],
    },
  },
}));

const StakingModal = () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  // state
  // const [date] = useState(getCurrentDate());
  // const [mark, setMark] = useState(0);
  const [lock] = useState(0);

  const [amount] = useState(0);
  const [lockInDays] = useState(0);
  const [stakeSuccess, setStakeSuccess] = useState(false);

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

  const handleStake = async () => {
    const contract = new web3.eth.Contract(StakingAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stake(amount, lockInDays)
      .send({ from: accounts[0] })
      .then(() => {
        setStakeSuccess(true);
        console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleDate = () => {
  //   if (mark === 30) {
  //     let newDate = new Date();
  //     newDate.setDate(newDate.getDate() + 30);
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth() + 1;
  //     let year = newDate.getFullYear();
  //     setDate(`${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`);
  //   }
  //   if (mark === 60) {
  //     let newDate = new Date();
  //     newDate.setDate(newDate.getDate() + 60);
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth() + 1;
  //     let year = newDate.getFullYear();
  //     setDate(`${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`);
  //   }
  //   if (mark === 90) {
  //     let newDate = new Date();
  //     newDate.setDate(newDate.getDate() + 90);
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth() + 1;
  //     let year = newDate.getFullYear();
  //     setDate(`${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`);
  //   }
  //   if (mark === 180) {
  //     let newDate = new Date();
  //     newDate.setDate(newDate.getDate() + 180);
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth() + 1;
  //     let year = newDate.getFullYear();
  //     setDate(`${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`);
  //   }
  //   if (mark === 365) {
  //     let newDate = new Date();
  //     newDate.setDate(newDate.getDate() + 365);
  //     let date = newDate.getDate();
  //     let month = newDate.getMonth() + 1;
  //     let year = newDate.getFullYear();
  //     setDate(`${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`);
  //   }
  // };

  // const handleMark = (event) => {
  //   // 👇 Get input value from "event"
  //   setMark(event.target.value);
  // };

  // const handleLock = (event) => {
  //   // 👇 Get input value from "event"
  //   setLock(event.target.value);
  // };

  const { address } = useAccount();
  // const { data: balanceRaw } = useContractStakingRead("balanceOf", address);
  const { data: stakedBalance } = useContractStakingRead("staked", [address]);

  const sBalance = useMemo(
    () =>
      stakedBalance
        ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [stakedBalance]
  );

  // const balance = useMemo(
  //   () =>
  //     balanceRaw
  //       ? ethers.utils.formatEther(balanceRaw.sub(balanceRaw.mod(1e14))) +
  //         " XLB"
  //       : "n/a XLB",
  //   [balanceRaw]
  // );
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

  // const marks = [
  //   {
  //     value: 30,
  //   },
  //   {
  //     value: 60,
  //   },
  //   {
  //     value: 90,
  //   },
  //   {
  //     value: 180,
  //   },
  //   {
  //     value: 365,
  //   },
  // ];

  return (
    <Container maxWidth="md">
      {!matches && (
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper
              elevation={10}
              style={{
                background: "rgba(0, 21, 66, 0.95)",
                marginTop: 40,
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
                  $XLB
                </Typography>
              </Box>
              <hr />
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
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "white",
                    }}
                  >
                    Amount to be Staked
                  </Typography>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "grey",
                    }}
                  >
                    {amount} $XLB
                  </Typography>
                </Box>

                {console.log("lock", lock)}
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "white",
                    }}
                  >
                    Time Period Chosen
                  </Typography>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "grey",
                    }}
                  >
                    30 Days
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                ></Box>
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
                  Unlock Date
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
                  2023-02-30
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
                  Disclaimer: <Checkbox /> I acknowledge that my $XLB tokens
                  will be locked for 30 days 2023-02-30 and I will not be able
                  to unstake my $XLB tokens before the unlock date.
                </Typography>
              </Box>
              {/* <Link to="/"> */}
              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
                type="button"
                onClick={handleStake}
              >
                Stake $XLB
              </Button>
              {/* </Link> */}
              {stakeSuccess && <p>Staking successful</p>}
            </Paper>
          </Grid>
        </Grid>
      )}
      {console.log("stakedAmount:", amount)}
      {console.log("locktime:", lockInDays)}
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
                  $XLB
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
                    Amount to be Staked
                  </Typography>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      color: "grey",
                    }}
                  >
                    {sBalance} $XLB
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
                <Typography
                  className={classes.hTitle}
                  variant="subtitle2"
                  component="h2"
                  style={{
                    color: "white",
                  }}
                >
                  Stake Duration &#40;max 27 months&#41;
                </Typography>
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
                    borderColor: "#fa8128",
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
                  Locked Amount
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
                  0.00 $XLB
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
                  Lock Until
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
                  12/14/2023
                </Typography>
              </Box>
              <Link to="/">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                  type="button"
                >
                  Stake $XLB
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default StakingModal;
