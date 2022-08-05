import { Container, Grid } from "@mui/material";
// import CalculatorInfo from "../components/CalculatorInfo";
import InterestCalc from '../components/InterestCalc';

const Calculator = () => {
  return (
    <Container maxWidth="xl">
     <Grid container spacing={5}>
      <InterestCalc />
      {/* <CalculatorInfo /> */}
     </Grid>
    </Container>
  )
}

export default Calculator;