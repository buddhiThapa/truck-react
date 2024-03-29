import { t } from 'i18next';
import React,{useEffect , useState} from 'react';
import { Link,Redirect ,useNavigate } from 'react-router-dom';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import Textfield from './Textfield';
import * as yup from 'yup'; 
import axios from 'axios';

export default function Login( props ) {

    const navigate = useNavigate();
    const [auth,setAuth] =useState('');

    useEffect(()=>{
        document.title ="Login";         
    },[]);
    
    
    //! *************************************for the login form start***************************************
    //*for initial value

    const formInitialVal ={
        email :"",
        password:""
    }
    //*for form validation
    const formValidation = yup.object().shape({
        email : yup.string()
                .required('Email is required')
                .email('email is not valid'),
        password : yup.string()
                .required()
                .min(6,'Password is too short - should be 8 chars minimum.')
    })
    //*for form value get 
    const formValue=(values)=>{
        //login Api
        axios.post(process.env.REACT_APP_BASE_URL+"newlogin",values)
                .then((response)=>{
                    localStorage.setItem("isAuthenticated", response.data.data.id);
                    props.Auth_check(response.data.data.id);
                    navigate('/dashboard');
                }).catch((error)=>{
                    //console.log('error',error)
                    setAuth(error.response.data.message);
                })
    }

  //! *************************************for the login form end***************************************

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
                        <h4 className='text-center'>
                            formik with yup validation
                        </h4>
                        {
                            //for api error message
                            auth !=='' &&<div className='alert alert-danger'>
                                            <p className='text-danger'>{ auth }</p>
                                         </div>
                        }
                        <Formik initialValues = { formInitialVal }
                                    onSubmit = { (values => formValue(values) ) }
                                    validationSchema = { formValidation } >
                            <Form>
                                <div className="form-group">
                                    <Field type="email" name="email" placeholder={ t('email') } className="form-control" />
                                    <p className='text-danger'>
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                <div className="form-group">
                                    <Field type="password" name="password" placeholder={ t('password') } className="form-control" />
                                    <p className='text-danger'>
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>
                                <div className="subss login-btn">
                                    <button type="submit" id="frlgin" className="btn ed_btn ed_orange LoginBtn" >{t('login')}
                                    </button>
                                </div>
                                <div className="Forgot-pass">
                                    <Link to="/Forget_Password">{ t('forgot password') } ?</Link>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

