import { useEffect, useCallback, useState, useMemo } from "react";

import Web3 from "web3";

export const useDisplayBalance = async () => {
  const account = useAccount();
  const balance = useXLBBalance(account);
  return !!balance ? Web3.utils.fromWei(balance) : "n/a";
};

export const useDisplayTreasuryBalance = async () => {
  const balance = useXLBBalance("0xAcdede90118B3262348ACd961C63EB368d640835");
  return !!balance ? Web3.utils.fromWei(balance) : "n/a";
};

export function useXLB() {
  const web3 = useWeb3();
  const erc20Abi = [
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  return new web3.eth.Contract(
    erc20Abi,
    "0x4B034645BC8B43A300739f83AEaCdbF0E1a90a38"
  );
}

export function useXLBBalance(address) {
  const xlb = useXLB();
  const [balance, setBalance] = useState(null);

  if (!address) return null;

  xlb.methods
    .balanceOf(address)
    .call()
    .then((balance) => {
      setBalance(balance);
    });
  return balance;
}

export function useTreasury() {
  const web3 = useWeb3();
  const treasuryABI = [
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  return new web3.eth.Contract(
    treasuryABI,
    "0xAcdede90118B3262348ACd961C63EB368d640835"
  );
}

export function useAccount() {
  const [account, setAccount] = useState(null);

  const handleAccountsChange = useCallback((accounts) => {
    setAccount(accounts[0]);
  }, []);

  useEffect(() => {
    window.ethereum.on("accountsChanged", handleAccountsChange);
  }, []);

  return account;
}

export function useWeb3() {
  const provider = window.ethereum || null;
  const web3 = useMemo(() => {
    if (!provider) return null;
    return new Web3(provider);
  }, [provider]);
  return web3;
}
