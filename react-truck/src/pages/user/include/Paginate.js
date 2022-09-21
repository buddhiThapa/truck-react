import React from 'react'

export const Paginate = ({ posts, loading , search }) => {
    if(loading){
        return <h2>Loading...</h2>;
    }
  return <>
        <label htmlFor="search">
            Search by Title:
            <input id="search" type="text" className='form-control' onChange={ (event)=>search(event.target.value) } />
        </label>
        <ul className='list-group mb-4'>
          {
              posts.map((post,index)=>{
                return( 
                  <li key={post.id} className="list-group-item">
                      { (index+1) }. {post.title}
                  </li>
                )
              })
          }
          
        </ul>
  </>
}
