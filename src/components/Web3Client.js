import Web3 from 'web3';

// import XLB from 'contracts/Token.json';
  
  
  let selectedAccount;

  let isInitialized = false;

  let erc20Contract;

  let treasury;

  let treasuryContract;

export const init = async () => {
  let provider = window.ethereum;

  if(typeof provider !== 'undefined') {
    provider.request({method: 'eth_requestAccounts' }).then(accounts => {
      selectedAccount = accounts[0];
      console.log({selectedAccount});
    }).catch(err => {
      console.log(err);
    });

    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0];
      console.log({selectedAccount});
    });
  }

  const web3 = new Web3(provider);

  // const networkId = await web3.eth.net.getId();

    const erc20Abi = [
    {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "name": "balance",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  ];

  const treasuryABI = [
    {
      "constant": true,
      "inputs": [
          {
              "name": "_owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "name": "balance",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  ];

  treasuryContract = new web3.eth.Contract(
    treasuryABI,
    '0xAcdede90118B3262348ACd961C63EB368d640835'
  );

  erc20Contract = new web3.eth.Contract(
    erc20Abi,
    '0x4B034645BC8B43A300739f83AEaCdbF0E1a90a38'
  );

  isInitialized = true;
};

//   xlbContract = new web3.eth.Contract(XLB.abi, XLB.networks[networkId].address);
//   isInitialized = true;
// }

export const displayBalance = async () => {
  if(!isInitialized) {
    await init();
  }
  return erc20Contract.methods.balanceOf(selectedAccount).call().then(balance => {
    return Web3.utils.fromWei(balance);
  });
}

export const displayTreasuryBalance = async () => {
  if(!isInitialized) {
    await init();
  }
  return treasuryContract.methods.balanceOf(treasury).call().then(balance => {
    return Web3.utils.fromWei(balance);
  });
}