import { Container, Typography, Grid } from "@mui/material";
import GovUserInfo from "../../components/GovUserInfo";
import Proposals from "../../components/Proposals";

const Governance = () => {
  return (
    <>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Proposals
      </Typography>
      <Container
        maxWidth="xl"
        style={{
          marginLeft: "19%",
        }}
      >
        <Grid container spacing={5}>
          <GovUserInfo />
          <Proposals />
        </Grid>
      </Container>
    </>
  );
};

export default Governance;
