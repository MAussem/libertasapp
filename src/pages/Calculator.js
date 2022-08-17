import { Container, Grid } from "@mui/material";
import InterestCalc from '../components/InterestCalc';

const Calculator = () => {
  return (
    <Container maxWidth="xl">
     <Grid spacing={5}>
      <InterestCalc />
     </Grid>
    </Container>
  )
}

export default Calculator;