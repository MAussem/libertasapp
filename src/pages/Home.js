import { Container, Grid } from "@mui/material";
import Burned from "../components/dashboard/Burned";
import BurnTimer from "../components/dashboard/BurnTimer";
import Hero from "../components/dashboard/Hero";
import PriceInfo from "../components/dashboard/PriceInfo";
import Tax from "../components/dashboard/Tax";
import StakingInfo from "../components/dashboard/StakingInfo";
import GridTop from "../components/Grid";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <GridTop />
      <Grid container direction="row" spacing={2}>
        <Hero />
        <StakingInfo />
        <PriceInfo />
        <Tax />
        <Burned />
        <BurnTimer />
      </Grid>
    </Container>
  );
};

export default Home;
