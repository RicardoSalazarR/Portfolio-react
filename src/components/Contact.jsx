import React from 'react';
import 'boxicons'

const Contact = () => {
    return (
        <div className='section contact-sec' id='Contact'>
            <h2>Contact</h2>
            <div className='contact-container'>
                <div className='contact'>
                    <box-icon name='phone' type='solid' size='lg' color='white'></box-icon>
                    <span>Phone number</span>
                    <span>7711032502</span>
                </div>
                <div className='contact'>
                    <box-icon name='envelope' type='solid' size='lg' color='white'></box-icon>
                    <span>Email</span>
                    <span>axel.111yo@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;