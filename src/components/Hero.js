import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Rebase from "./Rebase";
import { displayBalance } from "./Web3Client";

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

let selectedAccount;

const Hero = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const loadAccounts = async () => {
      let provider = window.ethereum;

      if (typeof provider !== "undefined") {
        provider
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            selectedAccount = accounts[0];
            console.log({ selectedAccount });
          })
          .catch((err) => {
            console.log(err);
          });

        window.ethereum.on("accountsChanged", function (accounts) {
          selectedAccount = accounts[0];
          console.log({ selectedAccount });
        });
      }
    };
    const fetchBalance = async () => {
      displayBalance()
        .then((balance) => {
          setBalance(balance);
          console.log({ balance });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadAccounts();
    fetchBalance();
  }, []);

  const buttonStyles = {
    fontWeight: 800,
    background: "linear-gradient(red, yellow);",
  };

  const classe = buttonSty();
  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const rebaseRate = 1.462306651;

  const dailyRoi = (balance / 100) * rebaseRate;

  return (
    <>
      <Grid item xs={12} className={classes.hTitle}>
        <Paper
          elevation={10}
          style={{
            borderStyle: "double",
            borderColor: "rgb(167, 230, 255, 0.2)",
            background: "rgba(0, 21, 66, 0.651)",
            marginTop: 40,
            paddingTop: 30,
            paddingBottom: 30,
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
                paddingX={4}
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
              {/* {active ? <div className='privatize2'>{account}</div> : <Typography variant="subtitle1" component="h2" style={{
                marginBottom: 10,
                color: "grey"
              }}> 
                Not Connected
              </Typography>} */}
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
              <a
                href="https://www.dextools.io/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  View Chart
                </Button>
              </a>
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
                  color: "rgb(167, 230, 255)",
                }}
              >
                Holdings
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h2"
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
                  {balance} XLB
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
                  color: "rgb(167, 230, 255)",
                }}
              >
                Daily Earnings
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h2"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                $0
              </Typography>
              <Box paddingY={2}>
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  {dailyRoi} XLB
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {!matches && <Rebase />}
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Hero;
