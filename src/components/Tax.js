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
              textAlign: "center",
              padding: 15,
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                color: "#C8E9E9",
                fontWeight: 700,
              }}
            >
              Buy Tax
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#000",
                fontWeight: 700,
              }}
            >
              13%
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#C8E9E9",
                fontWeight: 700,
              }}
            >
              Sell Tax
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#000",
                fontWeight: 700,
              }}
            >
              20%
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#C8E9E9",
                fontWeight: 700,
              }}
            >
              Transfer Tax
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#000",
                fontWeight: 700,
              }}
            >
              13%
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#C8E9E9",
                fontWeight: 700,
              }}
            >
              Max Tokens Per Buy / Sell
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{
                paddingBottom: 10,
                color: "#000",
                fontWeight: 700,
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
              textAlign: "center",
              padding: 15,
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h6"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                color: "#C8E9E9",
                fontWeight: 700,
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
                color: "#000",
                fontWeight: 700,
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
                color: "#C8E9E9",
                fontWeight: 700,
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
                color: "#000",
                fontWeight: 700,
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
                color: "#C8E9E9",
                fontWeight: 700,
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
                color: "#000",
                fontWeight: 700,
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
                color: "#C8E9E9",
                fontWeight: 700,
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
                color: "#000",
                fontWeight: 700,
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
