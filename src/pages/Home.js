import { Box, Container, Grid } from '@mui/material';
import Burned from '../components/Burned';
import BurnTimer from '../components/BurnTimer';
import Hero from '../components/Hero';
import PriceInfo from '../components/PriceInfo';
import Tax from '../components/Tax';
import TreasuryInfo from '../components/TreasuryInfo';
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"
import Rebase from '../components/Rebase';

const Home = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
        <Container maxWidth="xl">
          <Grid container spacing={5}>
          <Hero />
          {matches && <Box sx={{
            marginLeft: "33%",
            marginTop: 7,
            marginBottom: 5 
          }}>
           <Rebase />
          </Box>}
          <PriceInfo />
          <Tax />
         {!matches && <TreasuryInfo />}
          <Burned />
          {!matches && <BurnTimer />}
          </Grid>
        </Container>
  );
}

export default Home;