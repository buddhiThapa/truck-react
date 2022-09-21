import React from 'react'

export const PatgeNo = ({ postPerPage, totalPosts , paginate }) => {
    const pageNumbers = [];
    for (let i = 0; i <= Math.ceil( totalPosts / postPerPage ); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className="pagination">
        {
            pageNumbers.map(number => {
                if(number > 0){
                    return (
                        <li key={ number }  className="page-item">
                            <button onClick={ ()=>paginate(number) }  className='page-link'>{ number }</button>
                        </li>
                    )
                }
            })
        }
        </ul>
    </nav>
  )
}
