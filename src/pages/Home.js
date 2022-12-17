import { Container, Grid } from "@mui/material";
import Burned from "../components/Burned";
import BurnTimer from "../components/BurnTimer";
import Hero from "../components/Hero";
import PriceInfo from "../components/PriceInfo";
import Tax from "../components/Tax";
// import InterestCalc from "../components/InterestCalc";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import RewardInfo from "../components/RewardInfo";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Hero />
        <RewardInfo />
        <PriceInfo />

        <Tax />
        {/* <InterestCalc /> */}
        <Burned />
        {!matches && <BurnTimer />}
      </Grid>
    </Container>
  );
};

export default Home;
