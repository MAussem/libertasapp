import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './components/TopBar';
// import Calculator from './pages/Calculator';




const App = () => {

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/calc' element={<Calculator />} /> */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
