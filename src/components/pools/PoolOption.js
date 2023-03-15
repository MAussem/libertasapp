import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import TablePool from "./TablePool";
import RewardInfo from "./RewardInfo";

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

const PoolOption = () => {
  const [showAvailablePools, setShowAvailablePools] = useState(true);

  const handleAvailablePoolsClick = () => {
    setShowAvailablePools(true);
  };

  const handleYourPoolsClick = () => {
    setShowAvailablePools(false);
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
  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      {!matches && (
        <Grid container spacing={5}>
          <Grid item xs={4}>
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
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                  type="button"
                  style={{
                    margin: 10,
                  }}
                  onClick={handleAvailablePoolsClick}
                >
                  Available Pools
                </Button>
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                  type="button"
                  style={{
                    margin: 10,
                  }}
                  onClick={handleYourPoolsClick}
                >
                  Your Pools
                </Button>
              </Box>
            </Paper>
          </Grid>
          {showAvailablePools ? (
            <Grid item xs={12}>
              <Paper
                elevation={10}
                style={{
                  background: "rgba(0, 21, 66, 0.95)",
                  padding: 15,
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Typography
                    className={classes.hTitle}
                    variant="h5"
                    component="h2"
                    style={{
                      paddingTop: 10,
                      paddingBottom: 10,
                      color: "rgb(167, 230, 255)",
                      textAlign: "center",
                    }}
                  >
                    Click On a Pool to Stake
                  </Typography>
                </Box>
                <hr />
                <TablePool />
              </Paper>
            </Grid>
          ) : (
            <RewardInfo />
          )}
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
                  30 Day Pool
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default PoolOption;
