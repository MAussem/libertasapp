import { Box, Paper, Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import ProtocolInfo from "./ProtocolInfo";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DIP = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const buttonSty = makeStyles((theme) => ({
    buttonS: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [10, "!important"],
      },
    },
  }));

  const buttonStyles = {
    marginRight: "1%",
    marginTop: "5%",
    marginBottom: "10%",
    width: 120,
    fontWeight: 800,
    color: "#000",
    borderRadius: "10px",
    background: "linear-gradient(to right, #fa8128, #C8E9E9);",
    "&:hover": {
      background: "linear-gradient(to right, #C8E9E9, #fa8128);",
      transition: ".4s",
      boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
      borderRadius: "15px",
    },
  };

  const classe = buttonSty();

  return (
    <>
      <ProtocolInfo />
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{
          marginTop: "10px",
          textAlign: "center",
          color: "#fff",
          fontWeight: "700",
        }}
      >
        "This is Fictitious Data"
      </Typography>
      {!matches && (
        <Container maxWidth="xl">
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              marginTop: "5%",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            DeFi Protocols
          </Typography>
          <Grid xs={8}>
            <Paper
              className="paper"
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  DeFi Aggregator
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.5M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x7
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Pre-Seed
              </Typography>
              <Link to="/defi-agg">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "5%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Decentralised Exchange
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $2.2M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x5
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Pre-Seed
              </Typography>
              <Link to="/dex">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>

            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                marginTop: "5%",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              DAOs & Web3 Protocols
            </Typography>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Dao Protocol
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.3M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x7
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Seed-funding
              </Typography>
              <Link to="/dao">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "5%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Layer 1 Protocol
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.2M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x9
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Series A
              </Typography>
              <Link to="/layer1">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "5%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  GameFi
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.4M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x7
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Pre-Seed
              </Typography>
              <Link to="/gamefi">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>

            <Typography
              variant="subtitle1"
              component="h2"
              sx={{
                marginTop: "5%",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              Scaling Solutions
            </Typography>

            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Layer 2
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.9M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x6
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Series B
              </Typography>
              <Link to="/layer2">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "5%",
                marginBottom: "10%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                sx={{
                  width: "2.5%",
                }}
                padding={1}
              >
                <img src="../flame.svg" alt="" />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Optimistic Rollup Scaling
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.1M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x8
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Series C
              </Typography>
              <Link to="/ors">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Container>
      )}
      {matches && (
        <Container maxWidth="xl">
          <Typography
            variant="h6"
            component="h2"
            sx={{
              marginTop: "10%",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            DeFi Protocols
          </Typography>
          <Grid xs={8}>
            <Paper
              className="paper"
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  DeFi Aggregator
                </Typography>
                <hr />
              </Box>

              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.5M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x7
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Pre-Seed
              </Typography>
              <Link to="/defi-agg">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "4%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Decentralised Exchange
                </Typography>
                <hr />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $2.2M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x5
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Pre-Seed
              </Typography>
              <Link to="/dex">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>

            <Typography
              variant="h6"
              component="h2"
              sx={{
                marginTop: "5%",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              DAOs & Web3 Protocols
            </Typography>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Dao Protocol
                </Typography>
                <hr />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.3M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x7
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Seed-funding
              </Typography>
              <Link to="/dao">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "4%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Layer 1 Protocol
                </Typography>
                <hr />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.2M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x9
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Series A
              </Typography>
              <Link to="/layer1">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "4%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  GameFi
                </Typography>
                <hr />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.4M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x7
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Pre-Seed
              </Typography>
              <Link to="/gamefi">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>

            <Typography
              variant="h6"
              component="h2"
              sx={{
                marginTop: "5%",
                color: "#fff",
                fontWeight: "700",
              }}
            >
              Scaling Solutions
            </Typography>

            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "2%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Layer 2
                </Typography>
                <hr />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.9M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x6
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Series B
              </Typography>
              <Link to="/layer2">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
            <Paper
              elevation={10}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "4%",
                marginBottom: "10%",
                borderStyle: "double",
                borderColor: "#fa8128",
                borderRadius: "10px",
                background: "rgba(0, 21, 66, 0.651)",
              }}
            >
              <Box
                style={{
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Optimistic Rollup Scaling
                </Typography>
                <hr />
              </Box>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Amount Invested: $1.1M
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Expected Returns: x8
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Funding Round: Series C
              </Typography>
              <Link to="/ors">
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                >
                  Open
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default DIP;
