import { Box, Grid, Typography, Paper } from '@mui/material';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import {useContext, useState, useEffect, useRef} from "react";

// const Timer = () => {
//   const [secondsLeft, setSecondsLeft] = useState(0);
//   const secondsLeftRef = useRef(secondsLeft);

//   function tick() {
//     secondsLeftRef.current--;
//     setSecondsLeft(secondsLeftRef.current);
//   }
// }

const percentage = "7 days";

const BurnTimer = () => {
  return (
    <Grid item xs={4}>
       <Paper elevation={10} style={{
        marginTop: -30,
        borderStyle: "double",
        borderColor: "rgb(167, 230, 255, 0.2)",
        background:"rgba(0, 21, 66, 0.651)"
      }}>
              <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        }}>
      <Box sx={{
        margin: 1,
        width: 168,
        height: 137,
        display: 'flex'
      }}>
              <CircularProgressbar 
        value={percentage} 
        text={`${percentage}`}
        styles={buildStyles ({
        textColor:'#fff',
        pathColor:'rgba(255, 0, 0, 0.1)',
        trailColor:'rgb(140, 230, 270)',
      })} />
      </Box>
      <Typography variant="h5" component="h2" style={{
        margin: 3,
              color: "rgb(167, 230, 255)"
            }}>
          Count Down to Next Burn
        </Typography>
      </Box>
      </Paper>
      </Grid>
  )
}

export default BurnTimer;