import { Box, Typography } from "@mui/material";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

import { useAccount } from "wagmi";
import { useContractXLBRead } from "../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

// const Timer = () => {
//   const [secondsLeft, setSecondsLeft] = useState(0);
//   const secondsLeftRef = useRef(secondsLeft);

//   function tick() {
//     secondsLeftRef.current--;
//     setSecondsLeft(secondsLeftRef.current);
//   }
// }

const blockTime = 30;

const Rebase = () => {
  const { address } = useAccount();
  const { data: balance } = useContractXLBRead("balanceOf", address);
  const { data: blocksTillNextRebase } = useContractXLBRead(
    "blocksTillNextRebase"
  );

  const percentage = useMemo(() => {
    if (!blocksTillNextRebase) return "n/a";
    const totalSeconds = blocksTillNextRebase.toNumber() * blockTime;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;
    return minutes + ":" + seconds;
  }, [blocksTillNextRebase]);

  const rebaseRate = 0.0302487;
  const nextReward = useMemo(() => {
    if (!balance) return "n/a";
    const next = balance
      .div(ethers.BigNumber.from("1000000000"))
      .mul(ethers.BigNumber.from("302487"));
    return ethers.utils.formatEther(next.sub(next.mod(1e14)));
  }, [balance]);

  return (
    <div
      style={{
        marginTop: -25,
        width: 200,
        height: 200,
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#C8E9E9",
          trailColor: "#C8E9E9",
        })}
      />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          variant="subtitle2"
          style={{
            fontWeight: 700,
            color: "#000",
          }}
        >
          NEXT REWARD: {rebaseRate}%
        </Typography>
        <Typography
          variant="subtitle2"
          style={{
            color: "#C8E9E9",
          }}
        >
          {nextReward} XLB
        </Typography>
      </Box>
      {/* <button onClick={() => fetchBalance()}>click me</button> */}
    </div>
  );
};

export default Rebase;
