import { useEffect,useState } from "react";
import { Link, Navigate,useNavigate } from "react-router-dom";
import { Navbar } from "./include/Navbar";
import axios  from "axios";
import { PieChart, Pie} from 'recharts';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';


export function Dashboard(){


    const navigate = useNavigate();
    const [name,setName] = useState();
    const [Product ,SetProduct] = useState([]); 
    const [loader,SetLoader] = useState(0);
    
    const [CheckValue,SetCheckValue] = useState([]);
    const [checkbox_cheak,SetCheck] = useState(0); 
    
    
    
    
    //!-------------------------------------for Product filter (checkbox) start -------------------------
    const check_data = (event)=>{ //* old code for the checkbox start 
        var value = '';
        if(event.target.checked) {
            if(CheckValue.length===0){
                value = event.target.value;
                SetCheckValue([...CheckValue,`${value}`])
            }else{
                CheckValue.map((obj)=>{
                    if(obj!==event.target.value){
                        value = event.target.value;
                        SetCheckValue([...CheckValue,`${value}`])
                    }
                })
            }
        }else{
            if(CheckValue.length===0){
                value = event.target.value;
                SetCheckValue([`${value}`])
            }else{
                if(CheckValue.length===1){
                    SetCheckValue([]);    
                }else{
                    CheckValue.map((obj)=>{
                        if(obj !== event.target.value){
                            value = event.target.value;
                            SetCheckValue(CheckValue.filter(e => e !==`${value}`))
                        }
                    })
                }
            }
        }
    }
    //* old code for the checkbox end 


    const [PostData,SetPostData] = useState({"category":"6","perpage":"50","page":"0","min_price":0,"max_price":5000,"packsize":"150gm,400gm"});
    const [checked, setChecked] = useState([]);
    const checkBoxValue = (e) => {
        let arr1 = [...checked];
        if (e.target.checked) {
            arr1.push(e.target.value);
            setChecked(arr1);
            SetPostData({...PostData,[e.target.getAttribute("data-key")]:e.target.value})        
        } else {
            arr1.splice(arr1.indexOf(e.target.value), 1);
            setChecked(arr1);
            var data = e.target.value; 
            var key_data = e.target.getAttribute("data-key")
            const {[key_data] : remove,...rest} = PostData;
            SetPostData(rest)
        }
        SetLoader(0);
    };
    useEffect(()=>{
        console.log('new_data_1',checked)
        if(checked.length > 0 ){
            SetCheck(checked.pop());
        }else{
            SetCheck(0);
        }
        console.log('PostData',PostData)
        axios.post("https://api.prabhujipurefood.com/api/product-all",PostData)
        .then((response)=>{
            console.log('response',response.data.data);
            SetProduct(response.data.data);
            SetLoader(1);
        })
        .catch((error)=>{
            console.log('error',error);
        })
    },[CheckValue,checked,PostData])
    //!-------------------------------------for Product filter (checkbox) stop -------------------------
    
    //!--------------------------------for the Auth start  ---------------
    useEffect(()=>{
        if(localStorage.getItem("isAuthenticated") <= 0 ) 
        {
            navigate('/')  ; 
        }else{
            var user_id = "?user_id="+localStorage.getItem("isAuthenticated");
            // axios.get(process.env.REACT_APP_BASE_URL+"get-profile"+user_id)
            axios.get('https://admin.prabhujipurefood.com/api/deliverytext')
            
            .then((response)=>{
                console.log('response',response);
                // const user_name = response.data.data.name!='' ? response.data.data.name : 'user';
                // setName(user_name);  
                })
                .catch((error)=>{
                    navigate('/'); 
                })
            }


            // {"category":"6","perpage":"50","page":"0","min_price":0,"max_price":5000,"packsize":"150gm,400gm"}
        },[])
        //!--------------------------------for the Auth end  ---------------
        //!----------------------------------------------------Data For chart start -----------------------------
        
        // Sample data
const data = [
    {name: 'Geeksforgeeks', students: 700,fill:'red'},
    {name: 'Technical scripter', students: 700,fill:'black'},
    {name: 'Geek-i-knack', students: 200,fill:'yellow'},
    {name: 'Geek-o-mania', students: 1000,fill:'blue'}
];

const pia_chart ={
    options: {
        data: [
            { label: 'Android', value: 70.9 ,satisfaction:5},
            { label: 'iOS', value: 22.5 ,satisfaction:8},
            { label: 'BlackBerry', value: 6.8,satisfaction:6 },
            { label: 'Symbian', value: 8.5,satisfaction:9 },
        { label: 'Bada', value: 2.6 ,satisfaction:12},
        { label: 'Windows', value: 1.9 ,satisfaction:10},
      ],
      series: [
          {
              type: 'pie',
              angleKey: 'value',
              labelKey: 'label',
              
              // angleKey: 'share',
              // radiusKey: 'satisfaction',
              radiusMin: 5,
            },
        ],
    },
};
//!----------------------------------------------------Data For chart End -----------------------------




const cat_val = [13,14];
const cat_name = ['Test Cat','Sweets'];
    return (
        <>
        <div className="row">
            <div className="col-md-12">
                <section className="Login-Page">
                    <div className="container">
                        <div className="col-md-12"> 
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <PieChart width={500} height={500}>
                                        <Pie data={data} dataKey="students" labelKey="name" outerRadius={250} fill="green" />
                                    </PieChart> */}
                                </div>
                                <div className="col-md-12">
                                    <AgChartsReact options={ pia_chart.options } />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    <div className="container">
                <Link to="/product" >Product</Link>
                        <h1>{ name }</h1>
                        <h2>Subcategory Id</h2>
                        {
                            cat_val.map((val,index)=>{
                                return (
                                    <p>{ cat_name[index] }  <input className="check_data" onChange={ checkBoxValue } data-key="subcatid" checked={ (checkbox_cheak >0 && checkbox_cheak == val) ? 'true' : '' } data-cat-key={index} type="checkbox" value={val} /></p>
                                )

                            })
                        }
                        {/* <p>Sweets <input className="check_data" onChange={ checkBoxValue } type="checkbox" data-key="subcatid" value='14' /></p> */}
                    </div>
            </div>
            <div className="col-md-12">
            
                <div className="container">   
                    <div class="row">
                    {  
                        loader > 0 
                        ?
                            Product.map(val=>{
                                return (
                                        <div class="col-md-3 mb-4">
                                                <div class="card">
                                                    <div class="image-container">
                                                        <div class="first">
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <span class="discount">-25%</span>
                                                                <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                                                            </div>
                                                        </div>
                                                    
                                                        <img src={val.master_image} class="img-thumbnail rounded thumbnail-image" style={{ height: '200px'}}/>
                                                    </div>
                                                    <div class="product-detail-container p-2">
                                                            <div class="d-flex justify-content-between align-items-center">
                                                                <h5 class="dress-name">{val.title}</h5>
                                                                <div class="d-flex flex-column mb-2">
                                                                    <span class="new-price">${val.offer_price}</span>
                                                                    <small class="old-price text-right">${val.main_price}</small>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-center pt-1">
                                                                <div class="color-select d-flex ">
                                                                Quantity  <span class="item-size mr-2 btn" type="button" style={{ margin: '7px'}}>{val.qty}</span> 
                                                                </div>
                                                                <div class="d-flex ">
                                                                {val.weighttype}
                                                                </div>
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-center pt-1">
                                                                <div>
                                                                    <i class="fa fa-star-o rating-star"></i>
                                                                    <span class="rating-number">4.8</span>
                                                                </div>
                                                                <span class="buy">BUY +</span>
                                                            </div>
                                                    </div>
                                                </div>
                                        </div>
                                )
                            })
                        : 
                        <div class="col-md-3 mb-4">
                            <div class="container">
                            <h1 className="text-danger">Loading...</h1>
                                {/* <img src='/images/loader.gif' width="100"/> */}
                            </div>
                        </div>
                     }
                     {/* <img src='/images/loader.gif' width="100px"/> */}
                    </div>
                </div>
            </div>
        </div>

        </>
        
        
    );
}


