// import { useState, useEffect } from "react";
// import Web3 from "web3";
// import { LIBERTAS_ROUTER_ADDRESS, UNI_FACTORY_ADDRESS } from "./constants";
// import LibertasRouter from "./contracts/LibertasRouter.json";
// import ERC20 from "./contracts/ERC20.json";
// import { getTokenImage } from "./utils";

// function Dex() {
//   const [web3, setWeb3] = useState(null);
//   const [accounts, setAccounts] = useState([]);
//   const [tokenA, setTokenA] = useState("");
//   const [tokenB, setTokenB] = useState("");
//   const [amountA, setAmountA] = useState("");
//   const [amountB, setAmountB] = useState("");
//   const [swapResult, setSwapResult] = useState(null);
//   const [tokenList, setTokenList] = useState([]);
//   const [selectedTokenA, setSelectedTokenA] = useState(null);
//   const [selectedTokenB, setSelectedTokenB] = useState(null);

//   const getTokenList = async () => {
//     const response = await fetch(
//       "https://gateway.ipfs.io/ipns/tokens.uniswap.org"
//     );
//     const json = await response.json();
//     setTokenList(json.tokens);
//   };

//   useEffect(() => {
//     getTokenList();
//   }, []);

//   const connectWallet = async () => {
//     try {
//       const provider = await window.ethereum;
//       const web3 = new Web3(provider);
//       const accounts = await web3.eth.requestAccounts();
//       setWeb3(web3);
//       setAccounts(accounts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleTokenAChange = (e) => {
//     const tokenAddress = e.target.value;
//     setTokenA(tokenAddress);
//     setSelectedTokenA(
//       tokenList.find((token) => token.address === tokenAddress)
//     );
//   };

//   const handleTokenBChange = (e) => {
//     const tokenAddress = e.target.value;
//     setTokenB(tokenAddress);
//     setSelectedTokenB(
//       tokenList.find((token) => token.address === tokenAddress)
//     );
//   };

//   const handleAmountAChange = (e) => {
//     const amount = e.target.value;
//     setAmountA(amount);
//     setAmountB("");
//   };

//   const handleAmountBChange = (e) => {
//     const amount = e.target.value;
//     setAmountB(amount);
//     setAmountA("");
//   };

//   const handleSwap = async () => {
//     const tokenAContract = new web3.eth.Contract(ERC20.abi, tokenA);
//     const tokenBContract = new web3.eth.Contract(ERC20.abi, tokenB);

//     const decimalsA = await tokenAContract.methods.decimals().call();
//     const decimalsB = await tokenBContract.methods.decimals().call();

//     const amountAWithDecimals = web3.utils.toWei(amountA, decimalsA);
//     const amountBWithDecimals = web3.utils.toWei(amountB, decimalsB);

//     const routerContract = new web3.eth.Contract(
//       LibertasRouter.abi,
//       LIBERTAS_ROUTER_ADDRESS
//     );

//     const gasPrice = await web3.eth.getGasPrice();
//     const gasLimit = 1000000;

//     try {
//       const result = await routerContract.methods
//         .swapExactTokensForTokens(
//           amountAWithDecimals,
//           amountBWithDecimals,
//           [tokenA, tokenB],
//           accounts[0],
//           Date.now() + 1000 * 60 * 10 // deadline 10 minutes from now
//         )
//         .send({ from: accounts[0], gasPrice, gasLimit });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Libertas DEX</h1>
//       </header>
//       <div className="container">
//         <div className="row">
//           <div className="col-sm">
//             <div className="form-group">
//               <label htmlFor="tokenA">Token A</label>
//               <select
//                 className="form-control"
//                 id="tokenA"
//                 onChange={handleTokenAChange}
//                 value={tokenA}
//               >
//                 <option value="">Select Token</option>
//                 {tokenList.map((token) => (
//                   <option key={token.address} value={token.address}>
//                     {token.symbol}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="amountA">Amount A</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="amountA"
//                 onChange={handleAmountAChange}
//                 value={amountA}
//               />
//             </div>
//           </div>
//           <div className="col-sm">
//             <div className="form-group">
//               <label htmlFor="tokenB">Token B</label>
//               <select
//                 className="form-control"
//                 id="tokenB"
//                 onChange={handleTokenBChange}
//                 value={tokenB}
//               >
//                 <option value="">Select Token</option>
//                 {tokenList.map((token) => (
//                   <option key={token.address} value={token.address}>
//                     {token.symbol}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="form-group">
//               <label htmlFor="amountB">Amount B</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="amountB"
//                 onChange={handleAmountBChange}
//                 value={amountB}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm">
//             <button className="btn btn-primary" onClick={handleSwap}>
//               Swap
//             </button>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm">
//             {swapResult && (
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Swap Result</h5>
//                   <div className="row">
//                     <div className="col-sm">
//                       <img src={getTokenImage(selectedTokenA)} alt="Token A" />
//                       <p>{selectedTokenA.symbol}</p>
//                       <p>
//                         {swapResult.amount0In} {selectedTokenA.symbol} In
//                       </p>
//                       <p>
//                         {swapResult.amount0Out} {selectedTokenA.symbol} Out
//                       </p>
//                     </div>
//                     <div className="col-sm">
//                       <img src={getTokenImage(selectedTokenB)} alt="Token B" />
//                       <p>{selectedTokenB.symbol}</p>
//                       <p>
//                         {swapResult.amount1Out} {selectedTokenB.symbol} Out
//                       </p>
//                       <p>
//                         {swapResult.amount1In} {selectedTokenB.symbol} In
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dex;
