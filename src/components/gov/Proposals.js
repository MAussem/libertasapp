import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Proposals = () => {
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
  const paperStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "3%",
    borderRadius: "10px",
    background: "#000",
    "&:hover": {
      cursor: "pointer",
    },
  };
  return (
    <>
      {!matches && (
        <Grid item xs={4}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              marginTop: "15%",
              marginBottom: "1%",
              color: "#fff",
            }}
          >
            Proposals
          </Typography>
          <Paper elevation={10} sx={paperStyles}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  margin: "3%",
                  color: "#fff",
                }}
              >
                0x6d49...Gr8a
              </Typography>
              <Box
                style={{
                  marginTop: "5%",
                  marginLeft: "210px",
                }}
              >
                <Button sx={buttonStyles}>Closed</Button>
              </Box>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginLeft: "3%",
                color: "#fff",
              }}
            >
              Libertas Finance Poll 1
            </Typography>
            <Typography
              variant="subtitle2"
              component="h2"
              sx={{
                margin: "3%",
                color: "#fff",
              }}
            >
              Libertas plans to share 2.5 of treasury. Does the community want
              to see this increased?
            </Typography>
          </Paper>
          <Paper elevation={10} sx={paperStyles}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  margin: "3%",
                  color: "#fff",
                }}
              >
                0x2c19...Hv3b
              </Typography>
              <Box
                style={{
                  marginTop: "5%",
                  marginLeft: "210px",
                }}
              >
                <Button sx={buttonStyles}>Closed</Button>
              </Box>
            </Box>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginLeft: "3%",
                marginTop: "-2%",
                color: "#fff",
              }}
            >
              Libertas Finance Poll 2
            </Typography>
            <Typography
              variant="subtitle2"
              component="h2"
              sx={{
                margin: "3%",
                color: "#fff",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </Paper>
        </Grid>
      )}
      {matches && (
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              marginBottom: "1%",
              color: "#fff",
            }}
          >
            Proposals
          </Typography>
          <Paper elevation={10} sx={paperStyles}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  margin: "3%",
                  color: "#fff",
                }}
              >
                0x6d49...Gr8a
              </Typography>
              <Box
                style={{
                  marginTop: "5%",
                  marginLeft: "210px",
                }}
              >
                <Button sx={buttonStyles} style={{ marginLeft: "-120px" }}>
                  Closed
                </Button>
              </Box>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginTop: "2%",
                marginLeft: "3%",
                color: "#fff",
              }}
            >
              Libertas Finance Poll 1
            </Typography>
            <Typography
              variant="subtitle2"
              component="h2"
              sx={{
                margin: "3%",
                color: "#fff",
              }}
            >
              Libertas plans to share 2.5 of treasury. Does the community want
              to see this increased?
            </Typography>
          </Paper>
          <Paper
            elevation={10}
            sx={paperStyles}
            style={{ marginBottom: "10%" }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  margin: "3%",
                  color: "#fff",
                }}
              >
                0x2c19...Hv3b
              </Typography>
              <Box
                style={{
                  marginTop: "5%",
                  marginLeft: "210px",
                }}
              >
                <Button sx={buttonStyles} style={{ marginLeft: "-120px" }}>
                  Closed
                </Button>
              </Box>
            </Box>

            <Typography
              variant="h5"
              component="h2"
              sx={{
                marginLeft: "3%",
                marginTop: "2%",
                color: "#fff",
              }}
            >
              Libertas Finance Poll 2
            </Typography>
            <Typography
              variant="subtitle2"
              component="h2"
              sx={{
                margin: "3%",
                color: "#fff",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default Proposals;
