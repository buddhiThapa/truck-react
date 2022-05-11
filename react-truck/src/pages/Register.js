import {Link} from 'react-router-dom';
import { t } from 'i18next';
import { useEffect,useState } from 'react';
import  i18n  from 'i18next';

export function Register() {

    const [lan,setLang] = useState('en');
    useEffect(()=>{
        document.title ="Register"; 
        i18n.changeLanguage(localStorage.getItem('lang'));
        setLang(localStorage.getItem('lang'));
        console.log(lan)
      },[lan])


    return (
        <section className="Login-Page">
        <div className="container">
            <div className="row login-row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="inner-login">
                        <div className="login-logo">
                            
                            <img src="/images/logo3.png" alt="" />
                        </div>

                        <div className="register-link m-3">
                            { t('registration form') }
                        </div>
                        
                        <form action="login" method="post" id="my-signup-form">

                            <div className="form-group">
                            
                                <input type="text" className="form-control" placeholder={ t('enter name') } value="" id="name" name="name" />
                                
                            </div>

                            <div className="form-group">
                            
                                <input type="email" className="form-control" placeholder={ t('email') } value="" id="email" name="email" />
                                
                            </div>

                            <div className="form-group">
                            
                                <input type="password" className="form-control " placeholder={ t('new password') }  id="pwd" name="password" required="" />
                           
                            </div>

                            <div className="form-group">
                            
                                <input type="password" className="form-control" placeholder={ t('confirm password') } value="" id="confirm_password" name="confirm_password" />
                                
                            </div>

                        
                            <div className="subss login-btn">
                                
                                <button type="submit" id="frlgin" className="btn ed_btn ed_orange LoginBtn" >{ t('register') }
                                </button>
                            </div>

                            <div className="Forgot-pass">
                                <Link to="/Forget_Password">{ t('forgot password') }?</Link>
                            </div>
                            <div className="login-pass">
                                { t('already have account') } ? <Link to="/login">{ t('sign in') }</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}