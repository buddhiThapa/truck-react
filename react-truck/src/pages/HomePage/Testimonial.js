import React from 'react'

export const Testimonial = () => {
  return (
    <>
        {/* <!-- Testimonials --> */}
        <div id="testimonials" className="slider-1 bg-gray">
            <img className="quotes-decoration" src="/images/quotes.svg" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        {/* <!-- Card Slider --> */}
                        <div className="slider-container">
                            <div className="swiper-container card-slider">
                                <div className="swiper-wrapper">

                                    {/* <!-- Slide --> */}
                                    <div className="swiper-slide">
                                        <img className="testimonial-image" src="/images/testimonial-1.jpg" />
                                            <p className="testimonial-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis tincidunt elit. Donec aliquam, urna a ultrices blandit, erat libero lobortis sapien, id iaculis nunc tortor id neque.”</p>
                                            <div className="testimonial-author">Maha Malek</div>
                                            <div className="testimonial-position">Transporter</div>
                                    </div>
                                        {/* <!-- end of swiper-slide --> */}
                                    {/* <!-- end of slide --> */}

                                    {/* <!-- Slide --> */}
                                    <div className="swiper-slide">
                                        <img className="testimonial-image" src="/images/testimonial-2.jpg" />
                                            <p className="testimonial-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis tincidunt elit. Donec aliquam, urna a ultrices blandit, erat libero lobortis sapien, id iaculis nunc tortor id neque.”</p>
                                            <div className="testimonial-author">Ahmed Salem</div>
                                            <div className="testimonial-position">Client</div>
                                    </div>
                                        {/* <!-- end of swiper-slide --> */}
                                    {/* <!-- end of slide --> */}

                                    {/* <!-- Slide --> */}
                                    <div className="swiper-slide">
                                        <img className="testimonial-image" src="/images/testimonial-3.jpg" />
                                            <p className="testimonial-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis tincidunt elit. Donec aliquam, urna a ultrices blandit, erat libero lobortis sapien, id iaculis nunc tortor id neque.”</p>
                                            <div className="testimonial-author">Sara Ibrahim</div>
                                            <div className="testimonial-position">Client</div>
                                    </div>
                                        {/* <!-- end of swiper-slide --> */}
                                    {/* <!-- end of slide --> */}

                                </div>
                                    {/* <!-- end of swiper-wrapper --> */}

                                {/* <!-- Add Arrows --> */}
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                                {/* <!-- end of add arrows --> */}

                            </div> 
                            {/* <!-- end of swiper-container --> */}
                        </div>
                            {/* <!-- end of slider-container --> */}
                        {/* <!-- end of card slider --> */}

                    </div>
                        {/* <!-- end of col --> */}
                </div>
                    {/* <!-- end of row --> */}
            </div>
                {/* <!-- end of container --> */}
        </div>
            {/* <!-- end of slider-1 --> */}
        {/* /<!-- end of testimonials --> */}
    </>
  )
}
