import { useEffect } from "react";
export function Home() {

    useEffect(()=>{
        document.title ="Home"; 
    });


    return (
        <div>
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


                    {/* <!-- Statistics --> */}
                    <div className="counter">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">

                                    {/* <!-- Counter --> */}
                                    <div className="counter-container">
                                        <div className="counter-cell">
                                            <div data-purecounter-start="0" data-purecounter-end="231" data-purecounter-duration="3" className="purecounter">1</div>
                                            <div className="counter-info">Happy Customers</div>
                                        </div>
                                         {/* <!-- end of counter-cell --> */}
                                        <div className="counter-cell">
                                            <div data-purecounter-start="0" data-purecounter-end="385" data-purecounter-duration="1.5" className="purecounter">1</div>
                                            <div className="counter-info">Issues Solved</div>
                                        </div>
                                         {/* <!-- end of counter-cell --> */}
                                        <div className="counter-cell">
                                            <div data-purecounter-start="0" data-purecounter-end="159" data-purecounter-duration="3" className="purecounter">1</div>
                                            <div className="counter-info">Good Reviews</div>
                                        </div>
                                         {/* <!-- end of counter-cell --> */}
                                        <div className="counter-cell">
                                            <div data-purecounter-start="0" data-purecounter-end="128" data-purecounter-duration="3" className="purecounter">1</div>
                                            <div className="counter-info">Case Studies</div>
                                        </div>
                                         {/* <!-- end of counter-cell --> */}
                                    </div>
                                     {/* <!-- end of counter-container --> */}
                                    {/* <!-- end of counter --> */}

                                </div>
                                 {/* <!-- end of col --> */}
                            </div>
                             {/* <!-- end of row --> */}
                        </div>
                         {/* <!-- end of container --> */}
                    </div>
                     {/* <!-- end of counter --> */}
                    {/* <!-- end of statistics --> */}


                    {/* <!-- Introduction --> */}
                    <div id="introduction" className="basic-1 bg-gray1 parallax-section bg-1 overly">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <h2>What is TrucksStation ?</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa felis, porta eu elementum quis, semper at ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed interdum venenatis purus, quis tincidunt metus rhoncus id. Nam ac ante non nisl egestas tempus. In ac sagittis nibh. Praesent a luctus leo, eu eleifend lacus. In hac habitasse platea dictumst. Pellentesque posuere tortor quis turpis rutrum, ut consectetur odio ullamcorper. </p>

                                </div>
                                 {/* <!-- end of col --> */}
                            </div>
                             {/* <!-- end of row --> */}
                        </div>
                         {/* <!-- end of container --> */}
                    </div>
                     {/* <!-- end of basic-1 --> */}
                    {/* <!-- end of introduction --> */}


                    {/* <!-- Details 1 --> */}
                    <div id="details" className="basic-2">
                        <img className="decoration-star" src="/images/decoration-star.svg" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-xl-5">
                                        <div className="image-container">
                                            <img className="img-fluid img-home"  src="/images/trucks.png" />
                                        </div>
                                         {/* <!-- end of image-container --> */}
                                    </div>
                                     {/* <!-- end of col --> */}
                                    <div className="col-lg-6 col-xl-7">
                                        <div className="text-container">
                                            <h2>Become our partner and use your truck to deliver items</h2>
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
                                </div>
                                 {/* <!-- end of row --> */}
                            </div>
                             {/* <!-- end of container --> */}
                    </div> 
                    {/* <!-- end of basic-2 --> */}
                    {/* <!-- end of details 1 --> */}




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


                    {/* <!-- Invitation --> */}
                    <div className="basic-4 bg-gray bg-gray1 parallax-section bg-1 ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h4>Our team of highly skilled designers and interior construction workers can deliver above your level of expections</h4>
                                    <a className="btn-solid-lg" href="#contact">Get quote</a>
                                </div>
                                 {/* <!-- end of col --> */}
                            </div>
                             {/* <!-- end of row --> */}
                        </div>
                         {/* <!-- end of container --> */}
                    </div>
                     {/* <!-- end of basic-4 --> */}
                    {/* <!-- end of invitation --> */}



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
                    </div>
                    );
}