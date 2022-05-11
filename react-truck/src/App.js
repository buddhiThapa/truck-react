import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';
import { Register } from './pages/Register';
import { Forget_password } from './pages/Forget_password';
import Login from './pages/Login';
import  i18n  from 'i18next';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect,useState } from 'react';


const App = ()=> {
  
  const [lan,setLang] = useState('en');
  useEffect(()=>{
    i18n.changeLanguage(localStorage.getItem('lang'));
    setLang(localStorage.getItem('lang'));
    console.log(lan)
  },[lan])
  
  return (
    
    <div className="App">
      
      <Router>
        <Nav/>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Forget_password" element={<Forget_password />}></Route>
        </Routes>
      </Router>
      
      <Footer/>
    </div>
    
  );
}

export default App;
