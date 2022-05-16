import { Paper, Box, TextField, Grid } from "@mui/material";
import Slider from '@mui/material/Slider';

const Calculator = () => {

  const marks = [
    {
      value: 7,
      label: 'One Week',
    },
    {
      value: 28,
      label: 'Four Weeks',
    },
    {
      value: 60,
      label: 'Two Months',
    },
    {
      value: 120,
      label: 'Four Months',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <>
    <Grid item xs={5.5}>
    <Paper elevation={10} style={{
        marginTop:160,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{
          margin: 8
        }}>
      <TextField
          $XLB Amount
          id="custom-css-outlined-input"
          label="$XLB Amount"
          defaultValue="0"
        />
        <TextField
          APY
          id="custom-css-outlined-input"
          label="APY"
          defaultValue="0"
        />
        <TextField
          $XLB Price at Purchase
          id="custom-css-outlined-input"
          label="$XLB Price at Purchase"
          defaultValue="0"
        />
      
        <TextField
          Future $XLB Price
          id="custom-css-outlined-input"
          label="Future $XLB Price"
          defaultValue="0"
        />
        </Box>
        <Box sx={{
          margin: 8
        }}>
      <Slider
        defaultValue={0}
        aria-label="Small"
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        max={120}
      />
      </Box>
      </Box>
    </Paper>
    </Grid>
  </>
  )
}

export default Calculator;