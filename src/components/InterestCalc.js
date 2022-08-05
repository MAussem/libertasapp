import { Paper, Box, Typography, Grid } from "@mui/material";
import './InterestCalc.css'

const Calculator = () => {

  return (
    <>
    <Grid item xs={12}>
    <Paper elevation={10} style={{
        marginTop:160,
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
      <Typography className="hTitle" variant="h5" component="h2" style={{
        marginTop:110,
      }}>
        Calculator - Estimate Your Returns
      </Typography>
        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
          <Typography className="hTitle" variant="h5" component="h2" >
              $XLB Amount Balance:
          </Typography>
          <form>
      <input type="text" defaultValue="0"></input>
      </form>
          </Paper> 
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" >
              Purchase Price:
      </Typography>
      <input type="text" defaultValue="0"></input>
          </Paper> 
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" >
              Future Price:
      </Typography>
      <input type="text" defaultValue="0"></input>
          </Paper> 
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        display: "flex",
        flexDirection:"column",
        justifyContent: "space-between",
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>

<Typography className="hTitle" variant="h5" component="h2" >
        How Many Days From Current? 
      </Typography>
      <input type="text" defaultValue="0"></input>
          </Paper> 
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" >
        APY 20009.07%
      </Typography>
          </Paper> 
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" >
              Initial Investment $0.00 USD
      </Typography>
          </Paper> 
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" >
        CEstimated Rewards 0.00 XLB
      </Typography>
          </Paper> 
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={10} style={{
        marginTop:50,
        marginBottom:50,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Typography className="hTitle" variant="h5" component="h2" >
              Potential Return $0.00 USD
      </Typography>
          </Paper> 
        </Grid>

    </Paper>
    </Grid>
  </>
  )
}

export default Calculator;