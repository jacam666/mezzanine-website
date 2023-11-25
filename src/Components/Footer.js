import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import { FaFacebook } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
// import { FaTwitter } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
// import { FaInstagramSquare } from "react-icons/fa";

import '../Styles/Footer.css'

export default function Footer() {

    const socialColors = {
        color: "white",
        backgroundColor: '#010101'
    }
    return (
        <MDBFooter style={ socialColors } className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'>
                <div className='me-5 d-none d-lg-block text-light'>
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href='https://www.facebook.com' className='me-4 text-reset'>
                        <AiFillFacebook className='icon' style={ socialColors } />
                    </a>
                    <a href='https://www.twitter.com/' className='me-4 text-reset'>
                    <AiFillTwitterCircle className='icon' style={socialColors} />
                    </a>
                    <a href='https://www.instagram.com/' className='me-4 text-reset'>
                    <AiFillInstagram className='icon' style={socialColors}   />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4 text-light'>
                                <MDBIcon icon="gem" className="me-1" />
                                Doherty mezzanine Flooring
                            </h6>
                            <p>
                                
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-light'>
                            <h6 className='text-uppercase fw-bold mb-4 text-light'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Flooring
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Tools
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-light'>
                            <h6 className='text-uppercase fw-bold mb-4 text-light'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Reviews
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-light'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Good Old Leighton Buzzard
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 044 999 999 99
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 044 999 999 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4 text-light'>
                © 2023 Copyright: 
                <a className='text-reset fw-bold' href='https://www.google.co.uk/'>
                    CamDesigns
                </a>
            </div>
        </MDBFooter>
    );
}