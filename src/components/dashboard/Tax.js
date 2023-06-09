import { Grid, Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Tax = () => {
  const fontStyles = makeStyles((theme) => ({
    hTitle: {
      color: "#000",
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
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
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
                paddingTop: 10,
                paddingBottom: 10,
                color: "#fff",
              }}
            >
              Tax
            </Typography>
            <hr />
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
                  color: "#fff",
                  paddingBottom: 10,
                }}
              >
                Buy Tax
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{
                  color: "#fff",
                  paddingBottom: 10,
                }}
              >
                7%
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
                  color: "#fff",
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
                  color: "#fff",
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
                  color: "#fff",
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
                  color: "#fff",
                  paddingBottom: 10,
                }}
              >
                10%
              </Typography>
            </Box>
            <hr />
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
                  color: "#fff",
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
                  color: "#fff",
                  paddingBottom: 10,
                }}
              >
                $25,000
              </Typography>
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
              marginTop: -18,
              padding: 15,
              background: "#fff",
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
              Tax
            </Typography>
            <hr />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
              >
                Buy Tax
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
              >
                7%
              </Typography>
            </Box>
            <Box
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
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{}}
              >
                Max Tokens Per Sell
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="h6"
                component="h2"
                style={{}}
              >
                $25,000
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default Tax;
