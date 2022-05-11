import { t } from 'i18next';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
    useEffect(()=>{
        document.title ="Login"; 
    });


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
                            <p>{ t('new to truck station')} ? <Link to="/Register">{ t('register') }</Link></p>
                        </div>
                        
                        <form action="login" method="post" id="my-signup-form">
                            
                            <div className="form-group">
                            
                                <input type="email" className="form-control" placeholder={ t('email') } value="" id="email" name="email" />
                                
                            </div>

                            <div className="form-group">
                            
                                <input type="password" className="form-control " placeholder={ t('password') } id="pwd" name="password" required="" />
                           
                            </div>

                        
                            <div className="subss login-btn">
                                
                                <button type="submit" id="frlgin" className="btn ed_btn ed_orange LoginBtn" >{t('login')}
                                </button>
                            </div>

                            <div className="Forgot-pass">
                                 <Link to="/Forget_Password">{ t('forgot password') }?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
