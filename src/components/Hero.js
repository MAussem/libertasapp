import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { useAccount } from "wagmi";
import { useContractXLBRead, useContractStakingRead } from "../hooks/libertas";
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

const Hero = () => {
  const { address } = useAccount();
  const { data: balanceRaw } = useContractXLBRead("balanceOf", [address]);
  const { data: stakedBalance } = useContractStakingRead("staked", [address]);

  const balance = useMemo(
    () =>
      balanceRaw
        ? ethers.utils.formatEther(balanceRaw.sub(balanceRaw.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [balanceRaw]
  );

  const sBalance = useMemo(
    () =>
      stakedBalance
        ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [stakedBalance]
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

  //const rebaseRate = 1.46230695;

  // const dailyRoi = useMemo(() => {
  //   if (!balanceRaw) return "n/a";
  //   const daily = balanceRaw
  //     .div(ethers.BigNumber.from("100000000000"))
  //     .mul(ethers.BigNumber.from("146230695"));
  //   return ethers.utils.formatEther(daily.sub(daily.mod(1e14)));
  // }, [balanceRaw]);

  return (
    <>
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              background: "rgba(0, 21, 66, 0.95)",
              marginTop: 40,
              paddingTop: 30,
              paddingBottom: 30,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              paddingX={3}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                >
                  Portfolio
                </Typography>
                <Box
                  paddingX={1}
                  paddingY={2}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <img src="../flame.svg" alt="" className="imgT" />
                </Box>
                <a
                  href="https://lib-dex.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                  >
                    Buy XLB
                  </Button>
                </a>
                <br />
                <Link to="./staking">
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                  >
                    Stake XLB
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    marginTop: "25px",
                    color: "rgb(167, 230, 255)",
                    textAlign: "center",
                  }}
                >
                  Staked $XLB
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
                <Box paddingY={2}>
                  {/* <button onClick={() => fetchBalance()}>click me</button> */}
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "rgb(167, 230, 255)",
                      textAlign: "center",
                    }}
                  >
                    51294.295 $XLB
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    marginTop: "23px",
                    color: "rgb(167, 230, 255)",
                    textAlign: "center",
                  }}
                >
                  Available $XLB
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $5,231
                </Typography>
                <Box paddingY={2}>
                  {/* <button onClick={() => fetchBalance()}>click me</button> */}
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "rgb(167, 230, 255)",
                      textAlign: "center",
                    }}
                  >
                    333,312.878 $XLB
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      )}
      {!matches && (
        <Grid item xs={8}>
          <Paper
            elevation={10}
            style={{
              background: "rgba(0, 21, 66, 0.95)",
              marginTop: 40,
              paddingBottom: 15,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              padding={1}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                >
                  Portfolio
                </Typography>
                <Box
                  paddingX={1}
                  paddingY={2}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <img src="../flame.svg" alt="" className="imgT" />
                </Box>
                <a
                  href="https://lib-dex.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                  >
                    Buy XLB
                  </Button>
                </a>
                <br />
                {/* {active ? 
              <Button variant="outlined" onClick={disconnectMeta} 
              sx={buttonStyles}> 
                Disconnect 
              </Button> :
              <Button variant="contained" onClick={connectMeta}
              sx={buttonStyles}>
                Connect Wallet
              </Button>
              } */}
                <Link to="./staking">
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                  >
                    Stake XLB
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "-5%",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    marginTop: "25px",
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  Staked $XLB
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
                <Box paddingY={2}>
                  {/* <button onClick={() => fetchBalance()}>click me</button> */}
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "rgb(167, 230, 255)",
                    }}
                  >
                    {/* change this 11111 */}
                    {sBalance}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    marginTop: "25px",
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  Available $XLB
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
                <Box paddingY={2}>
                  {/* <button onClick={() => fetchBalance()}>click me</button> */}
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle1"
                    component="h2"
                    style={{
                      color: "rgb(167, 230, 255)",
                    }}
                  >
                    {balance}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default Hero;
