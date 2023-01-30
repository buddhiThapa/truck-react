import React from 'react'

export const ContactUs = () => {
  return (
    <>
        {/* <!-- Contact --> */}
        <div id="contact" className="form-1">
            <img className="decoration-star" src="/images/decoration-star.svg" />
            <img className="decoration-star-2" src="/images/decoration-star.svg" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="/images/contacts.jpg" />
                        </div>
                            {/* <!-- end of image-container --> */}
                    </div>
                        {/* <!-- end of col --> */}
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h2>Contact us for a quote using the following form</h2>

                            {/* <!-- Contact Form --> */}
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control-input" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control-textarea" placeholder="Message" required></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button">Submit</button>
                                </div>
                            </form>
                            {/* <!-- end of contact form --> */}
                        </div>
                            {/* <!-- end of text-container --> */}
                    </div>
                        {/* <!-- end of col --> */}
                </div>
                    {/* <!-- end of row --> */}
            </div>
                {/* <!-- end of container --> */}
        </div>
            {/* <!-- end of form-1 --> */}
            {/* <!-- end of contact --> */}
    </>
  )
}
