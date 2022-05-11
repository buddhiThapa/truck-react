import { t } from 'i18next';
import { Link } from 'react-router-dom';
export const Forget_password = () =>{

        return (
            <>
                
                <section className="Login-Page">
                <div className="container">
                    <div className="row login-row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="inner-login">
                                <div className="login-logo">
                                    
                                    <img src="/images/logo3.png" alt="" />
                                </div>

                                <div className="register-link mt-5">
                                        <div class="card-header">{ t('reset password') }</div>
                                </div>
                                
                                <form action="login" method="post" id="my-signup-form">
                                    
                                    <div className="form-group">
                                        
                                        <input id="email" type="email" class="form-control" name="email" value="" placeholder={ t('email address') } required autocomplete="email" autofocus />
                                        
                                    </div>

                                    <div className="subss login-btn">
                                           
                                        <button type="submit" class="btn btn-primary">
                                            { t('send password reset link') }
                                        </button>
                                           
                                    </div>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    
}