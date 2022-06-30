export function Navbar(){


    return (
        <>

            <div className="main-panel">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                        <button type="button" className="navbar-toggler">
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>
                   
                </div>

                <div className="search-field d-none d-lg-block">
                    <form className="d-flex align-items-center h-100" action="#">
                    <div className="input-group">
                        <div className="input-group-prepend bg-transparent">
                        <i className="input-group-text border-0 mdi mdi-magnify p-0"></i>
                        </div>
                        <input type="text" className="form-control bg-transparent border-0 search-input" placeholder="Search projects"/>
                    </div>
                    </form>
                </div>

                <div className="UserNav-Container" id="navigation">
                    <div className="UserNavigation">
                        <ul>
                        <li className="nav-item nav-profile-info dropdown">
                            <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false" title="Profile">
                                


                                <img src="{{url('/')}}/assets/images/user.svg" alt="image" className="user-img" width="20"/>

                                <div className="nav-profile-text">
                                    <p>Welcome name</p>
                                </div>
                            </a>

                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                                <a className="dropdown-item" href="{{url('front_update_setting')}}"><i className="mdi mdi-account mr-2 text-primary"></i> Profile </a>
                            </div>
                        </li>

                        <li className="nav-item nav-profile-info nav-language-info dropdown">
                            <a className="nav-link dropdown-toggle" id="lanDropdown" href="#" title="Language" data-toggle="dropdown" aria-expanded="false">
                                <p className="mdi mdi-web"></p>
                            </a>

                            <div className="dropdown-menu navbar-dropdown" aria-labelledby="lanDropdown">
                                
                                <a className="dropdown-item" href="{{ url('/') }}/lang/en">
                                    <i className="fa fa-flag-checkered"></i> English
                                </a>
                                
                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item" href="{{ url('/') }}/lang/ar">
                                    <i className="fa fa-flag"></i> Arabic
                                </a> 
                            </div>
                        </li>

                        <li id="noti_Container">
                            <div id="noti_Counter" ></div>

                            <div id="noti_Button" title="Notifications">
                                <i className="mdi mdi-bell-outline"></i>
                            </div>    

                            <div id="notifications">
                                <p className="noti">Notifications</p>
                                <div ></div>
                                <div className="seeAll"><a href="#">See All</a></div>
                            </div>
                        </li>

                        <li className="nav-item nav-logout d-none d-lg-block">
                            <a className="nav-link" href="{{ route('logout') }}" title="Logout">
                                <i className="mdi mdi-logout text-warning"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}