import { Grid, Paper, Typography, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Burned = () => {
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
              marginTop: 10,
              background: "rgba(0, 21, 66, 0.95)",
            }}
          >
            <Box
              sx={{
                padding: 3,
                textAlign: "center",
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                style={{
                  color: "rgb(167, 230, 255)",
                }}
              >
                &#128293; Total Tokens Burned To Date &#128293;
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                0
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
              marginBottom: 50,
              background: "rgba(0, 21, 66, 0.95)",
            }}
          >
            <Box
              sx={{
                padding: 3,
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="h2"
                style={{
                  color: "rgb(167, 230, 255)",
                }}
              >
                &#128293; Total Tokens Burned To Date &#128293;
              </Typography>
              <Typography
                className={classes.hTitle}
                variant="h2"
                component="h2"
                style={{
                  fontWeight: 700,
                }}
              >
                0
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default Burned;
