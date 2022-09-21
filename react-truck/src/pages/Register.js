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
    //******initial values */
    const [ragisterFormInitial,SetRagistration] = useState({
        name:'',
        email:'',
        password:'',
        confirm_password:''
    });
    const [Edit,SetEdit] = useState(0);

    //*************form  validation *** */
    const formValidation = Yup.object().shape({
            name: Yup.string().required('Name is required'),
            email: Yup.string().required('Email is required').email('Please enter the valid Email'),
            password : Yup.string().required('Password is required').min(6,'Minimum length is 6'),
            confirm_password : Yup.string().oneOf([Yup.ref('password'), null], 'Passwords Is Not Match') 
    })
    
    //*************form submit  function */

    const RagisterFormCheck = (values)=>{
     alert('value'+JSON.stringify(values));
        // var form_data = new FormData();
        // console.log(ragisterFormInitial);
        // Object.keys(ragisterFormInitial).map(function(key) {
        //     if(key != 'email' && key!= 'user_type'){
        //         form_data.append(key,ragisterFormInitial[key]);
        //     }
        // })
        // axios.post(process.env.REACT_APP_BASE_URL+'user_profileupdate',form_data)
        //         .then((response)=>{
        //              console.log('success',response) ;
        //         }).catch((error)=>{
        //             console.log('error',error)
        //         })

        //registration  api
            // axios.post('http://localhost:8000/api/newregistration',values)
            //         .then((response)=>{
            //             //console.log('success',response) ;
            //             navigate('/Login')
            //         }).catch((error)=>{
            //             //console.log('error',error)
            //             //setRegistrationError(error.response.data.message);
            //             setValidationError(error.response.data.message);
            //         })
            
                    
    }
    
    async function login_check(){
        await axios.get(process.env.REACT_APP_BASE_URL+"get-profile"+"?user_id="+localStorage.getItem("isAuthenticated"))
            .then((response)=>{
                const user_name = response.data.data.name!='' ? response.data.data.name : 'user';
                const user_id = response.data.data.id!='' ? response.data.data.id : '';
                const email =response.data.data.email!='' ? response.data.data.email : '';
                const telephone = response.data.data.mobile!='' ? response.data.data.mobile : '';
                const user_type = response.data.data.user_type!='' ? response.data.data.user_type : '';
                SetRagistration({
                    'user_id':user_id,
                    'name':user_name,
                    'email':email,
                    'telephone':telephone,
                    'is_admin':user_type
                });
                SetEdit(1);
            })
            .catch((error)=>{
                SetRagistration({
                    'name':'',
                    'email':'',
                    'telephone':''
                });
                SetEdit(1);
            })  
        }
    //!  ************************** for the  registration form start************************************* 
    
    useEffect(()=>{
        document.title ="Register"; 
        i18n.changeLanguage(localStorage.getItem('lang'));
        login_check();
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
                        { Edit ===1 &&
                        
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
                        
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}