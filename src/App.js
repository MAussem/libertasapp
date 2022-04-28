import { Container, Grid } from '@mui/material';
import './App.css';
import Burned from './components/Burned';
import Hero from './components/Hero';
import PriceInfo from './components/PriceInfo';
import Tax from './components/Tax';
import TopBar from './components/TopBar';
import TreasuryInfo from './components/TreasuryInfo';

function App() {
  return (
    <div className="App">
      <TopBar />
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

export default App;
