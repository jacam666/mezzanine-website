// import React from 'react'
// import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
// import '../Styles/ContactUs.css';


// function ContactUs() {
//     return (
//         <div className='contact-container row m-auto'>
//             <div>
//                 <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
//                     <h2>Contact us</h2>

//                     <MDBInput className='col-lg-6 col-md-6 col-sm-6' label='Name' v-model='name' wrapperClass='mb-4' />

//                     <MDBInput className='col-lg-6 col-md-6 col-sm-6' type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

//                     <MDBInput className='col-lg-6 col-md-6 col-sm-6' label='Subject' v-model='subject' wrapperClass='mb-4' />

//                     <MDBTextArea className='col-lg-6 col-md-6 col-sm-6' wrapperClass='mb-4' label='Message' />

//                     <MDBCheckbox className='col-lg-6 col-md-6 col-sm-6' wrapperClass='d-flex justify-content-center' label='Send me copy' />

//                     <MDBBtn color='primary' block className='my-4'>
//                         Send
//                     </MDBBtn>
//                 </form>
//                 <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19685.765637188062!2d-0.6835490681688245!3d51.92080659473811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48764e08c08bc8a9%3A0xb6dd641c95115264!2sLeighton%20Buzzard!5e0!3m2!1sen!2suk!4v1700228935945!5m2!1sen!2suk"
//                     title='Google Maps Location'>

//                 </iframe>
//             </div>
//         </div>


//     )
// }

// export default ContactUs

import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import '../Styles/ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        sendCopy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., sending data to a server
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='contact-container row m-auto'>
            <div>
                <form id='form' className='text-center' onSubmit={handleSubmit}>
                    <h2>Contact us</h2>

                    <MDBInput
                        className='col-lg-2 col-md-6 col-sm-6'
                        label='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        wrapperClass='mb-4'
                    />

                    <MDBInput
                        className='col-lg-2 col-md-6 col-sm-6'
                        type='email'
                        label='Email address'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        wrapperClass='mb-4'
                    />

                    <MDBInput
                        className='col-lg-2 col-md-6 col-sm-6'
                        label='Subject'
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        wrapperClass='mb-4'
                    />

                    <MDBTextArea
                        className='col-lg-2 col-md-6 col-sm-6'
                        wrapperClass='mb-4'
                        label='Message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <MDBCheckbox
                        className='col-lg-2 col-md-6 col-sm-6'
                        wrapperClass='d-flex justify-content-center'
                        label='Send me copy'
                        name='sendCopy'
                        checked={formData.sendCopy}
                        onChange={handleChange}
                    />

                    <MDBBtn color='primary' block className='my-4 col-lg-2 col-md-6 col-sm-6' type='submit'>
                        Send
                    </MDBBtn>
                </form>
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
