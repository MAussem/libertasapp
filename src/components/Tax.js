import { Grid, Paper, Typography, Box } from "@mui/material"

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
          color: "yellow"
        }}>
          Buy Tax
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "red"
        }}>
          13%
        </Typography>

        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "yellow"
        }}>
          Sell Tax
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "red"
        }}>
          20%
        </Typography>

        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "yellow"
        }}>
          Transfer Tax
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "red"
        }}>
          13%
        </Typography>

        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "yellow"
        }}>
        Max Tokens Per Buy / Sell
        </Typography>
        <Typography variant="h4" component="h2" style={{
          paddingBottom: 10,
          color: "red"
        }}>
        869.23B / 1.50M
        </Typography>
      </Paper>
    </Grid>
  </>
 )
}

export default Tax;