// // import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";
// import { makeStyles } from "@material-ui/core";
// import { useTheme } from "@mui/material/styles";
// import { useMediaQuery } from "@mui/material";
// import { Link } from "react-router-dom";
// import Web3 from "web3";
// import { StakingAbi } from "../../abi/staking";
// import { Staking60Abi } from "../../abi/staking60";
// import { Staking90Abi } from "../../abi/staking90";
// import { Staking180Abi } from "../../abi/staking180";
// import { Staking365Abi } from "../../abi/staking365";

// const fontStyles = makeStyles((theme) => ({
//   hTitle: {
//     padding: theme.spacing(1),
//     [theme.breakpoints.down("md")]: {
//       fontSize: [15, "!important"],
//     },
//   },
// }));

// const buttonSty = makeStyles((theme) => ({
//   buttonS: {
//     padding: theme.spacing(1),
//     [theme.breakpoints.down("md")]: {
//       fontSize: [14, "!important"],
//     },
//   },
// }));

// const PoolOptionClaim = () => {
//   const [web3, setWeb3] = useState(null);
//   const [contractInstance, setContractInstance] = useState(null);
//   const [contractInstance60, setContractInstance60] = useState(null);
//   const [contractInstance90, setContractInstance90] = useState(null);
//   const [contractInstance180, setContractInstance180] = useState(null);
//   const [contractInstance365, setContractInstance365] = useState(null);

//   useEffect(() => {
//     // Check if the user has metamask installed and is logged in
//     if (window.ethereum) {
//       const web3 = new Web3(window.ethereum);
//       setWeb3(web3);

//       const contractAddress = "0xF31907EC1Cd3997B62021404fc134598bfEEeeAb";
//       const contractInstance = new web3.eth.Contract(
//         StakingAbi,
//         contractAddress
//       );
//       setContractInstance(contractInstance);
//       const contractAddress60 = "0x5E42A2317C5E986423a8D0936edc98FcC21734d8";
//       const contractInstance60 = new web3.eth.Contract(
//         Staking60Abi,
//         contractAddress60
//       );
//       setContractInstance60(contractInstance60);
//       const contractAddress90 = "0xCe385e1f19989fE92D6484a103768733d5edf6D1";
//       const contractInstance90 = new web3.eth.Contract(
//         Staking90Abi,
//         contractAddress90
//       );
//       setContractInstance90(contractInstance90);
//       const contractAddress180 = "0x3fBB8132A6d83469Db6B46585E7a766fd5244AC9";
//       const contractInstance180 = new web3.eth.Contract(
//         Staking180Abi,
//         contractAddress180
//       );
//       setContractInstance180(contractInstance180);
//       const contractAddress365 = "0xE6be8D502A5104eD2f85eb27A5eDB914AB827F78";
//       const contractInstance365 = new web3.eth.Contract(
//         Staking365Abi,
//         contractAddress365
//       );
//       setContractInstance365(contractInstance365);
//     } else {
//       console.log("You need to install metamask");
//     }
//   }, []);

//   const handleClaim = async () => {
//     const accounts = await web3.eth.getAccounts();
//     const result = await contractInstance.methods
//       .claim()
//       .send({ from: accounts[0] });
//     console.log(result);
//   };

//   const handleClaim60 = async () => {
//     const accounts = await web3.eth.getAccounts();
//     const result = await contractInstance60.methods
//       .claim()
//       .send({ from: accounts[0] });
//     console.log(result);
//   };

//   const handleClaim90 = async () => {
//     const accounts = await web3.eth.getAccounts();
//     const result = await contractInstance90.methods
//       .claim()
//       .send({ from: accounts[0] });
//     console.log(result);
//   };

//   const handleClaim180 = async () => {
//     const accounts = await web3.eth.getAccounts();
//     const result = await contractInstance180.methods
//       .claim()
//       .send({ from: accounts[0] });
//     console.log(result);
//   };

//   const handleClaim365 = async () => {
//     const accounts = await web3.eth.getAccounts();
//     const result = await contractInstance365.methods
//       .claim()
//       .send({ from: accounts[0] });
//     console.log(result);
//   };

//   const buttonStyles = {
//     marginTop: "10px",
//     width: "100%",
//     fontWeight: 800,
//     color: "black",
//     borderRadius: "10px",
//     background: "linear-gradient(to right, #fa8128, #C8E9E9);",
//     "&:hover": {
//       background: "linear-gradient(to right, #C8E9E9, #fa8128);",
//       transition: ".4s",
//       boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
//       borderRadius: "15px",
//     },
//   };

//   const classe = buttonSty();
//   const classes = fontStyles();
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Container maxWidth="xs">
//       {/* {console.log("stakedAmount:", sAmount)}
//       {console.log("locktime:", sLockInDays)} */}
//       {matches && (
//         <Grid container spacing={5}>
//           <Grid item xs={12}>
//             <Paper
//               elevation={10}
//               style={{
//                 borderStyle: "double",
//                 borderColor: "#fa8128",
//                 background: "rgba(0, 21, 66, 0.651)",
//                 marginTop: 40,
//                 marginBottom: 40,
//                 padding: 15,
//               }}
//             >
//               <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   color: "white",
//                 }}
//               >
//                 <Typography
//                   className={classes.hTitle}
//                   variant="h5"
//                   component="h2"
//                   style={{
//                     paddingTop: 10,
//                     color: "rgb(167, 230, 255)",
//                   }}
//                 >
//                   Stake
//                 </Typography>
//                 <Typography
//                   className={classes.hTitle}
//                   variant="h6"
//                   component="h2"
//                   style={{
//                     paddingTop: 10,
//                     color: "#fff",
//                   }}
//                 >
//                   XLB
//                 </Typography>
//               </Box>
//               <hr />
//               <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "flex-start",
//                   paddingBottom: 10,
//                   color: "white",
//                 }}
//               >
//                 <Typography
//                   className={classes.hTitle}
//                   variant="h6"
//                   component="h2"
//                   style={{
//                     textDecoration: "underline",
//                     fontWeight: 700,
//                   }}
//                 >
//                   Stake
//                 </Typography>

//                 <Typography
//                   className={classes.hTitle}
//                   variant="h6"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "grey",
//                   }}
//                 >
//                   Unstake
//                 </Typography>
//               </Box>
//               <Box
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   color: "white",
//                 }}
//               >
//                 <Box
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     color: "white",
//                   }}
//                 >
//                   <Typography
//                     className={classes.hTitle}
//                     variant="subtitle2"
//                     component="h2"
//                     style={{
//                       color: "white",
//                     }}
//                   >
//                     Select Amount
//                   </Typography>
//                   <Typography
//                     className={classes.hTitle}
//                     variant="subtitle2"
//                     component="h2"
//                     style={{
//                       color: "grey",
//                     }}
//                   >
//                     Balance: 0.00
//                   </Typography>
//                 </Box>
//                 <input
//                   type="text"
//                   defaultValue="0.0"
//                   style={{
//                     marginTop: "2%",
//                     marginBottom: "3%",
//                     color: "black",
//                     width: "100%",
//                     height: "45px",
//                     fontSize: "20px",
//                     textAlign: "center",
//                     borderStyle: "double",
//                     borderColor: "rgb(167, 230, 255)",
//                     background: "white",
//                     borderRadius: "10px",
//                   }}
//                 ></input>
//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle2"
//                   component="h2"
//                   style={{
//                     color: "white",
//                   }}
//                 >
//                   Stake Duration &#40;max 27 months&#41;
//                 </Typography>
//                 <input
//                   type="text"
//                   defaultValue="0.0"
//                   style={{
//                     marginTop: "2%",
//                     marginBottom: "3%",
//                     color: "black",
//                     width: "100%",
//                     height: "45px",
//                     fontSize: "20px",
//                     textAlign: "center",
//                     borderStyle: "double",
//                     borderColor: "#fa8128",
//                     background: "white",
//                     borderRadius: "10px",
//                   }}
//                 ></input>
//               </Box>

//               <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingBottom: 10,
//                   color: "white",
//                 }}
//               >
//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   APY
//                 </Typography>

//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   5% - 9%
//                 </Typography>
//               </Box>
//               <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingBottom: 10,
//                   color: "white",
//                 }}
//               >
//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   Staked Amount
//                 </Typography>

//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   0.00 XLB
//                 </Typography>
//               </Box>
//               <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingBottom: 10,
//                   color: "white",
//                 }}
//               >
//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   Voting Power
//                 </Typography>

//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   0.00 $sXLB
//                 </Typography>
//               </Box>
//               {/* <Box
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   paddingBottom: 10,
//                   color: "white",
//                 }}
//               >
//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   Time Left
//                 </Typography>
//                 <Typography
//                   className={classes.hTitle}
//                   variant="subtitle1"
//                   component="h2"
//                   style={{
//                     paddingBottom: 10,
//                     color: "white",
//                   }}
//                 >
//                   0 mark
//                 </Typography>
//               </Box> */}
//               <Link to="/">
//                 <Button
//                   className={classe.buttonS}
//                   variant="contained"
//                   sx={buttonStyles}
//                   type="button"
//                 >
//                   30 Day Pool
//                 </Button>
//               </Link>
//             </Paper>
//           </Grid>
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default PoolOptionClaim;
