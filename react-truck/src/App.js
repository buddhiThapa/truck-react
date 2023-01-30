import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';
import { Register } from './pages/Register';
import { Forget_password } from './pages/Forget_password';
import { Truck_types } from './pages/TruckTypes';
import { Dashboard } from './pages/user/Dashboard';
import PureComponent01 from './pages/PureComponent01';
import Login from './pages/Login';
import i18n from 'i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState } from 'react';
import {ProtectedRoute} from './pages/ProtectedRoute';
// import { NewHome } from './pages/components/NewHome';
import NewHomeContainer from './pages/container/NewHomeContainer';
import { LoginCheck } from './pages/LoginCheck';
import { ProductPagination } from './pages/user/ProductPagination';



const App = () => {

  const [lan, setLang] = useState('en');
  const [Auth,SetAuth] = useState(0);
  const [ChCount, setChCount] = useState(0);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem('lang'));
    setLang(localStorage.getItem('lang'));
  }, [lan])

  const Auth_check = (Auth_id) => {
      SetAuth(Auth_id);
      
  }

  function child_to_parent(data) {
    setChCount(data);
  }

  const ForMemo = useMemo(() => {
    return ChCount * 5
  }, [ChCount])

  return (

    <div>

      <Router>
        <Nav Auth_data ={ Auth } Auth_check = { Auth_check } />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute> } > </Route>
          <Route path="/product" element={ <ProtectedRoute><ProductPagination/></ProtectedRoute> } > </Route>
          <Route path="/login" element={<LoginCheck> <Login Auth_check = { Auth_check } /> </LoginCheck>}></Route>
          {/* <Route path="/Register" element={<LoginCheck> <Register /> </LoginCheck>}></Route> */}
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Forget_password" element={<Forget_password />}></Route>
        </Routes>
      </Router>
      {/* <NewHomeContainer/> */}
      {/* <Truck_types /> */}
      {/* <PureComponent01 data={child_to_parent} />
      <h1>{ForMemo}</h1> */}
      {/* <Footer /> */}
    </div>

  );
}

export default App;
