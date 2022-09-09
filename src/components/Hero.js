import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Rebase from "./Rebase";

import { useAccount } from "wagmi";
import { useContractXLBRead } from "../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

const fontStyles = makeStyles((theme) => ({
  hTitle: {
    padding: theme.spacing(1),
    color: "#000",
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
  const { data: balanceRaw } = useContractXLBRead("balanceOf", address);

  const balance = useMemo(
    () =>
      balanceRaw
        ? ethers.utils.formatEther(balanceRaw.sub(balanceRaw.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [balanceRaw]
  );

  const buttonStyles = {
    width: 150,
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

  //const rebaseRate = 1.462306651;

  const dailyRoi = useMemo(() => {
    if (!balanceRaw) return "n/a";
    const daily = balanceRaw
      .div(ethers.BigNumber.from("100000000000"))
      .mul(ethers.BigNumber.from("1462306651"));
    return ethers.utils.formatEther(daily.sub(daily.mod(1e14)));
  }, [balanceRaw]);

  return (
    <>
      <Grid item xs={12} className={classes.hTitle}>
        {matches && (
          <Paper
            elevation={10}
            style={{
              marginTop: 40,
              paddingTop: 30,
              paddingBottom: 30,
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                  <img
                    src="../flame.svg"
                    alt=""
                    className="imgT"
                    style={{
                      width: 20,
                    }}
                  />
                </Box>
                <Link to="./swap">
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                  >
                    Buy XLB
                  </Button>
                </Link>
                <br />
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
                    marginRight: 5,
                    color: "#C8E9E9",
                  }}
                >
                  Holdings
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h2"
                  component="h2"
                  style={{
                    marginRight: 5,
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
                <Box paddingY={2}>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      textAlign: "center",
                      color: "#C8E9E9",
                    }}
                  >
                    {balance}
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
                    color: "#C8E9E9",
                  }}
                >
                  Daily Earnings
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h2"
                  component="h2"
                  style={{
                    marginRight: 5,
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
                <Box paddingY={2}>
                  <Typography
                    className={classes.hTitle}
                    variant="subtitle2"
                    component="h2"
                    style={{
                      textAlign: "center",
                      color: "#C8E9E9",
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
        )}
        {!matches && (
          <Paper
            elevation={10}
            style={{
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                <Link to="./swap">
                  <Button
                    className={classe.buttonS}
                    variant="contained"
                    sx={buttonStyles}
                  >
                    Buy XLB
                  </Button>
                </Link>
                <br />
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
                    color: "#C8E9E9",
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
                      color: "#C8E9E9",
                    }}
                  >
                    {balance}
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
                    color: "#C8E9E9",
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
                    color: "#000",
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
                      color: "#C8E9E9",
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
        )}
      </Grid>
    </>
  );
};

export default Hero;
