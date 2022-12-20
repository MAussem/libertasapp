import { Container, Grid } from "@mui/material";
import GovUserInfo from "../../components/GovUserInfo";
import Proposals from "../../components/Proposals";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Governance = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!matches && (
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
      )}
      {matches && (
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <GovUserInfo />
            <Proposals />
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Governance;
