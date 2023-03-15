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
      fontSize: [17, "!important"],
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

const Disclaimer2 = () => {
  const [web3, setWeb3] = useState(null);
  // const [contractInstance, setContractInstance] = useState(null);
  const [setStakeRewards] = useState(false);
  const [btnStatus, setBtnStatus] = useState(true);
  const [timeUntilUnstake, setTimeUntilUnstake] = useState(0);

  useEffect(() => {
    // Check if the user has metamask installed and is logged in
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      const contractAddress = "0x31b41E3b75358a7ffbC031dE7F1e435DDCc8729b";
      const contractInstance = new web3.eth.Contract(
        StakingAbi,
        contractAddress
      );
      // setContractInstance(contractInstance);
      const getTimeUntilUnstake = async () => {
        const account = await web3.eth.getAccounts();
        const time = await contractInstance.methods
          .timeUntilUnstake(account[0])
          .call();
        setTimeUntilUnstake(time);
      };
      getTimeUntilUnstake();
    } else {
      console.log("You need to install metamask");
    }
  }, []);

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);

    var dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? " hr, " : " hrs, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " min " : " mins ") : "";
    return dDisplay + hDisplay + mDisplay;
  }

  const displayTimeUntilUnstake = secondsToDhms(timeUntilUnstake);

  function handleCheckbox(e) {
    const elements = document.getElementsByName("checkbox");
    let checkedCount = 0;
    elements.forEach((element) => {
      if (element.checked) {
        checkedCount++;
      }
    });
    if (checkedCount > 1 || checkedCount === 0) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  }

  const handleStakeRewards = async () => {
    const contract = new web3.eth.Contract(StakingAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stakeRewards()
      .send({ from: accounts[0] })
      .then(() => {
        setStakeRewards(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { address } = useAccount();
  // const { data: balanceRaw } = useContractStakingRead("balanceOf", address);
  const { data: earnedBalance } = useContractStaking30Read("earned", [address]);

  const eBalance = useMemo(
    () =>
      earnedBalance
        ? ethers.utils.formatEther(earnedBalance.sub(earnedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [earnedBalance]
  );

  const buttonStyles = {
    margin: "10px",
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
                  Stake Rewards
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
                    {eBalance}
                  </Typography>
                </Box>
                {/* <Box
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
                    
                    {sLockInDays} Days
                  </Typography>
                </Box> */}
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
                  Unlock Time
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
                  {displayTimeUntilUnstake}
                </Typography>
              </Box>
              {/* {console.log("date", date)} */}
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
                  capitalize
                  style={{
                    paddingBottom: 10,
                    color: "white",
                    textTransform: "uppercase",
                  }}
                >
                  Disclaimer:
                  <input
                    name="checkbox"
                    type="checkbox"
                    onChange={handleCheckbox}
                  />
                  I acknowledge that my XLB reward tokens will be locked for the
                  rest of the current staking period &#40;
                  {displayTimeUntilUnstake}&#41; and I will not be able to
                  unstake my XLB tokens before the unlock time has expired.
                </Typography>
              </Box>

              <Box
                style={{
                  marginTop: 15,
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link to="/">
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                    type="button"
                  >
                    Cancel
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    className={classe.buttonS}
                    disabled={btnStatus}
                    variant="contained"
                    sx={buttonStyles}
                    type="button"
                    onClick={handleStakeRewards}
                  >
                    Compound XLB
                  </Button>
                </Link>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* {console.log("stakedAmount:", sAmount)}
      {console.log("locktime:", sLockInDays)} */}
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
                  Stake Rewards
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
                  Stake Rewards
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
                    variant="h4"
                    component="h5"
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
                    {eBalance}
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
                  Stake XLB
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Disclaimer2;
