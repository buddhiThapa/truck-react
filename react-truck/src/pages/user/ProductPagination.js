import axios from "axios";
import { useEffect, useState } from "react"
import { Paginate } from "./include/Paginate";
import { PatgeNo } from "./PatgeNo";
export const ProductPagination = () => {

//!--------------------------Product Pagination start --------------------------------------

const [posts,setPost] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage,setPostPerPage] = useState(10);
const [search,SetSearch] = useState('');
const [allData,setAllData] = useState([]);

useEffect(()=>{
    const fetchPost = async () =>{
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // const res01 = await axios.get('https://wishinteractiveinc.com/haldiram/api/random_numbers');
        // console.log('data',res01)
        // const res = await axios.post("https://api.prabhujipurefood.com/api/product-all",{"category":"6","perpage":"50","page":"0","min_price":0,"max_price":5000,"packsize":"150gm,400gm"});
        
        setPost(res.data);
        setAllData(res.data);
        setLoading(false);
    }
    fetchPost();
},[]);

//* get current Post
const indexofLastPost = currentPage * postsPerPage;
const indexofFirstPost  = indexofLastPost - postsPerPage;
const currentPost = posts.slice( indexofFirstPost,indexofLastPost );

//* change page
const paginate = ( pageNumber ) => setCurrentPage( pageNumber );

//* search function 

const handleSearch = (data) => SetSearch(data);

useEffect(()=>{
    const data = allData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    paginate(1)
    setPost(data);   
},[search])
//!--------------------------Product Pagination end --------------------------------------

    return (<>
        <div className="row">
                <div className="col-md-12">
                    <section className="Login-Page">
                        <div className="container">
                            <h1 className="text-primary mb-3">Product Pagination Component</h1>
                        </div>
                    </section>
                </div>
                <div className = "col-md-12" >
                    <Paginate posts = { currentPost } loading = { loading } search = { handleSearch }/>
                    <PatgeNo postPerPage = { postsPerPage }  totalPosts = { posts.length } paginate={ paginate } />
                </div>
        </div>
    </>)
}