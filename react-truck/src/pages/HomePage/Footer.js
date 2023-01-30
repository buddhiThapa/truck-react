import React from 'react'

export const Footer = () => {
  return (
    <>
        {/* <!-- Footer --> */}
        <div className="footer bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-col first">
                            <h6>About Website</h6>
                            <p className="p-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis at nisl vitae lacinia. Aliquam maximus nisl vitae diam iaculis</p>
                        </div>
                            {/* <!-- end of footer-col --> */}
                        <div className="footer-col second">
                            <h6>Links</h6>
                            <ul className="list-unstyled li-space-lg p-small">
                                <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                                <li>Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>, <a href="#">Illustrations</a></li>
                                <li>Menu: <a href="#header">Home</a>, <a href="#details">Details</a>, <a href="#services">Services</a>, <a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                            {/* <!-- end of footer-col --> */}
                        <div className="footer-col third">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-pinterest-p fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                            <p className="p-small">We would love to hear from you <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
                        </div>
                            {/* <!-- end of footer-col --> */}
                    </div>
                        {/* <!-- end of col --> */}
                </div>
                    {/* <!-- end of row --> */}
            </div>
                {/* <!-- end of container --> */}
        </div>
            {/* <!-- end of footer --> */}
        {/* <!-- end of footer --></img> */}
    </>
  )
}
