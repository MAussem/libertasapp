import { Box, Container, Paper, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const ProtocolInfo = () => {
  const buttonSty = makeStyles((theme) => ({
    buttonS: {
      padding: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        fontSize: [10, "!important"],
      },
    },
  }));

  const buttonStyles = {
    marginLeft: "78%",
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
    <Container maxWidth="md">
      <Paper
        elevation={10}
        style={{
          marginTop: 40,
          paddingTop: 30,
          paddingBottom: 30,
          borderStyle: "double",
          borderColor: "#fa8128",
          borderRadius: "10px",
          background: "linear-gradient(to bottom, #93f7f7, #fa8128)",
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
              textAlign: "center",
              color: "#000",
            }}
          >
            Sharpen
          </Typography>
          <Box
            style={{
              marginTop: "5%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              style={{
                textAlign: "center",
                color: "#000",
              }}
            >
              Total Treasury Investment: <br /> $652,432,412
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              style={{
                textAlign: "center",
                color: "#000",
              }}
            >
              Expected Returns: <br /> x5
            </Typography>
          </Box>

          <img
            src="../flame.svg"
            alt=""
            style={{
              width: "8%",
              opacity: "0.7",
              zIndex: 100,
              cursor: "pointer",
              marginLeft: "47%",
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default ProtocolInfo;
