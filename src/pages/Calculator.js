import { Box, TextField } from "@mui/material";

const Calculator = () => {
  return (
    <>
    <form>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          XLB Amount
          id="outlined-error"
          label="0"
          defaultValue="Hello World"
        />
        <TextField
          APY
          id="outlined-error-helper-text"
          label="0"
          defaultValue="Hello World"
        />
      </div>
            <div>
        <TextField
          XLB Amount
          id="outlined-error"
          label="0"
          defaultValue="Hello World"
        />
        <TextField
          APY
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
        />
      </div>

    </Box>
    </form>
  </>
  )
}

export default Calculator;