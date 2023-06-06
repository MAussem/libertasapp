import { Box, Grid, Typography, Paper } from "@mui/material";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const percentage = "24 hrs";

const BurnTimer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!matches && (
        <Grid item xs={4}>
          <Paper
            elevation={10}
            style={{
              marginTop: 10,
              marginBottom: 50,
              background: "#000",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  margin: 1,
                  width: 168,
                  height: 137,
                  display: "flex",
                }}
              >
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "blueviolet",
                    trailColor: "blueviolet",
                  })}
                />
              </Box>
              <Typography
                variant="h6"
                component="h2"
                style={{
                  marginRight: 25,
                  color: "#fff",
                }}
              >
                Count Down to Next Burn
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
              marginTop: -50,
              marginBottom: 50,
              background: "#000",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  margin: 1,
                  width: 168,
                  height: 137,
                  display: "flex",
                }}
              >
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "blueviolet",
                    trailColor: "blueviolet",
                  })}
                />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                style={{
                  marginLeft: 25,
                  color: "#fff",
                }}
              >
                Count Down to Next Burn
              </Typography>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default BurnTimer;
