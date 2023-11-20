import React, { useState } from 'react';
import '../Styles/ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='contact-container row m-auto'>
            <div className='col-lg-12 col-md-6 col-sm-12'>
                <div className='contact-address-container col-lg-2 col-md-6 col-sm-12 mt-2'>
                    <img src="https://www.freeiconspng.com/uploads/address-icon-25.png" width="80" alt="Hd Icon Address" />
                    <h1>Address</h1>
                    <p className='address-info'>
                        Doherty's Mezzanine Flooring.<br />
                        16 high street,<br />
                        Leighton Buzzard,<br />
                        Lu7 1gg,<br />
                        England
                    </p>
                </div>
                <div className='contact-phone-container col-lg-2 col-md-6 col-sm-12 mt-2'>
                    <img src='/Images/phone-icon-934.png ' width="80" alt="phone icon" />
                    <h1>Phone</h1>
                    <p className='phone-info'>
                        01525 999999
                    </p>
                </div>
                <div className='contact-email-container col-lg-2 col-md-6 col-sm-12 mt-2'>
                    <img src="https://www.freeiconspng.com/uploads/mail-server-icon-png-6.png" width="80" alt="Email icon" />
                    <h1>Email</h1>
                    <p className='email-info'>
                        info@dohertysfloors.co.uk
                    </p>
                </div>
            </div>
            <div className='contact-us-container'>
                <h2>Contact Us</h2>
                <form id='form' className='text-center' onSubmit={handleSubmit}>
                    <div className="row m-auto input-bar">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="row m-auto input-bar">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="row m-auto input-bar">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="row m-auto">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            {/* <button onClick={() => handleSubmit(formData)}>Submit</button> */}
                        </div>
                    </div>
                </form>
            </div>
            <div className='contact-map-container'>
                <iframe
                    className='contact-map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19685.765637188062!2d-0.6835490681688245!3d51.92080659473811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764e08c08bc8a9%3A0xb6dd641c95115264!2sLeighton%20Buzzard!5e0!3m2!1sen!2suk!4v1700228935945!5m2!1sen!2suk"
                    title='Google Maps Location'
                />
            </div>

        </div>
    );
}

export default ContactUs;
