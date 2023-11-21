import React, { useEffect } from 'react';
import '../Styles/ContactUs.css';
import { useLocation } from 'react-router-dom';

function ContactUs() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/Pages/ContactUs') {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = 'https://embed.tawk.to/655c8c2c91e5c13bb5b22fd0/1hfoo739k';
            script.charset = 'UTF-8';
            script.setAttribute('crossorigin', '*');

            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, [location.pathname]);


    return (
        <div className='contact-container row m-auto'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
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
            <div className="form-container col-lg-2 col-md-6 col-sm-6">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input type="text" id="Name" name="Name" required="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" required="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can We Help You?</label>
                        <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
                    </div>
                    <button className="form-submit-btn" type="submit">Submit</button>
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
