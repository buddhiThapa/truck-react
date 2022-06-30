import { Link , useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { useEffect,useState } from 'react';
import  i18n  from 'i18next';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


export function Register() {

    const [registrationError, setRegistrationError] = useState('');
    const [validationError,setValidationError] = useState([]);
    const navigate = useNavigate();

    //!  ************************** for the  ragistration form start************************************* 
    //* *****************************
    //******initial values */
    const ragisterFormInitial = {
        name:'',
        email:'',
        password:'',
        confirm_password:''
    }

    //*************form  validation *** */
    const formValidation = Yup.object().shape({
            name: Yup.string().required('Name is required'),
            email: Yup.string().required('Email is required').email('Please enter the valid Email'),
            password : Yup.string().required('Password is required').min(6,'Minimum length is 6'),
            confirm_password : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords Is Not Match') 
    })
    
    //*************form submit  function */

    const RagisterFormCheck = (values)=>{

        //registration  api
            axios.post('http://localhost:8000/api/newregistration',values)
                    .then((response)=>{
                        //console.log('success',response) ;
                        navigate('/Login')
                    }).catch((error)=>{
                        //console.log('error',error)
                        //setRegistrationError(error.response.data.message);
                        setValidationError(error.response.data.message);
                    })

                    
    }

    //!  ************************** for the  registration form start************************************* 

    


    useEffect(()=>{
        document.title ="Register"; 
        i18n.changeLanguage(localStorage.getItem('lang'));
       
      },[])


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
                        {
                            registrationError!=='' && 
                                    <div className='alert alert-danger'>
                                         <p className='text-danger'>{ registrationError }</p>
                                    </div>
                        }
                       
                        <Formik
                            initialValues={ ragisterFormInitial }
                            validationSchema={ formValidation }
                            onSubmit={ ( values=>RagisterFormCheck(values) ) }
                        >
                        <Form>

                            <div className="form-group">

                                <Field name='name'
                                       type='text'
                                       placeholder={ t('enter name') }
                                       className={ "form-control " + ( validationError.name !== undefined ?  "border border-danger" : "false") }
                                 />
                                { validationError.name !=='' && validationError.name }
                                <p className='text-danger text-left'><ErrorMessage name="name" /></p>
                                                                
                            </div>

                            <div className="form-group">

                                <Field name='email' 
                                        type='email'
                                        placeholder={ t('enter email') }
                                        className={"form-control " + ( validationError.email !== undefined ?  "border border-danger" : "false") } 

                                />
                                

                                <p className='text-danger'>{ validationError.email !=='' && validationError.email }</p>
                                <p className='text-danger'><ErrorMessage name="email" /></p>
                                                                
                            </div>

                            <div className="form-group">
                                   
                                <Field name = 'telephone'
                                       type = 'text' 
                                       placeholder = { t('enter telephone') }
                                       className = { "form-control " + ( validationError.telephone !== undefined ?  "border border-danger" : "false") }  />
                                

                                <p className='text-danger'>{ validationError.telephone !=='' && validationError.telephone }</p>
                                <p className='text-danger'><ErrorMessage name="telephone" /></p>
                                                            
                            </div>

                            <div className="form-group">

                                <Field name='is_admin'
                                       type='text'
                                       placeholder={ t('enter is admin') }
                                       className="form-control" />
                                
                                

                                <p className='text-danger'>{ validationError.is_admin !=='' && validationError.is_admin }</p>
                                <p className='text-danger'><ErrorMessage name="is_admin" /></p>
                                                            
                            </div>

                            <div className="form-group">

                                <Field name='password'
                                       type='password'
                                       placeholder={ t('new password') }
                                       className={ "form-control " + ( validationError.password !== undefined ?  "border border-danger" : "false") } />
                                

                                <p className='text-danger'>{ validationError.password !=='' && validationError.password }</p>
                                <p className='text-danger'><ErrorMessage name="password" /></p>
                                                                
                            </div>

                            <div className="form-group">

                                <Field name='confirm_password' type='password' placeholder={ t('confirm password') }  className={ "form-control " + ( validationError.confirm_password !== undefined ?  "border border-danger" : "false") } />
                                { validationError.confirm_password !=='' && validationError.confirm_password }

                                <p className='text-danger'><ErrorMessage name="confirm_password" /></p>
                                                                
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

                        </Form>


                        </Formik>

                        {/* <form action="login" method="post" id="my-signup-form">

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
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}