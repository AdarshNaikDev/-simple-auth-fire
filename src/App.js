import Login from './Components/Login'
import Login2 from './Components/Login2'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Signup from './Components/Signup';
import Home from './Components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path = "/" element = { <Login2 />}  />
      <Route path = "/login2" element = {<Login/>} />
      <Route path = "/signup" element = { <Signup/>} />
      <Route path = "/home" element = {<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
