import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/dashboard/TopBar";
import { useState } from "react";
import Test from "./pages/Test";
// import BuyForm from "./components/exchange/BuyForm";
// import Exchange from "./pages/Exchange";
import DIP from "./pages/DAO/DeFiInvestmentPool";
import Governance from "./pages/DAO/Governance";
import SubPage1 from "./pages/DAO/SubPage1";
import SubPage2 from "./pages/DAO/SubPage2";
import SubPage3 from "./pages/DAO/SubPage3";
import SubPage4 from "./pages/DAO/SubPage4";
import SubPage5 from "./pages/DAO/SubPage5";
import SubPage6 from "./pages/DAO/SubPage6";
import SubPage7 from "./pages/DAO/SubPage7";
import StakingModal from "./components/stake/StakingModal";
import PoolOption from "./components/pools/PoolOption";
import UnstakingModal from "./components/stake/UnstakingModal";
// import Disclaimer1 from "./components/Disclaimer1";
// import Disclaimer2 from "./components/Disclaimer2";
import TokenFaucet from "./components/exchange/TokenFaucet";
// import PoolOptionCompound from "./components/dont-need/PoolOptionCompound";
// import PoolOptionClaim from "./components/dont-need/PoolOptionClaim";
import StakingModal60 from "./components/stake/StakingModal60";
import StakingModal90 from "./components/stake/StakingModal90";
import StakingModal180 from "./components/stake/StakingModal180";
import StakingModal365 from "./components/stake/StakingModal365";
import Dex from "./components/exchange/Dex";

const App = () => {
  const [reloadBalance, setReloadBalance] = useState(0);
  const [sAmount, setSAmount] = useState(0);
  const [sLockInDays, setSLockInDays] = useState(0);

  return (
    <BrowserRouter>
      <TopBar setReloadBalance={setReloadBalance} />
      <Routes>
        <Route
          path="/"
          element={
            <Home reloadBalance={reloadBalance} sLockInDays={sLockInDays} />
          }
        />
        <Route path="/test" element={<Test />}></Route>
        <Route path="/tokenfaucet" element={<TokenFaucet />}></Route>
        <Route path="/dip" element={<DIP />}></Route>
        <Route path="/governance" element={<Governance />}></Route>
        <Route path="/pools" element={<PoolOption />}></Route>
        {/* <Route path="/poolsclaim" element={<PoolOptionClaim />}></Route>
        <Route path="/poolscompound" element={<PoolOptionCompound />}></Route> */}
        <Route path="/dex" element={<Dex />}></Route>
        <Route
          path="/staking30"
          element={
            <StakingModal
              sAmount={sAmount}
              setSAmount={setSAmount}
              setSLockInDays={setSLockInDays}
            />
          }
        ></Route>
        <Route path="/staking60" element={<StakingModal60 />}></Route>
        <Route path="/staking90" element={<StakingModal90 />}></Route>
        <Route path="/staking180" element={<StakingModal180 />}></Route>
        <Route path="/staking365" element={<StakingModal365 />}></Route>
        <Route
          path="/unstaking"
          element={
            <UnstakingModal
              setSAmount={setSAmount}
              setSLockInDays={setSLockInDays}
            />
          }
        ></Route>
        {/* <Route
          path="/disclaimer"
          element={
            <Disclaimer1
              sAmount={sAmount}
              sLockInDays={sLockInDays}
              sDate={sDate}
            />
          }
        ></Route>
        <Route
          path="/disclaimer2"
          element={<Disclaimer2 sLockInDays={sLockInDays} />}
        ></Route> */}
        <Route path="/defi-agg" element={<SubPage1 />}></Route>
        <Route path="/dex" element={<SubPage2 />}></Route>
        <Route path="/dao" element={<SubPage3 />}></Route>
        <Route path="/layer1" element={<SubPage4 />}></Route>
        <Route path="/gamefi" element={<SubPage5 />}></Route>
        <Route path="/layer2" element={<SubPage6 />}></Route>
        <Route path="/ors" element={<SubPage7 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
