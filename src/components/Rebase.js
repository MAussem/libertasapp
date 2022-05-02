import { Box, Typography } from '@mui/material';
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

const percentage = "30:00";

const Rebase = () => {
  return (
    <div style={{ 
      marginTop: -25,
      width: 200, 
      height: 200
    }}>
      <CircularProgressbar 
        value={percentage} 
        text={`${percentage}`}
        styles={buildStyles ({ 
        textColor:'#fff',
        pathColor:'rgba(255, 0, 0, 0.1)',
        trailColor:'rgb(0, 183, 255)',
      })} />
      <Box sx={{
        margin: 1,
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
      }}>
        <Typography variant='subtitle2'>
          NEXT REWARD: 0.03548%
        </Typography>
        <Typography variant='subtitle2' style={{
          color: "rgb(167, 230, 255)"
        }}>
          8,888 XLB
        </Typography>
      </Box>
    </div>
  )
}

export default Rebase;