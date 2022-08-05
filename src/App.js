import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './components/TopBar';
import Calculator from './pages/Calculator';
import { useState } from 'react';




const App = () => {

  const [reloadBalance, setReloadBalance] = useState(0);
  return (
    <BrowserRouter>
      <TopBar setReloadBalance={setReloadBalance}/>
      <Routes>
        <Route path='/' element={<Home reloadBalance={reloadBalance}/>}/>
        <Route path='/calc' element={<Calculator />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
