import React from "react";
// import { Link } from "react-router-dom";
import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

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
    <Container maxWidth="md">
      <Grid container spacing={5}>
        <Grid item xs={5} className={classes.hTitle}>
          <Paper
            elevation={10}
            style={{
              borderStyle: "double",
              borderColor: "#fa8128",
              background: "rgba(0, 21, 66, 0.651)",
              marginTop: 40,
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
                  You have <mark className="red">0.00</mark> USDC of pending
                  fees to claim.
                </Typography>

                {/* takes user to meta mask to accept the rewards */}
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Go to claim fees
                </Button>
                <br />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.hTitle}>
          <Paper
            elevation={10}
            style={{
              borderStyle: "double",
              borderColor: "#fa8128",
              background: "rgba(0, 21, 66, 0.651)",
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
                0 days
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
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Increase amount and lock time
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StakingModal;
