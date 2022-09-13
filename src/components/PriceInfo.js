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

  const rebaseRate = 0.0302487;

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
            }}
          >
            <Box
              sx={{
                padding: 3,
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                  XLB PRICE
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                  Market Cap
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                  Daily ROI
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  1.462306651%
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  Next Rebase: {rebaseRate}
                </Typography>
                {/* <Typography variant="subtitle1" component="h2" style={{
              color: "rgb(167, 230, 255)"
            }}>
              5-day: 0.1774%
            </Typography> */}
                <Typography
                  className={classes.hTitle}
                  variant="subtitle1"
                  component="h2"
                  style={{
                    color: "rgb(167, 230, 255)",
                  }}
                >
                  Annual Rebase: 20009.07%
                </Typography>
              </Box>
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
            }}
          >
            <Box
              sx={{
                padding: 3,
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                  XLB PRICE
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
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
                  Market Cap
                </Typography>
                <Typography
                  className={classes.hTitle}
                  variant="h3"
                  component="h2"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  $0
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
