import { Grid, Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const PriceInfo = () => {
  const fontStyles = makeStyles((theme) => ({
    hTitle: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [13, "!important"],
      },
    },
  }));

  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!matches && (
        <Grid item xs={8}>
          <Paper
            elevation={10}
            style={{
              background: "rgba(0, 21, 66, 0.95)",
              marginTop: "-205px",
              padding: 15,
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                textAlign: "center",
                color: "rgb(167, 230, 255)",
                paddingBottom: 15,
              }}
            >
              Price Info
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
                    color: "#fff",
                  }}
                >
                  $XLB Price
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
                    color: "#fff",
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
                    color: "#fff",
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
                  }}
                >
                  {/* change this 1111 */}
                  0.0 &#40;$XLB&#41;
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
                    color: "#fff",
                  }}
                >
                  Total Supply
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  555,000,000 &#40;$XLB&#41;
                </Typography>
              </Box>
            </Box>

            <Typography
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
                  color: "#fff",
                }}
              >
                Staked $XLB value
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
                  color: "#fff",
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
                  color: "#fff",
                }}
              >
                Staking Pool Option
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {/* change this 111 */}0 days
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
                  color: "#fff",
                }}
              >
                Annualized Reward
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {/* change this 111 */}
                0%
              </Typography>
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
                textAlign: "center",
                color: "rgb(167, 230, 255)",
              }}
            >
              Price Info
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
                    color: "#fff",
                  }}
                >
                  $XLB Price
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
                    color: "#fff",
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
                    color: "#fff",
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
                  }}
                >
                  {/* change this 1111 */}
                  0.0 &#40;$XLB&#41;
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
                    color: "#fff",
                  }}
                >
                  Total Supply
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  555,000,000 &#40;$XLB&#41;
                </Typography>
              </Box>
            </Box>

            <Typography
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
                  color: "#fff",
                }}
              >
                Staked $XLB value
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
                  color: "#fff",
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
                  color: "#fff",
                }}
              >
                Staking Pool Option
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {/* change this 111 */}0 days
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
                  color: "#fff",
                }}
              >
                Annualized Reward
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                {/* change this 111 */}
                0%
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default PriceInfo;
