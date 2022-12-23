import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
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

const RewardInfo = () => {
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
                component="h2"
                style={{
                  color: "white",
                }}
              >
                $XLB
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
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
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h6"
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
                variant="h6"
                component="h2"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                style={{ width: "120px" }}
              >
                Claim
              </Button>
            </Box>
          </Paper>
        </Grid>
      )}
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              borderStyle: "double",
              borderColor: "#fa8128",
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                $XLB
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
                variant="h6"
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
