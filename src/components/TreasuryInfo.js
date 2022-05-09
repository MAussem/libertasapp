import { Grid, Paper, Typography, Box } from "@mui/material"

const TreasuryInfo = () => {
 return (
  <>
      <Grid item xs={4}>
      <Paper elevation={10} style={{
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        marginTop: -175,
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Box sx={{
          padding: 3,
          textAlign: 'center'
        }}>
        <Typography variant="h5" component="h2" style={{
          color: "rgb(167, 230, 255)"
        }}>
          Treasury Balance
        </Typography>
        <Typography variant="h3" component="h2" style={{
          fontWeight: 700
        }}>
          $23,416,789M
        </Typography>
        </Box>
      </Paper>
    </Grid>
    <Grid item xs={4}>
    <Paper elevation={10} style={{
      borderStyle: "double",
      borderColor: "rgb(167, 230, 255, 0.2)",
      marginTop: -175,
      background:"rgba(0, 21, 66, 0.651)"
    }}>
        <Box sx={{
          padding: 3,
          textAlign: 'center'
        }}>
        <Typography variant="h5" component="h2" style={{
          color: "rgb(167, 230, 255)"
        }}>
          Total Wallets
        </Typography>
        <Typography variant="h3" component="h2" style={{
          fontWeight: 700
        }}>
          88,888
        </Typography>
        </Box>
      </Paper>
    </Grid>
  </>
 )
}

export default TreasuryInfo;