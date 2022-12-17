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
    marginRight: "15px",
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
      <Grid item xs={4} className={classes.hTitle}>
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
          <Typography
            className={classes.hTitle}
            variant="h5"
            component="h2"
            style={{
              paddingTop: 10,
              paddingBottom: 10,
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
              $ETH &#40;WETH&#41;
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
              Loyalty Points
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
              0.0000
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
              Staked Loyalty Points
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
              0.0000
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
              justifyContent: "flex-start",
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
            >
              Claim
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default RewardInfo;
