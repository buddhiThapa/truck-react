import axios from "axios"
import { useEffect, useState } from "react"
export const Truck_types = () => {

    
    const [truck_type,setTruck_type]=useState([]);
    useEffect(() => {
        //console.log('hello');
        axios.get(process.env.REACT_APP_BASE_URL+"user_truck-type")
            .then((response)=>{
                //console.log(response);
                response.data.status==200 &&setTruck_type(response.data.data);
            ;   
            })
        
    }, [])
   
    return (
        <>
            <select>
                <option>Select Truck Type</option>
                {
                    truck_type.map((val,index)=>{
                        return (
                            <option value={index} key={ val.type }>{val.type}<img src></img></option>
                        )
                    })   
                }
            </select>
        </>
    )    
}
