import logo from './logo.svg';
import './App.css';
import { Nav } from './Nav';
import { Home } from './Home';
import { Footer } from './Footer';
 
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

        <h1>Hello Truck Station </h1>
      </header> */}
      {/* top Navigation  */}
      <Nav/>
      {/* Home content */}
      <Home/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
