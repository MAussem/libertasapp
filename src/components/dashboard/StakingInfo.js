import { Grid, Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { useAccount } from "wagmi";
import {
  useContractStaking30Read,
  useContractStaking60Read,
  useContractStaking90Read,
  useContractStaking180Read,
  useContractStaking365Read,
} from "../../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

const StakingInfo = () => {
  const { address } = useAccount();
  // const { data: balanceRaw } = useContractXLBRead("balanceOf", [address]);
  const { data: stakedBalance } = useContractStaking30Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance60 } = useContractStaking60Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance90 } = useContractStaking90Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance180 } = useContractStaking180Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance365 } = useContractStaking365Read("stakedTokens", [
    address,
  ]);

  // const balance = useMemo(
  //   () =>
  //     balanceRaw
  //       ? ethers.utils.formatEther(balanceRaw.sub(balanceRaw.mod(1e14))) +
  //         " XLB"
  //       : "n/a XLB",
  //   [balanceRaw]
  // );

  const sBalance = useMemo(
    () =>
      stakedBalance
        ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [stakedBalance]
  );

  const sBalance60 = useMemo(
    () =>
      stakedBalance60
        ? ethers.utils.formatEther(
            stakedBalance60.sub(stakedBalance60.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance60]
  );

  const sBalance90 = useMemo(
    () =>
      stakedBalance90
        ? ethers.utils.formatEther(
            stakedBalance90.sub(stakedBalance90.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance90]
  );

  const sBalance180 = useMemo(
    () =>
      stakedBalance180
        ? ethers.utils.formatEther(
            stakedBalance180.sub(stakedBalance180.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance180]
  );

  const sBalance365 = useMemo(
    () =>
      stakedBalance365
        ? ethers.utils.formatEther(
            stakedBalance365.sub(stakedBalance365.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance365]
  );
  const fontStyles = makeStyles((theme) => ({
    hTitle: {
      color: "#fff",
      padding: theme.spacing(0),
      [theme.breakpoints.down("md")]: {
        fontSize: [13, "!important"],
      },
    },
  }));
  const useStylesLink = makeStyles({
    hTitle: {
      "& a": {
        color: "blueviolet",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  });

  const classesL = useStylesLink();
  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              marginTop: "-25px",
              textAlign: "center",
              padding: 15,
              background: "#000",
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                paddingTop: 5,
                paddingBottom: 15,
              }}
            >
              My Voting Power
            </Typography>
            <hr />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className={classesL.hTitle}
                variant="subtitle2"
                component="h2"
                style={{
                  marginTop: 15,
                  paddingBottom: 70,
                }}
              >
                <a href="https://libertas-finance.gitbook.io/libertasfinance/">
                  Learn more on Libertas Finance governance &#8594;
                </a>
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  My Locked XLB
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  {Number(sBalance.replace(" XLB", "")) +
                    Number(sBalance60.replace(" XLB", "")) +
                    Number(sBalance90.replace(" XLB", "")) +
                    Number(sBalance180.replace(" XLB", "")) +
                    Number(sBalance365.replace(" XLB", ""))}{" "}
                  XLB
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  My sXLB Balance
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  {Number(sBalance.replace(" XLB", "")) +
                    Number(sBalance60.replace(" XLB", "")) +
                    Number(sBalance90.replace(" XLB", "")) +
                    Number(sBalance180.replace(" XLB", "")) +
                    Number(sBalance365.replace(" XLB", ""))}{" "}
                  sXLB
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      )}
      {!matches && (
        <Grid item xs={4}>
          <Paper
            elevation={10}
            style={{
              textAlign: "center",
              marginTop: 30,
              padding: 15,
              background: "#000",
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                paddingTop: 5,
                paddingBottom: 15,
              }}
            >
              My Voting Power
            </Typography>
            <hr />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className={classesL.hTitle}
                variant="subtitle2"
                component="h2"
                style={{
                  marginTop: 15,
                  paddingBottom: 70,
                }}
              >
                <a href="https://libertas-finance.gitbook.io/libertasfinance/">
                  Learn more on Libertas Finance governance &#8594;
                </a>
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  My Locked XLB
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  {Number(sBalance.replace(" XLB", "")) +
                    Number(sBalance60.replace(" XLB", "")) +
                    Number(sBalance90.replace(" XLB", "")) +
                    Number(sBalance180.replace(" XLB", "")) +
                    Number(sBalance365.replace(" XLB", ""))}{" "}
                  XLB
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  My sXLB Balance
                </Typography>

                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                  }}
                >
                  {Number(sBalance.replace(" XLB", "")) +
                    Number(sBalance60.replace(" XLB", "")) +
                    Number(sBalance90.replace(" XLB", "")) +
                    Number(sBalance180.replace(" XLB", "")) +
                    Number(sBalance365.replace(" XLB", ""))}{" "}
                  sXLB
                </Typography>
              </Box>
            </Box>
            {/* <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  
                }}
              >
                Sell Tax
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  
                }}
              >
                10%
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  
                }}
              >
                Transfer Tax
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  
                }}
              >
                10%
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  
                }}
              >
                Max Tokens Per Sell
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  paddingBottom: 10,
                  
                }}
              >
                $25,000
              </Typography>
            </Box> */}
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default StakingInfo;
