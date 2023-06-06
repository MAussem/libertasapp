import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GridTop from "../Grid";

const GovUserInfo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const buttonStyles = {
    marginTop: "2%",
    width: 100,
    fontWeight: 800,
    color: "black",
    borderRadius: "10px",
    background: "linear-gradient(to right, #fa8128, #C8E9E9);",
    "&:hover": {
      background: "linear-gradient(to right, #C8E9E9, #fa8128);",
      transition: ".4s",
      boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
      borderRadius: "15px",
    },
  };

  return (
    <>
      <GridTop />
      {!matches && (
        <Grid item xs={3}>
          <Paper
            className="paper"
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "33%",

              borderRadius: "10px",
              background: "#000",
            }}
          >
            <Box
              style={{
                marginTop: "10%",
              }}
            >
              <img src="../flame.svg" alt="" width={30} />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Libertas Finance
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                marginTop: "-2%",
                color: "#808080",
                textAlign: "center",
              }}
            >
              12K Members
            </Typography>
            <Button sx={buttonStyles}>Join</Button>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginTop: "2%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Proposals
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              New Proposal
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Treasury
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              About
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                marginBottom: "10%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Settings
            </Typography>
          </Paper>
        </Grid>
      )}
      {matches && (
        <Grid item xs={12}>
          <Paper
            className="paper"
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "13%",

              borderRadius: "10px",
              background: "rgba(0, 21, 66, 0.651)",
            }}
          >
            <Box
              style={{
                marginTop: "10%",
              }}
            >
              <img src="../flame.svg" alt="" width={30} />
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Libertas Finance
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                marginTop: "-2%",
                color: "#808080",
                textAlign: "center",
              }}
            >
              12K Members
            </Typography>
            <Button sx={buttonStyles}>Join</Button>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginTop: "2%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Proposals
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              New Proposal
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Treasury
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              About
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                margin: "1%",
                marginBottom: "10%",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Settings
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default GovUserInfo;
