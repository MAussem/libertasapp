import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import Calculator from "./pages/Calculator";
import { useState } from "react";
import Test from "./pages/Test";
// import BuyForm from "./components/exchange/BuyForm";
import Exchange from "./pages/Exchange";
import DIP from "./pages/DAO/DeFiInvestmentPool";
import Governance from "./pages/DAO/Governance";
import SubPage1 from "./pages/DAO/SubPage1";
import SubPage2 from "./pages/DAO/SubPage2";
import SubPage3 from "./pages/DAO/SubPage3";
import SubPage4 from "./pages/DAO/SubPage4";
import SubPage5 from "./pages/DAO/SubPage5";
import SubPage6 from "./pages/DAO/SubPage6";
import SubPage7 from "./pages/DAO/SubPage7";
import StakingModal from "./components/StakingModal";
import Disclaimer1 from "./components/Disclaimer1";

const App = () => {
  const [reloadBalance, setReloadBalance] = useState(0);
  return (
    <BrowserRouter>
      <TopBar setReloadBalance={setReloadBalance} />
      <Routes>
        <Route path="/" element={<Home reloadBalance={reloadBalance} />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/test" element={<Test />}></Route>
        <Route path="/swap" element={<Exchange />}></Route>
        <Route path="/dip" element={<DIP />}></Route>
        <Route path="/governance" element={<Governance />}></Route>
        <Route path="/staking" element={<StakingModal />}></Route>
        <Route path="/disclaimer" element={<Disclaimer1 />}></Route>
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
