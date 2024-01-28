import logo from './logo.svg';
import './App.css';
import Landingpage from './assign/landingpage';
import { BrowserRouter,Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
