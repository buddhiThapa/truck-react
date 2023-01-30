import React from 'react'

export const DetailsTwo = () => {
  return (
    <>
        {/* <!-- Details 2 --> */}
        <div className="basic-3">
            <img className="decoration-star" src="/images/decoration-star.svg" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="text-container">
                            <h2>Send your shipments to anywhere you want </h2>

                            <ul className="list-unstyled li-space-lg">
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ac nulla quis auctor. </div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ac nulla quis auctor. Cras sodales, dolor eget rhoncus feugiat, nulla ante mattis justo.</div>
                                </li>
                            </ul>
                            <a className="btn-solid-reg" href="article.html">Get started</a>
                        </div>
                            {/* <!-- end of text-container --> */}
                    </div>
                        {/* <!-- end of col --> */}
                    <div className="col-lg-6 col-xl-5">
                        <div className="image-container">
                            <img className="img-fluid" src="/images/boxes.png" />
                        </div>
                            {/* <!-- end of image-container --> */}
                    </div>
                        {/* <!-- end of col --> */}
                </div>
                    {/* <!-- end of row --> */}
            </div> 
            {/* <!-- end of container --> */}
        </div> 
        {/* <!-- end of basic-3 --> */}
        {/* <!-- end of details 2 --> */}
    </>
  )
}
