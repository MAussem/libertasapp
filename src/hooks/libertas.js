import { useMemo } from "react";
import { useContractRead, useContractWrite } from "wagmi";

import { XLBAbi } from "../abi/xlb";

export function useAddresses() {
  return useMemo(() => {
    return {
      treasury: "0xAcdede90118B3262348ACd961C63EB368d640835",
      moneto: "0xAcdede90118B3262348ACd961C63EB368d640835",
      RFV: "0xAcdede90118B3262348ACd961C63EB368d640835",
      WROSE: "0xF6262304F3A41535549De2afA925f8b7FFc6d779",
      XLB: "0x4B034645BC8B43A300739f83AEaCdbF0E1a90a38",
      ACManager: "0x4491dc4fc7E9db9480F7e094466D9ff6eF42b853",
      feeCollector: "0x26400d132ce162866dDf6Fe4010ECD27340B607F",
      burner: "0xB1ee0ADF0EF62c003b578C70e0De5e30A9A8b3d1",
      burnerStorage: "0x609e3E868ac865734E668387A7Cc7C5484150075",
      router: "0xB36590a4Ce34870682228873aBE1de2E2cA4a413",
      consensus: "0xE1f22978A308E2684E28172878fd2b1c5170b318",
    };
  }, []);
}

export function useContractXLBRead(functionName, args, options) {
  const addresses = useAddresses();
  return useContractRead({
    addressOrName: addresses?.XLB,
    contractInterface: XLBAbi,
    functionName,
    args,
    ...options,
  });
}

export function useContractXLBWrite(functionName, args) {
  const addresses = useAddresses();
  return useContractWrite({
    addressOrName: addresses?.XLB,
    contractInterface: XLBAbi,
    functionName,
    args,
  });
}