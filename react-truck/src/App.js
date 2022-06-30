import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';
import { Register } from './pages/Register';
import { Forget_password } from './pages/Forget_password';
import { Truck_types } from './pages/TruckTypes';
import { Dashboard } from './pages/user/Dashboard';
import PureComponent01  from './pages/PureComponent01';
import Login from './pages/Login';
import  i18n  from 'i18next';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect,useMemo,useState } from 'react';


const App = ()=> {
  
  const [lan,setLang] = useState('en');
  useEffect(()=>{
    i18n.changeLanguage(localStorage.getItem('lang'));
    setLang(localStorage.getItem('lang'));
    
  },[lan])
  



  const[ChCount,setChCount] = useState(0);

  function child_to_parent(data){
    setChCount(data);
  }



  const ForMemo = useMemo(()=>{
    console.log('dsdsd')
      return ChCount * 5
      
  },[ChCount])




  return (
    
    <div className="App">
      
      <Router>
        <Nav/>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Forget_password" element={<Forget_password />}></Route>

        </Routes>
      </Router>
      
      <Truck_types/>
      <PureComponent01 data={child_to_parent}/>
      <h1>{ ForMemo }</h1>
      <Footer/>
    </div>
    
  );
}

export default App;
