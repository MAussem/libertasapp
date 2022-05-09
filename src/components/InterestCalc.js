import { Paper, Box, TextField } from "@mui/material";
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const Calculator = () => {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

  const marks = [
    {
      value: 7,
      label: 'One Week',
    },
    {
      value: 14,
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
    <form>
    <Paper elevation={10} style={{
        marginTop:200,
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
      <div>
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
        <TextField
          XLB Amount
          id="outlined-error"
          label="$XLB Amount"
          defaultValue="Hello World"
        />
        <TextField
          APY
          id="outlined-error-helper-text"
          label="APY"
          defaultValue="Hello World"
        />
      </div>
            <div>
        <TextField
          XLB Amount
          id="outlined-error"
          label="$XLB Price at Purchase"
          defaultValue="Hello World"
        />
        <TextField
          APY
          id="outlined-error-helper-text"
          label="Future $XLB Price ($)"
          defaultValue="Hello World"
        />
      </div>
      <Slider
        defaultValue={0}
        aria-label="Small"
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        max={120}
      />
    </Box>
    </Paper>
    </form>
  </>
  )
}

export default Calculator;