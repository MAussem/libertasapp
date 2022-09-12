import { Box, Container, Paper, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const SubPage7 = () => {
  const buttonSty = makeStyles((theme) => ({
    buttonS: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [10, "!important"],
      },
    },
  }));

  const buttonStyles = {
    marginLeft: "85%",
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
    <Container maxWidth="lg">
      <Paper
        elevation={10}
        style={{
          marginTop: 120,
          paddingTop: 30,
          paddingBottom: 30,
          borderStyle: "double",
          borderColor: "#fa8128",
          borderRadius: "10px",
          background: "rgba(0, 21, 66, 0.651)",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box style={{ justifyContent: "flex-end" }}>
            <a
              href="https://testnet.explorer.emerald.oasis.dev/address/0x4B034645BC8B43A300739f83AEaCdbF0E1a90a38/transactions"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
              >
                Contract
              </Button>
            </a>
          </Box>
          <Typography
            variant="h2"
            component="h2"
            style={{
              marginTop: "4%",
              textAlign: "center",
              color: "#fff",
              fontWeight: "800",
            }}
          >
            Optimistic Rollup Scaling
          </Typography>
          <Box
            style={{
              marginTop: "5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                component="h6"
                style={{
                  marginTop: "10%",
                  textAlign: "center",
                  color: "#C8E9E9",
                }}
              >
                Amount Invested <br /> $10,000
              </Typography>
              <Typography
                variant="h5"
                component="h6"
                style={{
                  marginTop: "30%",
                  textAlign: "center",
                  color: "#C8E9E9",
                }}
              >
                Launch Date: 88/88/8888
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                component="h6"
                style={{
                  marginTop: "10%",
                  textAlign: "center",
                  color: "#C8E9E9",
                }}
              >
                Expected Returns: <br /> x8
              </Typography>
              <Typography
                variant="h5"
                component="h6"
                style={{
                  marginTop: "30%",
                  textAlign: "center",
                  color: "#C8E9E9",
                }}
              >
                Funding Round: Series C
              </Typography>
            </Box>
          </Box>
          <img
            src="../flame.svg"
            alt=""
            style={{
              width: "8%",
              zIndex: 100,
              cursor: "pointer",
              marginTop: "-20%",
              marginLeft: "47%",
            }}
          />
        </Box>
      </Paper>
      <Typography
        variant="h5"
        component="h6"
        style={{
          marginTop: "1%",
          textAlign: "center",
          color: "#fff",
        }}
      >
        This is Ficticious Data
      </Typography>
    </Container>
  );
};

export default SubPage7;
