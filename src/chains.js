import { MetaMaskConnector } from "wagmi/connectors/metaMask";

export const chains = [
  /*{
		id: 42262,
		name: "Emerald",
		nativeCurrency: {
			name: "ROSE",
			symbol: "ROSE",
			decimals: 18,
		},
		rpcUrls: {
			default: "https://emerald.oasis.dev",
		},
	},*/
  {
    id: 42261,
    name: "Emerald Testnet",
    nativeCurrency: {
      name: "TEST",
      symbol: "TEST",
      decimals: 18,
    },
    rpcUrls: {
      default: "https://testnet.emerald.oasis.dev",
    },
    testnet: true,
  },
];
