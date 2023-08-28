import React from 'react'
import './Footer.css';
import { LiaFacebook, LiaInstagram,LiaLinkedin,LiaYoutube,LiaTwitter } from "react-icons/lia";


function Footer(){
    return(
        <div className='Footer'>
            <footer className='pt-5'>

                {/* for large screen */}
                <div className="container-lg d-none d-sm-none d-md-block d-lg-block">
                    <div className="row">
                        <div className="col-md-3 . ">
                            <h3>About Company</h3>
                            <ul className='list-unstyled  '>
                                <li className=' '><a href="">Company History</a></li>
                                <li><a href="">Leadership</a></li>
                                <li><a href=""> Core values</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <h3>Quick Links</h3>
                            <ul className='list-unstyled '>
                                <li><a href="">Manufacturing and Distribution</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href=""> Privacy policy</a></li>
                                <li><a href=""> Contact Uss</a></li>
                                <li><a href="">Careers</a></li>
                            </ul> 
                        </div>
                        <div className="col-md-3">
                        <h3>Our Products</h3>
                            <ul className='list-unstyled '>
                                <li><a href="">Personal Care</a></li>
                                <li><a href="">Bathroom Care</a></li>
                                <li><a href=""> Floor & Surface Care</a></li>
                                <li><a href="">General Care</a></li>
                                <li><a href="">Kitchen Care</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 justify-content-center ">
                        <h3>Contact Info</h3>
                            <ul className='list-unstyled '>
                                <li>Empire Industries Limited – Hygiene</li>
                                <li>Care, Empire Complex, 414, Senapati</li>
                                <li>Bapat Marg, Lower Parel (W),</li>
                                <li>Mumbai – 400013</li>
                                <li>1800 209 2526</li>
                                <li>care@grabbitempire.com</li>
                            </ul>
                        </div>

                
                    </div>
                </div>
                      


 {/* for small screens like mobile  */}
                <div className="container-lg  d-md-none d-sm-block d-lg-none">
                    <div className="row">
                    <div className="col-md-3 text-center ">
                            <h3>About Company</h3>
                            <ul className='list-unstyled  '>
                                <li className=' '><a href="">Company History</a></li>
                                <li><a href="">Leadership</a></li>
                                <li><a href=""> Core values</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-center">
                        <h3>Quick Links</h3>
                            <ul className='list-unstyled '>
                                <li><a href="">Manufacturing and Distribution</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href=""> Privacy policy</a></li>
                                <li><a href=""> Contact Uss</a></li>
                                <li><a href="">Careers</a></li>
                            </ul> 
                        </div>
                        <div className="col-md-3 text-center">
                        <h3>Our Products</h3>
                            <ul className='list-unstyled '>
                                <li><a href="">Personal Care</a></li>
                                <li><a href="">Bathroom Care</a></li>
                                <li><a href=""> Floor & Surface Care</a></li>
                                <li><a href="">General Care</a></li>
                                <li><a href="">Kitchen Care</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-centerr ">
                        <h3 className='text-center'>Contact Info</h3>
                            <ul className='list-unstyled text-center'>
                                <li>Empire Industries Limited – Hygiene</li>
                                <li>Care, Empire Complex, 414, Senapati</li>
                                <li>Bapat Marg, Lower Parel (W),</li>
                                <li>Mumbai – 400013</li>
                                <li>1800 209 2526</li>
                                <li>care@grabbitempire.com</li>
                            </ul>
                        </div>
                      
                    </div>
                </div>
<hr />

                <div className="container-lg d-none d-md-block d-sm-none d-lg-block ">
                    <div className="row ">
                    
                        <div className="col-md-9">
                            <p className='p-0 m-0'>Copyright © 2023 Emperia 1900</p>
                            <p>Powered by...........</p>
                        </div>
                        <div className="col-md-3 mx-auto">
                          <LiaFacebook fontSize={'40px'} color='#1dbfc1'/>
                          <LiaInstagram fontSize={'40px'}  color='#1dbfc1'/>
                          <LiaLinkedin fontSize={'40px'}  color='#1dbfc1'/>
                          <LiaYoutube fontSize={'40px'} color='#1dbfc1'/>
                          <LiaTwitter fontSize={'40px'}  color='#1dbfc1'/>
                        </div>
                    </div>
                </div>


                  <div className="container-lg d-none d-md-none d-sm-block d-lg-none ">
                    <div className="row ">
                    
                        <div className="col-md-9">
                            <p className='p-0 m-0 text-center'>Copyright © 2023 Emperia 1900</p>
                            <p className='text-center'>Powered by...........</p>
                        </div>
                        <div className="col-md-3 mx-auto text-center">
                          <LiaFacebook fontSize={'40px'} color='#1dbfc1'/>
                          <LiaInstagram fontSize={'40px'}  color='#1dbfc1'/>
                          <LiaLinkedin fontSize={'40px'}  color='#1dbfc1'/>
                          <LiaYoutube fontSize={'40px'} color='#1dbfc1'/>
                          <LiaTwitter fontSize={'40px'}  color='#1dbfc1'/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>




    );

    
}
export default Footer;