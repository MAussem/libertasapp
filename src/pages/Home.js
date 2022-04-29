import { Container, Grid } from '@mui/material';
import Burned from '../components/Burned';
import Hero from '../components/Hero';
import PriceInfo from '../components/PriceInfo';
import Tax from '../components/Tax';

import TreasuryInfo from '../components/TreasuryInfo';

const Home = () => {
  return (
    <div className="App">
        <Container maxWidth="xl">
          <Grid container spacing={5}>
          <Hero />
          <PriceInfo />
          <Tax />
          <TreasuryInfo />
          <Burned />
          </Grid>
        </Container>
    </div>
  );
}

export default Home;