import React from 'react'

export default function login() {
  return (
    
    <section className="Login-Page">
        <div className="container">
            <div className="row login-row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="inner-login">
                        <div className="login-logo">
                            
                            <img src="/images/logo3.png" alt="" />
                        </div>

                        <div className="register-link">
                            <p>New to Truck Station?<a href="frontregister">Register</a></p>
                        </div>
                        
                        <form action="login" method="post" id="my-signup-form">
                            
                            <div className="form-group">
                            
                                <input type="email" className="form-control" placeholder="Email" value="" id="email" name="email" />
                                
                            </div>

                            <div className="form-group">
                            
                                <input type="password" className="form-control " placeholder="Password" id="pwd" name="password" required="" />
                           
                            </div>

                        
                            <div className="subss login-btn">
                                
                                <button type="submit" id="frlgin" className="btn ed_btn ed_orange LoginBtn" >Login
                                </button>
                            </div>

                            <div className="Forgot-pass">
                                <a href="forget_password">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
