import { Link, Navigate, useNavigate } from "react-router-dom";

import  i18n  from 'i18next';
import { initReactI18next ,useTranslation } from 'react-i18next';
import { Suspense,useEffect,useState } from 'react';



//! for the multi language functionality ( start )*********************************************************

//for English
const translationsEn = require('./pages/lan/en.json')
//for french
const translationsFr = require('./pages/lan/fr.json');
//for Hindi
const translationsHi = require('./pages/lan/hi.json');


i18n
.use(initReactI18next) //passes the i18n down  to react-i18next 
.init({
  resources:{
    en: {  translation: translationsEn },
    fr: {  translation: translationsFr },
    hi: {  translation: translationsHi },
  },
  lang: "en",
  fallbackLng:"en",
  interpolation:{ escapeValue: false },
});

//! for the multi language functionality ( End )*********************************************************


export function Nav(props){

  
  const language ={
    en:"English",
    hi:"Hindi",
    fr:"French"
  }
  
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [count,setCount] = useState(0);
  const [lan,setLang] = useState('en');
  const [Auth,setAuth] = useState(props.Auth_data);
  
  console.log('hello',props.Auth_data,'Auth',Auth);
  
  function onChange(event){
    const lang = event.target.value;
    
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('lang',lang);
    setLang(lang);
    setCount(count+1);
    window.location.reload(false);
  }
  
  const logout = () =>{
    setAuth(0);
    localStorage.clear();
    props.Auth_check(0);
    navigate('/login');
  }

  useEffect(() =>{    
    document.title ="Home"; 
    i18n.changeLanguage(localStorage.getItem('lang'));
    setAuth(localStorage.getItem('isAuthenticated'));
},[lan,props.Auth_data])

    return (
        <div>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div className="container">
          <a className="navbar-brand logo-image" href="index">
            <img src="/images/logo3.png" className="logo-st" />  
          </a>
          <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{ t('home') }</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#introduction">{ t('introduction') }</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#details">{ t('details') }</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services"> { t('services') } </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">{ t('testimonials') }</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">{ t('contact us') }</a>
              </li>
              {
                Auth > 0 && 
                      <li className="nav-item">
                        <Link className="nav-link" to='/Dashboard'>{ t('Dashboard') }</Link>
                      </li>
              }
              <li className="nav-item dropdown">
              {
                Auth > 0 ? 
                <button className="btn-outline-sm" onClick ={ logout } >Logout</button>
                :
                <a className="btn-outline-sm dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">{ t('login')}</a>

              }

                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li><div className="dropdown-divider"></div></li>
                  <li><Link to="/login" className="dropdown-item">{ t('login') }</Link></li>
                  <li><Link to="/Register" className="dropdown-item">{ t('register') }</Link></li>
                </ul>
              </li>
              <li>
                <select name="language" className="btn-outline-sm dropdown-toggle" onChange={onChange}>
                  <option className="dropdown-divider">Language</option>
                    {
                      Object.keys(language).map((lang_key)=>{
                        return (
                        <option className="dropdown-item" selected ={lan===lang_key ? 'selected' : ''} key={language[lang_key]} value={lang_key}>{language[lang_key]}</option>
                        )
                      })
                    }
                </select>
              </li>

            </ul>
            <span className="nav-item">

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