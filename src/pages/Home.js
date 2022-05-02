import { Container, Grid } from '@mui/material';
import Burned from '../components/Burned';
import Hero from '../components/Hero';
import PriceInfo from '../components/PriceInfo';
import Tax from '../components/Tax';
import TreasuryInfo from '../components/TreasuryInfo';
// import { ThemeProvider, createStyles } from '@material-ui/styles';

// const THEME = createStyles({
//   typography: {
//    "fontFamily": `"Poppins", sans-serif`,
//    "fontSize": 14,
//    "fontWeightLight": 300,
//    "fontWeightRegular": 400,
//    "fontWeightMedium": 500
//   }
// });

const Home = () => {

  return (
    // <ThemeProvider theme={THEME}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
          <Hero />
          <PriceInfo />
          <Tax />
          <TreasuryInfo />
          <Burned />
          </Grid>
        </Container>
    // </ThemeProvider>
  );
}

export default Home;