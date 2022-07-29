import { useEffect,useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { Navbar } from "./include/Navbar";
import axios  from "axios";

export function Dashboard(){

    const navigate = useNavigate();
    const [name,setName] = useState();

    useEffect(()=>{
        if(localStorage.getItem("isAuthenticated") <= 0 ) 
        {
          navigate('/')  ; 
        }else{
            var user_id = "?user_id="+localStorage.getItem("isAuthenticated");
            axios.get(process.env.REACT_APP_BASE_URL+"get-profile"+user_id)
                .then((response)=>{
                    // console.log('response',response.data.data.name);
                    const user_name = response.data.data.name!='' ? response.data.data.name : 'user';
                    setName(user_name);
                    
                })
                .catch((error)=>{
                    navigate('/'); 
                })
        }
    },[])


    return (
        <section className="Login-Page">
            <div className="container">
                <h1>{ name }</h1>
            </div>
        </section>
    );
}


