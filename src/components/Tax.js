import { Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Tax = () => {
  const fontStyles = makeStyles((theme) => ({
    hTitle: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: 17,
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
              borderStyle: "double",
              borderColor: "#fa8128",
              textAlign: "center",
              padding: 15,
              background: "rgba(0, 21, 66, 0.651)",
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
              }}
            >
              Buy Tax
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "white",
              }}
            >
              13%
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
              }}
            >
              Sell Tax
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "white",
              }}
            >
              20%
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
              }}
            >
              Transfer Tax
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "white",
              }}
            >
              13%
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
              }}
            >
              Max Tokens Per Buy / Sell
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "white",
              }}
            >
              869.23B / 1.50M
            </Typography>
          </Paper>
        </Grid>
      )}
      {!matches && (
        <Grid item xs={4}>
          <Paper
            elevation={10}
            style={{
              borderStyle: "double",
              borderColor: "#fa8128",
              textAlign: "center",
              padding: 15,
              background: "rgba(0, 21, 66, 0.651)",
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
              }}
            >
              Buy Tax
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
              13%
            </Typography>

            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
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
                color: "white",
              }}
            >
              20%
            </Typography>

            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
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
                color: "white",
              }}
            >
              13%
            </Typography>

            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "rgb(167, 230, 255)",
              }}
            >
              Max Tokens Per Buy / Sell
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
              869.23B / 1.50M
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default Tax;
