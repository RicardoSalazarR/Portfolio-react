import React from 'react';
import image from '../assets/ImagenPrincipal.png'
import 'boxicons'

const Home = () => {
    return (
        <div className='Home-container' id='Home'>
            <div className="title-container">
                <h1>Web Developer</h1>
                <div className="icons">
                    <box-icon type='logo' name='linkedin' color='white'></box-icon>
                    <box-icon name='spreadsheet' type='solid' color='white'></box-icon>
                    <box-icon name='gmail' type='logo' color='white'></box-icon>
                </div>
            </div>
            <div className='img-container'>
                <div className="background-img"></div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;