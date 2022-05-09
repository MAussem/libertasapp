import { Grid, Paper, Box, Typography, } from "@mui/material"
const CalculatorInfo = () => {
  return (
    <>
    <Grid item xs={4}>
    <Paper elevation={10} style={{
        marginTop: 160,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Box>
          <Box>
            <Typography>
              DATA
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
    </>
  )
}

export default CalculatorInfo