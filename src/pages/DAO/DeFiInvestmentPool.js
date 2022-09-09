import { Box, Paper, Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import ProtocolInfo from "./ProtocolInfo";

const DIP = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // toggle shown state
    setIsShown((current) => !current);
  };

  const buttonSty = makeStyles((theme) => ({
    buttonS: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [10, "!important"],
      },
    },
  }));

  const buttonStyles = {
    marginRight: "2%",
    width: 150,
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

  const classe = buttonSty();

  return (
    <>
      {isShown && <ProtocolInfo />}
      <Container maxWidth="xl">
        <Typography
          variant="h5"
          component="h2"
          sx={{
            marginTop: "5%",
            color: "#fff",
          }}
        >
          Defi Protocols
        </Typography>
        <Grid xs={8}>
          <Paper
            className="paper"
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                Sharpen
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              9.47% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              21.42% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
              onClick={handleClick}
            >
              Open
            </Button>
          </Paper>
          <Paper
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                RETT
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              13.68% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              28.32% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Open
            </Button>
          </Paper>

          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginTop: "5%",
              color: "#fff",
            }}
          >
            DAOs & Web3 Protocols
          </Typography>
          <Paper
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                My First Protocol
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              7.77% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              15.34% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Open
            </Button>
          </Paper>
          <Paper
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                Lucky Lad
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              8.74% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              19.97% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Open
            </Button>
          </Paper>
          <Paper
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                Exausted Pups
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              9.88% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              20.18% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Open
            </Button>
          </Paper>

          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginTop: "5%",
              color: "#fff",
            }}
          >
            Scaling Solutions
          </Typography>

          <Paper
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                Lady Justice
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              11.39% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              24.65% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Open
            </Button>
          </Paper>
          <Paper
            elevation={10}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "5%",
              borderStyle: "double",
              borderColor: "#fa8128",
              borderRadius: "10px",
              background: "rgba(255,255,255, 0.5)",
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
                variant="h5"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                Red Snow
              </Typography>
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  color: "black",
                }}
              >
                some.text.about.company
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              6.67% ROSE
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "black",
              }}
            >
              13.11% with $XLB
            </Typography>
            <Button
              className={classe.buttonS}
              variant="contained"
              sx={buttonStyles}
            >
              Open
            </Button>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default DIP;
