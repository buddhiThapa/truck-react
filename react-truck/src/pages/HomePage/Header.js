import React from 'react'

export const Header = () => {
  return (
   <>
        <header id="header" className="header">
            <img className="decoration-star" src="/images/decoration-star.svg" />
            <img className="decoration-star-2" src="/images/decoration-star.svg" />
            <div className="container">
            <div className="row">
                <div className="col-lg-7 col-xl-5">
                    <div className="text-container">
                        <h1 className="h1-large">Deliver around the edge</h1>
                        <p className="p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa felis, porta eu elementum quis, semper at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <a className="btn-solid-lg" href="#introduction">More details</a>
                        <a className="btn-outline-lg" href="#contact">Contact us</a>
                    </div>
                        {/* <!-- end of text-container --> */}
                </div>
                    {/* <!-- end of col --> */}
                <div className="col-lg-5 col-xl-7">
                    <div className="image-container">
                        <img className="img-fluid" src="/images/world_map.png" />
                    </div>
                        {/* <!-- end of image-container --> */}
                </div> 
                {/* <!-- end of col --> */}
            </div> 
            {/* <!-- end of row --> */}
            </div> 
            {/* <!-- end of container --> */}
        </header>
    
        {/* <!-- end of header --> */}
    {/* <!-- end of header --> */}
   </>
  )
}
