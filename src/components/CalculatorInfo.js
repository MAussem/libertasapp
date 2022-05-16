import { Grid, Paper, Box, Typography, } from "@mui/material"

const CalculatorInfo = () => {
  return (
    <>
    <Grid item xs={3.25}>
    <Paper elevation={10} style={{
        marginTop: 160,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            textAlign:"center",
            paddingTop: 5,
            paddingBottom: 10
          }}>
            <Typography variant="h5">
              Initial Investment
            </Typography>
            <Typography variant="h5">
              Current Wealth
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            textAlign:"center",
            paddingTop: 1,
            paddingBottom: 8.5
          }}>
            <Typography variant="h6">
              0.00000
            </Typography>
            <Typography variant="h6">
              $0
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
    <Grid item xs={3.25}>
    <Paper elevation={10} style={{
        marginTop: 160,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            textAlign:"center",
            paddingTop: 5,
            paddingBottom: 10
          }}>
            <Typography variant="h5">
              $XLB Rewarded
            </Typography>
            <Typography variant="h5">
              Potential Return
            </Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            textAlign:"center",
            paddingTop: 1,
            paddingBottom: 8.5
          }}>
            <Typography variant="h6" style={{
              textAlign: "center"
            }}>
              0.00000
            </Typography>
            <Typography variant="h6">
              $0
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
    </>
  )
}

export default CalculatorInfo