export function Nav(){

    return (
        <div>
                {/* <!-- Navigation --> */}
      <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div class="container">

          {/* <!-- Image Logo --> */}
          <a class="navbar-brand logo-image" href="index">
            <img src="/images/logo3.png" class="logo-st" />
              
          </a>

          {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
          {/* <!-- <a class="navbar-brand logo-text" href="index.html">Yavin</a> --> */}

          <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#header">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#introduction">Introduction</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#details">Details</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonials">Testimonials</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact us</a>
              </li>

              <li>
                <a href="{{route('dashboard')}}" class="btn-outline-sm ">Dashboard</a>
              </li>


              <li class="nav-item dropdown">
                <a class="btn-outline-sm dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Login</a>
                <ul class="dropdown-menu" aria-labelledby="dropdown01">
                  <li><a class="dropdown-item" href="frontlogin">Login</a></li>
                  <li><div class="dropdown-divider"></div></li>
                  <li><a class="dropdown-item" href="frontregister">Register</a></li>
                </ul>
              </li>

            </ul>
            <span class="nav-item">
              {/* <!--                    <a class="btn-outline-sm" href="#">Login</a>--> */}
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