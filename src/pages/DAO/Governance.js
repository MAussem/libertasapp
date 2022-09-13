import { Container, Grid } from "@mui/material";
import GovUserInfo from "../../components/GovUserInfo";
import Proposals from "../../components/Proposals";

const Governance = () => {
  return (
    <>
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
