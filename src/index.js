import React from "react";
import ReactDOM from "react-dom/client";

import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { chains } from "./chains";
import App from "./App";

import "./index.css";

const { provider, webSocketProvider } = configureChains(chains, [
  jsonRpcProvider({
    rpc: (chain) => ({
      http: "https://eth-goerli.g.alchemy.com/v2/v0EPL9x-68Gh10zA-N86BBWudkMSC2yH",
    }),
  }),
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={client}>
    <App />
  </WagmiConfig>
);
