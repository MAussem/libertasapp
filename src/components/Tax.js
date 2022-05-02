import { Grid, Paper, Typography } from "@mui/material"

const Tax = () => {
 return (
  <>
      <Grid item xs={4}>
      <Paper elevation={10} style={{
        textAlign: "center",
        padding: 10,
        background:"rgba(0, 21, 66, 0.651)"
      }}>
        <Typography variant="h4" component="h2" style={{
          paddingTop: 10,
          paddingBottom: 10,
          color: "rgb(167, 230, 255)"
        }}>
          Buy Tax
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "white"
        }}>
          13%
        </Typography>

        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "rgb(167, 230, 255)"
        }}>
          Sell Tax
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "white"
        }}>
          20%
        </Typography>

        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "rgb(167, 230, 255)"
        }}>
          Transfer Tax
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "white"
        }}>
          13%
        </Typography>

        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "rgb(167, 230, 255)"
        }}>
        Max Tokens Per Buy / Sell
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "white"
        }}>
        869.23B / 1.50M
        </Typography>
      </Paper>
    </Grid>
  </>
 )
}

export default Tax;