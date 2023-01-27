// import { ethers } from "ethers";
// import React, { useState, useMemo } from "react";
// import {
//   useAddresses,
//   useContractRouterRead,
//   useContractRouterWrite,
//   useContractXLBRead,
// } from "../../hooks/libertas";
// import { useAccount, useBalance } from "wagmi";
// import { Box, Paper, Typography, Button, Container } from "@mui/material";
// import { makeStyles } from "@material-ui/core";

// const BuyForm = () => {
//   const [input, SetInput] = useState("0");
//   const addresses = useAddresses();
//   const { address } = useAccount();

//   const { data: output } = useContractRouterRead("getAmountsOut", [
//     ethers.utils.parseEther(input),
//     [addresses?.WROSE, addresses?.XLB],
//   ]);
//   const contractSwap = useContractRouterWrite(
//     "swapExactETHForTokensSupportingFeeOnTransferTokens",
//     [
//       ethers.utils.parseEther("0"),
//       [addresses?.WROSE, addresses?.XLB],
//       address,
//       ethers.constants.MaxUint256,
//     ],
//     {
//       overrides: {
//         value: ethers.utils.parseEther(input),
//       },
//     }
//   );
//   const { data: balanceRose } = useBalance({
//     addressOrName: address,
//   });

//   const balanceROSEFormatted = useMemo(
//     () => (balanceRose ? balanceRose.formatted.split(".")[0] + " ROSE" : "n/a"),
//     [balanceRose]
//   );

//   // const { data: balanceXLB } = useBalance({
//   //   addressOrName: addresses.treasury,
//   //   token: addresses?.XLB,
//   // });

//   // const balanceXLBFormatted = useMemo(
//   //   () => (balanceXLB ? balanceXLB.formatted.split(".")[0] + " XLB" : "n/a"),
//   //   [balanceXLB]
//   // );

//   const { data: balanceRaw } = useContractXLBRead("balanceOf", address);

//   const balanceXLB = useMemo(
//     () =>
//       balanceRaw
//         ? ethers.utils.formatEther(balanceRaw.sub(balanceRaw.mod(1e14))) +
//           " XLB"
//         : "n/a XLB",
//     [balanceRaw]
//   );

//   const exchangeRate = useContractRouterRead("getAmountOut", [
//     ethers.utils.parseEther("1"),
//     [addresses?.WROSE, addresses?.XLB],
//   ]);

//   console.log([
//     ethers.utils.parseEther("1"),
//     [addresses?.WROSE, addresses?.XLB],
//   ]);

//   const buttonSty = makeStyles((theme) => ({
//     buttonS: {
//       padding: theme.spacing(1),
//       [theme.breakpoints.down("md")]: {
//         fontSize: [10, "!important"],
//       },
//     },
//   }));

//   const buttonStyles = {
//     marginLeft: "10px",
//     width: 300,
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
//     marginBottom: "20px",
//   };

//   const classe = buttonSty();

//   return (
//     <Container maxWidth="md">
//       <Paper
//         elevation={10}
//         style={{
//           marginTop: 50,
//           marginBottom: 50,
//           display: "flex",
//           flexDirection: "column",
//           borderStyle: "double",
//           borderColor: "#fa8128",
//           borderRadius: "10px",
//           background: "rgba(255,255,255, 0.5)",
//         }}
//       >
//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             marginLeft: "-40px",
//           }}
//         >
//           <form
//             onSubmit={(event) => {
//               event.preventDefault();
//               contractSwap.write();
//             }}
//             style={{
//               textAlign: "center",
//               marginLeft: "3%",
//             }}
//           >
//             <Typography
//               className="hTitle"
//               variant="h5"
//               component="h5"
//               style={{
//                 marginTop: "25px",
//                 color: "Black",
//               }}
//             >
//               Balance: {balanceROSEFormatted}{" "}
//               <img
//                 src="../oasis.svg"
//                 alt=""
//                 style={{
//                   width: "4%",
//                   marginLeft: "1%",
//                   marginBottom: "-0.3%",
//                 }}
//               />
//             </Typography>

//             <input
//               type="text"
//               onChange={(event) => {
//                 SetInput(event.target.value || "0");
//               }}
//               value={input}
//               required
//               style={{
//                 marginTop: "2%",
//                 color: "black",
//                 width: "400px",
//                 height: "45px",
//                 fontSize: "20px",
//                 textAlign: "center",
//                 borderStyle: "double",
//                 borderColor: "#C8E9E9",
//                 background: "white",
//                 borderRadius: "10px",
//               }}
//             />
//             <Typography
//               className="hTitle"
//               variant="h5"
//               component="h5"
//               style={{
//                 marginTop: "55px",
//                 color: "black",
//               }}
//             >
//               Balance: {balanceXLB}
//               <img
//                 src="../flame.svg"
//                 alt=""
//                 style={{
//                   width: "3%",
//                   marginLeft: "2%",
//                   marginBottom: "-2%",
//                 }}
//               />
//             </Typography>
//             <input
//               type="text"
//               value={output || ethers.utils.formatEther(input)}
//               disabled
//               style={{
//                 marginTop: "2%",
//                 color: "black",
//                 width: "400px",
//                 height: "45px",
//                 fontSize: "20px",
//                 textAlign: "center",
//                 borderStyle: "double",
//                 borderColor: "#fa8128",
//                 background: "white",
//                 borderRadius: "10px",
//               }}
//             />
//             <Typography
//               className="hTitle"
//               variant="subtitle2"
//               component="h2"
//               style={{
//                 marginTop: "25px",
//                 marginBottom: "25px",
//                 textAlign: "center",
//                 color: "black",
//               }}
//             >
//               Slippage: 13% - Exchange Rate:{" "}
//               {!exchangeRate.data ||
//                 ethers.utils.formatEther(exchangeRate.data[1])}
//             </Typography>
//             <Button
//               type="submit"
//               className={classe.buttonS}
//               variant="contained"
//               sx={buttonStyles}
//             >
//               SWAP!
//             </Button>
//           </form>
//         </Box>
//         <Box
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-end",
//             marginTop: "-347px",
//             marginBottom: "50px",
//             marginRight: "10%",
//           }}
//         >
//           <img
//             src="../flame.svg"
//             alt=""
//             style={{
//               width: "12%",
//               opacity: "0.7",
//               zIndex: 100,
//               cursor: "pointer",
//             }}
//           />
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default BuyForm;
