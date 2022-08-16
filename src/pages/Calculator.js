import { Container, Grid } from "@mui/material";
import InterestCalc from '../components/InterestCalc';

const Calculator = () => {
  return (
    <Container maxWidth="sm">
     <Grid container spacing={5} 
      direction="column"
      justifyContent="center">
      <InterestCalc />
     </Grid>
    </Container>
  )
}

export default Calculator;