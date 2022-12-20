import { Grid, Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const PriceInfo = () => {
  const fontStyles = makeStyles((theme) => ({
    hTitle: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [17, "!important"],
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
              borderStyle: "double",
              borderColor: "#fa8128",
              background: "rgba(0, 21, 66, 0.651)",
              marginTop: "-170px",
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  $XLB Price
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0.812
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Market Cap
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $294,889,623
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Total Supply
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  13,000,000 &#40;$XLB&#41;
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Total Staked
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  3,023,945 &#40;$XLB&#41;
                </Typography>
              </Box>
            </Box>
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                APR
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                5% - 9%
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                Rewards
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                Loyalty Points APR
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                100%
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                Boost Percentage
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                $0.00
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
              borderStyle: "double",
              borderColor: "#fa8128",
              background: "rgba(0, 21, 66, 0.651)",
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  $XLB Price
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0.812
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Market Cap
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $294,889,623
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Total Supply
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  13,000,000 &#40;$XLB&#41;
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
                  variant="h5"
                  component="h2"
                  style={{
                    color: "#fff",
                  }}
                >
                  Total Staked
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h5"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  3,023,945 &#40;$XLB&#41;
                </Typography>
              </Box>
            </Box>
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                APR
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                5% - 9%
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                Rewards
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                Loyalty Points APR
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                100%
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
                variant="h5"
                component="h2"
                style={{
                  color: "#fff",
                }}
              >
                Boost Percentage
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                $0.00
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default PriceInfo;
