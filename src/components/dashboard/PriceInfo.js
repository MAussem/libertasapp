import { Grid, Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// import { useAccount } from "wagmi";
import {
  useContractStaking30Read,
  useContractStaking60Read,
  useContractStaking90Read,
  useContractStaking180Read,
  useContractStaking365Read,
} from "../../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

const PriceInfo = () => {
  // const { address } = useAccount();
  // const { data: stakedBalance } = useContractStaking30Read("stakedTokens", [
  //   address,
  // ]);
  // const { data: stakedBalance60 } = useContractStaking60Read("stakedTokens", [
  //   address,
  // ]);
  // const { data: stakedBalance90 } = useContractStaking90Read("stakedTokens", [
  //   address,
  // ]);
  // const { data: stakedBalance180 } = useContractStaking180Read("stakedTokens", [
  //   address,
  // ]);
  // const { data: stakedBalance365 } = useContractStaking365Read("stakedTokens", [
  //   address,
  // ]);

  // const sBalance = useMemo(
  //   () =>
  //     stakedBalance
  //       ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
  //         " XLB"
  //       : "n/a XLB",
  //   [stakedBalance]
  // );

  // const sBalance60 = useMemo(
  //   () =>
  //     stakedBalance60
  //       ? ethers.utils.formatEther(
  //           stakedBalance60.sub(stakedBalance60.mod(1e14))
  //         ) + " XLB"
  //       : "n/a XLB",
  //   [stakedBalance60]
  // );

  // const sBalance90 = useMemo(
  //   () =>
  //     stakedBalance90
  //       ? ethers.utils.formatEther(
  //           stakedBalance90.sub(stakedBalance90.mod(1e14))
  //         ) + " XLB"
  //       : "n/a XLB",
  //   [stakedBalance90]
  // );

  // const sBalance180 = useMemo(
  //   () =>
  //     stakedBalance180
  //       ? ethers.utils.formatEther(
  //           stakedBalance180.sub(stakedBalance180.mod(1e14))
  //         ) + " XLB"
  //       : "n/a XLB",
  //   [stakedBalance180]
  // );

  // const sBalance365 = useMemo(
  //   () =>
  //     stakedBalance365
  //       ? ethers.utils.formatEther(
  //           stakedBalance365.sub(stakedBalance365.mod(1e14))
  //         ) + " XLB"
  //       : "n/a XLB",
  //   [stakedBalance365]
  // );

  const fontStyles = makeStyles((theme) => ({
    hTitle: {
      color: "#fff",
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [13, "!important"],
      },
    },
  }));

  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { data: totalStaked } = useContractStaking30Read("totalStaked");
  const { data: totalStaked60 } = useContractStaking60Read("totalStaked");
  const { data: totalStaked90 } = useContractStaking90Read("totalStaked");
  const { data: totalStaked180 } = useContractStaking180Read("totalStaked");
  const { data: totalStaked365 } = useContractStaking365Read("totalStaked");

  const sTotalStaked = useMemo(
    () =>
      totalStaked
        ? ethers.utils.formatEther(totalStaked.sub(totalStaked.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked]
  );

  const sTotalStaked60 = useMemo(
    () =>
      totalStaked60
        ? ethers.utils.formatEther(totalStaked60.sub(totalStaked60.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked60]
  );

  const sTotalStaked90 = useMemo(
    () =>
      totalStaked90
        ? ethers.utils.formatEther(totalStaked90.sub(totalStaked90.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked90]
  );

  const sTotalStaked180 = useMemo(
    () =>
      totalStaked180
        ? ethers.utils.formatEther(
            totalStaked180.sub(totalStaked180.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [totalStaked180]
  );

  const sTotalStaked365 = useMemo(
    () =>
      totalStaked365
        ? ethers.utils.formatEther(
            totalStaked365.sub(totalStaked365.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [totalStaked365]
  );

  const total = useMemo(() => {
    const values = [
      sTotalStaked,
      sTotalStaked60,
      sTotalStaked90,
      sTotalStaked180,
      sTotalStaked365,
    ];
    const filteredValues = values.filter((value) => value !== "n/a XLB");
    const total = filteredValues.reduce((acc, value) => {
      const amount = parseFloat(value.split(" ")[0]);
      return acc + amount;
    }, 0);
    return total.toFixed(4) + " XLB";
  }, [
    sTotalStaked,
    sTotalStaked60,
    sTotalStaked90,
    sTotalStaked180,
    sTotalStaked365,
  ]);

  return (
    <>
      {!matches && (
        <Grid item xs={8}>
          <Paper
            elevation={10}
            style={{
              background: "#000",
              padding: 15,
              marginTop: -18,
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                textAlign: "center",
                paddingTop: 5,
                paddingBottom: 15,
              }}
            >
              General Token Information
            </Typography>
            <hr />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                >
                  XLB Price
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0.0
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
                  }}
                >
                  Market Cap
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: 700,
                    paddingBottom: 10,
                  }}
                >
                  $0.0
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
                  }}
                >
                  Total Staked
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: 700,
                    paddingBottom: 10,
                  }}
                >
                  {total}
                </Typography>
              </Box>
              <Box
                sx={{
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
                  Total Supply
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    paddingBottom: 10,
                    fontWeight: 700,
                  }}
                >
                  555,000,000 &#40;XLB&#41;
                </Typography>
              </Box>
            </Box>

            {/* <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                paddingTop: 20,
                paddingBottom: 15,
                textAlign: "center",
                color: "rgb(167, 230, 255)",
              }}
            >
              Snapshots Taken at the Time of Staking
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
                  
                }}
              >
                Staked XLB Value
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                $0.00
              </Typography>
            </Box> */}
            {/* <Box
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
                  
                }}
              >
                Staking Pool Size
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                $0 &#40;DAI&#41;
              </Typography>
            </Box> */}
            {/* <Box
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
                  
                }}
              >
                Staking Pool Option 1
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {sBalance} - Staked in 30 Day Pool
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
                  
                }}
              >
                Staking Pool Option 2
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {sBalance60} - Staked in 60 Day Pool
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
                  
                }}
              >
                Staking Pool Option 3
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {sBalance90} - Staked in 90 Day Pool
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
                  
                }}
              >
                Staking Pool Option 4
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {sBalance180} - Staked in 180 Day Pool
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
                  
                }}
              >
                Staking Pool Option 5
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {sBalance365} - Staked in 365 Day Pool
              </Typography>
            </Box> */}
            {/* <Box
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
                  
                }}
              >
                Annualized ETH Reward 30 Day
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                6.26%
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
                  
                }}
              >
                Annualized ETH Reward 60 Day
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                6.88%
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
                  
                }}
              >
                Annualized ETH Reward 90 Day
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                
                7.93%
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
                  
                }}
              >
                Annualized ETH Reward 180 Day
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                
                8.28%
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
                  
                }}
              >
                Annualized ETH Reward 365 Day
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                
                10.00%
              </Typography>
            </Box> */}
          </Paper>
        </Grid>
      )}
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              background: "#fff",
              padding: 15,
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                color: "#000",
                textAlign: "center",
              }}
            >
              General Token Information
            </Typography>
            <hr />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                    color: "#000",
                  }}
                >
                  XLB Price
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  $0.0
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
                    color: "#000",
                  }}
                >
                  Market Cap
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  $0.0
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
                    color: "#000",
                  }}
                >
                  Total Staked
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  {/* change this 1111 */}
                  0.0 &#40;XLB&#41;
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
                    color: "#000",
                  }}
                >
                  Total Supply
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  555,000,000 &#40;XLB&#41;
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default PriceInfo;
