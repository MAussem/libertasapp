import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Web3 from "web3";
import { StakingAbi } from "../abi/staking";

import { useAccount } from "wagmi";
import { useContractStakingRead } from "../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

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

const RewardInfo = () => {
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const { address } = useAccount();
  const { data: earnedBalance } = useContractStakingRead("earned", [address]);
  const [timeUntilUnstake, setTimeUntilUnstake] = useState(0);
  // const [contract, setContract] = useState(null);

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
      setContractInstance(contractInstance);
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

  const displayTimeUntilUnstake = secondsToDhms(timeUntilUnstake);

  const handleClaim = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await contractInstance.methods
      .claim()
      .send({ from: accounts[0] });
    console.log(result);
  };

  const eBalance = useMemo(
    () =>
      earnedBalance
        ? ethers.utils.formatEther(earnedBalance.sub(earnedBalance.mod(1e14))) +
          " $XLB"
        : "n/a $XLB",
    [earnedBalance]
  );

  const buttonStyles = {
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
  return (
    <>
      {!matches && (
        <Grid item xs={4} className={classes.hTitle}>
          <Paper
            elevation={10}
            style={{
              background: "rgba(0, 21, 66, 0.95)",
              marginTop: 40,
              padding: 15,
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 15,
                textAlign: "center",
                color: "rgb(167, 230, 255)",
              }}
            >
              Staking Rewards
            </Typography>
            <hr />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "#fff",
                }}
              >
                $XLB APY
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
              >
                30%
              </Typography>
            </Box>
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
                $XLB Earned
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
                {eBalance} &#40;$0.00&#41;
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "#fff",
                }}
              >
                Staking Pool Share
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
              >
                0%
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                // paddingBottom: 10,
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
                {/* change this 11111 */}
                ETH Rewards Collected
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
                {/* change this 11111 */}
                0.0000 &#40;$0.00&#41;
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                // paddingBottom: 10,
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
                Dividends Earned
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
                0.0000 &#40;$0.00&#41;
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
                Total
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
                {/* change this 11111 */}
                $0.00
              </Typography>
            </Box>
            <hr />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                // paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  // paddingBottom: 10,
                  color: "white",
                }}
              >
                Time Until Unstake
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  // paddingBottom: 10,
                  color: "white",
                }}
              >
                {displayTimeUntilUnstake}
                {console.log("timeUntilUnstake", timeUntilUnstake)}
              </Typography>
            </Box>
            <Box
              style={{
                marginTop: 5,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/disclaimer2">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Compound
                </Button>
              </Link>

              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
                style={{ width: "120px" }}
                onClick={handleClaim}
              >
                Claim
              </Button>
              <Link to="/unstaking">
                <Button
                  disabled={timeUntilUnstake !== 0}
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  UnStake
                </Button>
              </Link>
            </Box>
          </Paper>
        </Grid>
      )}
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              background: "rgba(0, 21, 66, 0.95)",
              padding: 15,
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 15,
                textAlign: "center",
                color: "rgb(167, 230, 255)",
              }}
            >
              Staking Rewards
            </Typography>
            <hr />
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
                $XLB APY
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
                $XLB Earned
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
                0.0000 &#40;$0.00&#41;
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
                Staking Pool Share
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
                1.8%
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
                ETH Rewards Collected
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
                0.0000 &#40;$0.00&#41;
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
                Dividends Earned
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
                0.0000 &#40;$0.00&#41;
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
                Total
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
                $0.00
              </Typography>
            </Box>
            <hr />
            <Box
              style={{
                marginTop: 15,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
              >
                Compound
              </Button>
              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
                style={{ width: "110px" }}
              >
                Claim
              </Button>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default RewardInfo;
