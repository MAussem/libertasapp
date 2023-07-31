import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Web3 from "web3";
import { StakingAbi } from "../../abi/staking";
import { Staking60Abi } from "../../abi/staking60";
import { Staking90Abi } from "../../abi/staking90";
import { Staking180Abi } from "../../abi/staking180";
import { Staking365Abi } from "../../abi/staking365";

// import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Select, MenuItem } from "@mui/material";

import { useAccount } from "wagmi";
import {
  useContractStaking30Read,
  useContractStaking60Read,
  useContractStaking90Read,
  useContractStaking180Read,
  useContractStaking365Read,
} from "../../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

const fontStyles = makeStyles((theme) => ({
  hTitle: {
    color: "#fff",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [13, "!important"],
    },
  },
}));

const buttonSty = makeStyles((theme) => ({
  buttonS: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [10, "!important"],
    },
  },
}));

const RewardInfo = () => {
  const [web3, setWeb3] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [contractInstance60, setContractInstance60] = useState(null);
  const [contractInstance90, setContractInstance90] = useState(null);
  const [contractInstance180, setContractInstance180] = useState(null);
  const [contractInstance365, setContractInstance365] = useState(null);
  const [daysLeftInPool, setDaysLeftInPool] = useState(0);
  const [daysLeftInPool60, setDaysLeftInPool60] = useState(0);
  const [daysLeftInPool90, setDaysLeftInPool90] = useState(0);
  const [daysLeftInPool180, setDaysLeftInPool180] = useState(0);
  const [daysLeftInPool365, setDaysLeftInPool365] = useState(0);
  const [setStakeRewards] = useState(false);
  const [setStakeRewards60] = useState(false);
  const [setStakeRewards90] = useState(false);
  const [setStakeRewards180] = useState(false);
  const [setStakeRewards365] = useState(false);
  const [selectedEarned, setSelectedEarned] = useState(
    "Earned XLB Current Pool"
  );
  const [selectedETH, setSelectedETH] = useState("Earned ETH Current Pool");
  const [selectedLocked, setSelectedLocked] = useState(
    "Locked XLB Current Pool"
  );
  const [selectedDaysLeft, setSelectedDaysLeft] = useState(
    "Days Left Current Pool"
  );
  const earnedOptionsXLB = ["Earned XLB Current Pool", "Earned XLB Past Pool"];
  const earnedOptionsETH = ["Earned ETH Current Pool", "Earned ETH Past Pool"];
  const lockedOptions = ["Locked XLB Current Pool", "Locked XLB Past Pool"];
  const optionsDaysLeft = ["Days Left Current Pool", "Days Left Past Pool"];

  const { address } = useAccount();
  const { data: earnedBalance } = useContractStaking30Read("earned", [address]);
  const { data: earnedBalance60 } = useContractStaking60Read("earned", [
    address,
  ]);
  const { data: earnedBalance90 } = useContractStaking90Read("earned", [
    address,
  ]);
  const { data: earnedBalance180 } = useContractStaking180Read("earned", [
    address,
  ]);
  const { data: earnedBalance365 } = useContractStaking365Read("earned", [
    address,
  ]);
  const { data: stakedBalance } = useContractStaking30Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance60 } = useContractStaking60Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance90 } = useContractStaking90Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance180 } = useContractStaking180Read("stakedTokens", [
    address,
  ]);
  const { data: stakedBalance365 } = useContractStaking365Read("stakedTokens", [
    address,
  ]);

  useEffect(() => {
    // Check if the user has metamask installed and is logged in
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      const contractAddress = "0xF31907EC1Cd3997B62021404fc134598bfEEeeAb";
      const contractInstance = new web3.eth.Contract(
        StakingAbi,
        contractAddress
      );
      setContractInstance(contractInstance);
      const getDaysLeftInPool = async () => {
        // const account = await web3.eth.getAccounts();
        const time = await contractInstance.methods.daysLeftInPool().call();
        setDaysLeftInPool(time);
      };
      getDaysLeftInPool();
      const contractAddress60 = "0x5E42A2317C5E986423a8D0936edc98FcC21734d8";
      const contractInstance60 = new web3.eth.Contract(
        Staking60Abi,
        contractAddress60
      );
      setContractInstance60(contractInstance60);
      const getDaysLeftInPool60 = async () => {
        const time = await contractInstance60.methods.daysLeftInPool().call();
        setDaysLeftInPool60(time);
      };

      getDaysLeftInPool60();
      const contractAddress90 = "0xCe385e1f19989fE92D6484a103768733d5edf6D1";
      const contractInstance90 = new web3.eth.Contract(
        Staking90Abi,
        contractAddress90
      );
      setContractInstance90(contractInstance90);
      const getDaysLeftInPool90 = async () => {
        const time = await contractInstance90.methods.daysLeftInPool().call();
        setDaysLeftInPool90(time);
      };

      getDaysLeftInPool90();
      const contractAddress180 = "0x3fBB8132A6d83469Db6B46585E7a766fd5244AC9";
      const contractInstance180 = new web3.eth.Contract(
        Staking180Abi,
        contractAddress180
      );
      setContractInstance180(contractInstance180);
      const getDaysLeftInPool180 = async () => {
        const time = await contractInstance180.methods.daysLeftInPool().call();
        setDaysLeftInPool180(time);
      };

      getDaysLeftInPool180();
      const contractAddress365 = "0xE6be8D502A5104eD2f85eb27A5eDB914AB827F78";
      const contractInstance365 = new web3.eth.Contract(
        Staking365Abi,
        contractAddress365
      );
      setContractInstance365(contractInstance365);
      const getDaysLeftInPool365 = async () => {
        const time = await contractInstance365.methods.daysLeftInPool().call();
        setDaysLeftInPool365(time);
      };

      getDaysLeftInPool365();
    } else {
      console.log("You need to install metamask");
    }
  }, []);

  // claim rewards
  const handleClaim = async (contractInstance) => {
    const accounts = await web3.eth.getAccounts();
    const result = await contractInstance.methods
      .claim()
      .send({ from: accounts[0] });
    console.log(result);
  };

  const contractAddress = "0xF31907EC1Cd3997B62021404fc134598bfEEeeAb";
  const contractAddress60 = "0x5E42A2317C5E986423a8D0936edc98FcC21734d8";
  const contractAddress90 = "0xCe385e1f19989fE92D6484a103768733d5edf6D1";
  const contractAddress180 = "0x3fBB8132A6d83469Db6B46585E7a766fd5244AC9";
  const contractAddress365 = "0xE6be8D502A5104eD2f85eb27A5eDB914AB827F78";
  // compound rewards
  const handleStakeRewards = async (contractInstance) => {
    const contract = new web3.eth.Contract(StakingAbi, contractAddress);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stakeRewards()
      .send({ from: accounts[0] })
      .then(() => {
        setStakeRewards(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStakeRewards60 = async () => {
    const contract = new web3.eth.Contract(Staking60Abi, contractAddress60);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stakeRewards()
      .send({ from: accounts[0] })
      .then(() => {
        setStakeRewards60(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStakeRewards90 = async () => {
    const contract = new web3.eth.Contract(Staking90Abi, contractAddress90);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stakeRewards()
      .send({ from: accounts[0] })
      .then(() => {
        setStakeRewards90(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStakeRewards180 = async () => {
    const contract = new web3.eth.Contract(Staking180Abi, contractAddress180);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stakeRewards()
      .send({ from: accounts[0] })
      .then(() => {
        setStakeRewards180(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStakeRewards365 = async () => {
    const contract = new web3.eth.Contract(Staking365Abi, contractAddress365);
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .stakeRewards()
      .send({ from: accounts[0] })
      .then(() => {
        setStakeRewards365(true);
        // console.log("Stake successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sBalance = useMemo(
    () =>
      stakedBalance
        ? ethers.utils.formatEther(stakedBalance.sub(stakedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [stakedBalance]
  );

  const sBalance60 = useMemo(
    () =>
      stakedBalance60
        ? ethers.utils.formatEther(
            stakedBalance60.sub(stakedBalance60.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance60]
  );

  const sBalance90 = useMemo(
    () =>
      stakedBalance90
        ? ethers.utils.formatEther(
            stakedBalance90.sub(stakedBalance90.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance90]
  );

  const sBalance180 = useMemo(
    () =>
      stakedBalance180
        ? ethers.utils.formatEther(
            stakedBalance180.sub(stakedBalance180.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance180]
  );

  const sBalance365 = useMemo(
    () =>
      stakedBalance365
        ? ethers.utils.formatEther(
            stakedBalance365.sub(stakedBalance365.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [stakedBalance365]
  );

  const eBalance = useMemo(
    () =>
      earnedBalance
        ? ethers.utils.formatEther(earnedBalance.sub(earnedBalance.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [earnedBalance]
  );

  const eBalance60 = useMemo(
    () =>
      earnedBalance60
        ? ethers.utils.formatEther(
            earnedBalance60.sub(earnedBalance60.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [earnedBalance60]
  );

  const eBalance90 = useMemo(
    () =>
      earnedBalance90
        ? ethers.utils.formatEther(
            earnedBalance90.sub(earnedBalance90.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [earnedBalance90]
  );

  const eBalance180 = useMemo(
    () =>
      earnedBalance180
        ? ethers.utils.formatEther(
            earnedBalance180.sub(earnedBalance180.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [earnedBalance180]
  );

  const eBalance365 = useMemo(
    () =>
      earnedBalance365
        ? ethers.utils.formatEther(
            earnedBalance365.sub(earnedBalance365.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [earnedBalance365]
  );

  const { data: totalStaked } = useContractStaking30Read("totalStaked");
  const { data: totalStaked60 } = useContractStaking60Read("totalStaked");
  const { data: totalStaked90 } = useContractStaking90Read("totalStaked");
  const { data: totalStaked180 } = useContractStaking180Read("totalStaked");
  const { data: totalStaked365 } = useContractStaking365Read("totalStaked");

  const sTotalStaked = useMemo(
    () =>
      totalStaked
        ? ethers.utils.formatEther(totalStaked.sub(totalStaked.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked]
  );

  const sTotalStaked60 = useMemo(
    () =>
      totalStaked60
        ? ethers.utils.formatEther(totalStaked60.sub(totalStaked60.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked60]
  );

  const sTotalStaked90 = useMemo(
    () =>
      totalStaked90
        ? ethers.utils.formatEther(totalStaked90.sub(totalStaked90.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked90]
  );

  const sTotalStaked180 = useMemo(
    () =>
      totalStaked180
        ? ethers.utils.formatEther(
            totalStaked180.sub(totalStaked180.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [totalStaked180]
  );

  const sTotalStaked365 = useMemo(
    () =>
      totalStaked365
        ? ethers.utils.formatEther(
            totalStaked365.sub(totalStaked365.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [totalStaked365]
  );

  function createData(
    id,
    daysLeft,
    daysLeftPast,
    days,
    xlbRewards,
    xlbRewardsPast,
    ethRewards,
    ethRewardsPast,
    staked,
    stakedPast,
    cInstance,
    tvl
  ) {
    return {
      id,
      daysLeft,
      daysLeftPast,
      days,
      xlbRewards,
      xlbRewardsPast,
      ethRewards,
      ethRewardsPast,
      staked,
      stakedPast,
      cInstance,
      tvl,
    };
  }

  const rows = [
    createData(
      1,
      "24",
      daysLeftInPool,
      "30",
      "0",
      eBalance,
      "0",
      "0",
      "0",
      sBalance,
      contractInstance,
      sTotalStaked
    ),
    createData(
      2,
      daysLeftInPool60,
      "Not started yet",
      "60",
      eBalance60,
      "0",
      "0",
      "0",
      sBalance60,
      "0",
      contractInstance60,
      sTotalStaked60
    ),
    createData(
      3,
      daysLeftInPool90,
      "Not started yet",
      "90",
      eBalance90,
      "0",
      "0",
      "0",
      sBalance90,
      "0",
      contractInstance90,
      sTotalStaked90
    ),
    createData(
      4,
      daysLeftInPool180,
      "Not started yet",
      "180",
      eBalance180,
      "0",
      "0",
      "0",
      sBalance180,
      "0",
      contractInstance180,
      sTotalStaked180
    ),
    createData(
      5,
      daysLeftInPool365,
      "Not started yet",
      "365",
      eBalance365,
      "0",
      "0",
      "0",
      sBalance365,
      "0",
      contractInstance365,
      sTotalStaked365
    ),
  ];

  const buttonStyles = {
    fontWeight: 800,
    color: "black",
    borderRadius: "10px",
    background: "linear-gradient(to right, #fa8128, #C8E9E9);",
    "&:hover": {
      background: "linear-gradient(to right, #C8E9E9, #fa8128);",
      transition: ".4s",
      boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
      borderRadius: "15px",
    },
  };

  const classe = buttonSty();
  const classes = fontStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  console.log(earnedBalance);
  return (
    <>
      {!matches && (
        <Grid container spacing={5}>
          <Paper
            elevation={10}
            style={{
              background: "#000",
              marginTop: 60,
              marginBottom: 40,
              padding: 15,
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="h5"
                component="h2"
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,

                  textAlign: "center",
                }}
              >
                Click to Claim or Compound Your XLB
              </Typography>
            </Box>
            <hr />
            <TableContainer
              component={Paper}
              sx={{
                background: "#000",
                cursor: "pointer",
              }}
            >
              <Table
                sx={{ minWidth: 650, fontSize: "1.2rem" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Days
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                      <Select
                        value={selectedDaysLeft}
                        onChange={(e) => setSelectedDaysLeft(e.target.value)}
                        sx={{
                          color: "white",
                          fontSize: "1.2rem",
                          background: "#000",
                        }}
                      >
                        {optionsDaysLeft.map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            style={{
                              background: "#000",
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                      <Select
                        value={selectedEarned}
                        onChange={(e) => setSelectedEarned(e.target.value)}
                        sx={{
                          color: "white",
                          fontSize: "1.2rem",
                          background: "#000",
                        }}
                      >
                        {earnedOptionsXLB.map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            style={{
                              background: "#000",
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                      <Select
                        value={selectedETH}
                        onChange={(e) => setSelectedETH(e.target.value)}
                        sx={{
                          color: "white",
                          fontSize: "1.2rem",
                          background: "#000",
                        }}
                      >
                        {earnedOptionsETH.map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            style={{
                              background: "#000",
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "white", fontSize: "1.2rem" }}
                    >
                      <Select
                        value={selectedLocked}
                        onChange={(e) => setSelectedLocked(e.target.value)}
                        sx={{
                          color: "white",
                          fontSize: "1.2rem",
                          background: "#000",
                        }}
                      >
                        {lockedOptions.map((option) => (
                          <MenuItem
                            key={option}
                            value={option}
                            style={{
                              background: "#000",
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                    {/* <TableCell
                        align="right"
                        sx={{ color: "white", fontSize: "1.2rem" }}
                      >
                        Total Value Locked
                      </TableCell> */}
                    <TableCell
                      align="right"
                      sx={{ color: "white", fontSize: "1.2rem" }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      hover
                      key={`row-${row.id}`}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        align="right"
                        component="th"
                        scope="row"
                        sx={{ color: "blueviolet", fontSize: "1.2rem" }}
                      >
                        {row.days}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "white", fontSize: "1.2rem" }}
                      >
                        {selectedDaysLeft === "Days Left Current Pool"
                          ? row.daysLeft
                          : row.daysLeftPast}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "white", fontSize: "1.2rem" }}
                      >
                        {selectedEarned === "Earned XLB Current Pool"
                          ? row.xlbRewards
                          : row.xlbRewardsPast}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "blueviolet", fontSize: "1.2rem" }}
                      >
                        {selectedETH === "Earned ETH"
                          ? row.ethRewards
                          : row.ethRewardsPast}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "white", fontSize: "1.2rem" }}
                      >
                        {selectedLocked === "Locked XLB Current Pool"
                          ? row.staked
                          : row.stakedPast}
                      </TableCell>
                      {/* <TableCell
                          align="right"
                          sx={{ color: "white", fontSize: "1.2rem" }}
                        >
                          {row.tvl}
                        </TableCell> */}
                      <TableCell
                        align="right"
                        sx={{ color: "white", fontSize: "1.2rem" }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 10,
                            marginLeft: 40,
                          }}
                        >
                          <Button
                            className={classe.buttonS}
                            variant="contained"
                            sx={buttonStyles}
                            type="button"
                            disabled={
                              (selectedEarned === "Earned XLB Current Pool" &&
                                row.xlbRewards === "0") ||
                              (selectedEarned === "Earned XLB Past Pool" &&
                                row.xlbRewardsPast === "0")
                            }
                            style={{
                              marginBottom: 10,
                            }}
                            onClick={() => handleClaim(row.cInstance)}
                          >
                            Claim Rewards {row.days} Days
                          </Button>
                          {(selectedDaysLeft === "Days Left Current Pool" &&
                            row.daysLeft === "0") ||
                          (selectedDaysLeft === "Days Left Past Pool" &&
                            row.daysLeftPast === "0") ? (
                            <Button
                              className={classe.buttonS}
                              variant="contained"
                              sx={buttonStyles}
                              type="button"
                              style={{
                                marginBottom: 10,
                              }}
                              // onClick={() =>
                              //   handleUnstake(row.contractInstance)
                              // }
                            >
                              Unstake {row.days} Days
                            </Button>
                          ) : (
                            <Button
                              className={classe.buttonS}
                              variant="contained"
                              sx={buttonStyles}
                              type="button"
                              disabled={
                                (selectedEarned === "Earned XLB Current Pool" &&
                                  row.xlbRewards === "0") ||
                                (selectedEarned === "Earned XLB Past Pool" &&
                                  row.xlbRewardsPast === "0")
                              }
                              style={{
                                marginBottom: 10,
                              }}
                              onClick={() => {
                                switch (row.days) {
                                  case "30":
                                    handleStakeRewards(row.contractInstance);
                                    break;
                                  case "60":
                                    handleStakeRewards60(row.contractInstance);
                                    break;
                                  case "90":
                                    handleStakeRewards90(row.contractInstance);
                                    break;
                                  case "180":
                                    handleStakeRewards180(row.contractInstance);
                                    break;
                                  case "365":
                                    handleStakeRewards365(row.contractInstance);
                                    break;
                                  default:
                                    console.error("Invalid token value");
                                }
                              }}
                            >
                              Compound Rewards {row.days} Days
                            </Button>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      )}
      {matches && (
        <Grid item xs={12}>
          <Paper
            elevation={10}
            style={{
              background: "#000",
              padding: 15,
            }}
          >
            <Typography
              className={classes.hTitle}
              variant="h5"
              component="h2"
              style={{
                paddingTop: 10,
                paddingBottom: 15,
                textAlign: "center",
                color: "rgb(167, 230, 255)",
              }}
            >
              Staking Rewards
            </Typography>
            <hr />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                XLB APY
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                30%
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                XLB Earned 30 Day
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                0.0000 &#40;$0.00&#41;
              </Typography>
            </Box>
            {/* <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                Staking Pool Share
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                1.8%
              </Typography>
            </Box> */}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                ETH Rewards Collected
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                0.0000 &#40;$0.00&#41;
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                Dividends Earned
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                0.0000 &#40;$0.00&#41;
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: 10,
                color: "white",
              }}
            >
              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                Total
              </Typography>

              <Typography
                className={classes.hTitle}
                variant="subtitle1"
                component="h2"
                style={{
                  paddingBottom: 10,
                  color: "white",
                }}
              >
                $0.00
              </Typography>
            </Box>
            <hr />
            <Box
              style={{
                marginTop: 15,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
              >
                Compound
              </Button>
              <Button
                className={classe.buttonS}
                variant="contained"
                sx={buttonStyles}
                style={{ width: "110px" }}
              >
                Claim
              </Button>
            </Box>
          </Paper>
        </Grid>
      )}
    </>
  );
};

export default RewardInfo;
