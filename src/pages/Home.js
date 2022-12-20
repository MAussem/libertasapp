import { Container, Grid } from "@mui/material";
import Burned from "../components/Burned";
import BurnTimer from "../components/BurnTimer";
import Hero from "../components/Hero";
import PriceInfo from "../components/PriceInfo";
import Tax from "../components/Tax";
// import InterestCalc from "../components/InterestCalc";
import RewardInfo from "../components/RewardInfo";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Hero />
        <RewardInfo />
        <PriceInfo />

        <Tax />
        {/* <InterestCalc /> */}
        <Burned />
        <BurnTimer />
      </Grid>
    </Container>
  );
};

export default Home;
