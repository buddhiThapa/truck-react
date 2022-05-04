import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';

import { Footer } from './Footer';
import Login from './pages/login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      
      <Router>
        <Nav/>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      
      
      
      {/* <header className="App-header">

        <h1>Hello Truck Station </h1>
      </header> */}
      {/* top Navigation  */}
      
      {/* Home content */}
      
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
