import React from 'react'

export const Services = () => {
  return (
    <>
        {/* <!-- Services --> */}
        <div id="services" className="cards-1 bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text-container">
                            <h2>Services that we offer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit dictum iaculis.</p>
                            <p>Pellentesque volutpat et neque at malesuada. Integer placerat id augue nec vestibulum. Maecenas mattis ex at egestas ultricies. Praesent dictum efficitur nibh quis fringilla. </p>
                            <ul className="list-unstyled li-space-lg">
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ac</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                                </li>
                                <li className="d-flex">
                                    <i className="fas fa-square"></i>
                                    <div className="flex-grow-1">Lorem ipsum dolor sit amet, consectetur</div>
                                </li>
                            </ul>
                        </div>
                            {/* <!-- end of text-container --> */}
                    </div>
                        {/* <!-- end of col --> */}
                    <div className="col-lg-7">
                        <div className="card-container">

                            {/* <!-- Card --> */}
                            <div className="card">
                                <div className="card-icon">
                                    <span className="fas fa-rocket"></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Lorem ipsum dolo</h5>
                                </div>
                            </div>
                            {/* <!-- end of card --> */}

                            {/* <!-- Card --> */}
                            <div className="card">
                                <div className="card-icon">
                                    <span className="far fa-clock"></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Maecenas mattis ex at</h5>
                                </div>
                            </div>
                            {/* <!-- end of card --> */}

                            {/* <!-- Card --> */}
                            <div className="card">
                                <div className="card-icon">
                                    <span className="far fa-comments"></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">condimentum quis nulla</h5>
                                </div>
                            </div>
                            {/* <!-- end of card --> */}

                            {/* <!-- Card --> */}
                            <div className="card">
                                <div className="card-icon">
                                    <span className="fas fa-tools"></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">rhoncus semper at est</h5>
                                </div>
                            </div>
                            {/* <!-- end of card --> */}

                            {/* <!-- Card --> */}
                            <div className="card">
                                <div className="card-icon">
                                    <span className="fas fa-chart-pie"></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">conubia nostra</h5>
                                </div>
                            </div>
                            {/* <!-- end of card --> */}

                            {/* <!-- Card --> */}
                            <div className="card">
                                <div className="card-icon">
                                    <span className="far fa-chart-bar"></span>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">massa finibus suscipit</h5>
                                </div>
                            </div>
                            {/* <!-- end of card --> */}

                        </div>
                            {/* <!-- end of container --> */}
                    </div>
                        {/* <!-- end of col --> */}
                </div>
                    {/* <!-- end of row --> */}
            </div>
                {/* <!-- end of container --> */}
        </div>
            {/* <!-- end of cards-1 --> */}
        {/* <!-- end of services --> */}
    </>
  )
}
