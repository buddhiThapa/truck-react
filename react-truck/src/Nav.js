import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
export function Nav(){
    return (
        <div>
                {/* <!-- Navigation --> */}
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div className="container">

          {/* <!-- Image Logo --> */}
          <a className="navbar-brand logo-image" href="index">
            <img src="/images/logo3.png" className="logo-st" />
              
          </a>

          {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
          {/* <!-- <a className="navbar-brand logo-text" href="index.html">Yavin</a> --> */}

          <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#header">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#introduction">Introduction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#details">Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact us</a>
              </li>

              {/* <li>
                <a href="{{route('dashboard')}}" className="btn-outline-sm ">Dashboard</a>
              </li> */}


              <li className="nav-item dropdown">
                <a className="btn-outline-sm dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><div className="dropdown-divider"></div></li>
                  <li><Link to="/login" className="dropdown-item">Login</Link></li>
                  <li><a className="dropdown-item" href="frontregister">Register</a></li>
                </ul>
              </li>

            </ul>
            <span className="nav-item">
              {/* <!--                    <a className="btn-outline-sm" href="#">Login</a>--> */}
            </span>
          </div> 
          {/* <!-- end of navbar-collapse --> */}
        </div>
         {/* <!-- end of container --> */}
      </nav> 
      {/* <!-- end of navbar --> */}
      {/* <!-- end of navigation --> */}

        </div>
    )
}