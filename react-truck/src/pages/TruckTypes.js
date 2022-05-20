import axios from "axios"
import { useEffect, useState } from "react"
export const Truck_types = () => {

    
    const [truck_type,setTruck_type]=useState([]);
    useEffect(() => {
        
        axios.get("http://localhost:8000/api/user_truck-type")
            .then((response)=>{
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
                            <option value={index} key={index}>{val}</option>
                        )
                    })   
                }
            </select>
        </>
    )    
}
