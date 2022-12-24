import React from 'react';
import image from '../assets/ImagenPrincipal.png'
import 'boxicons'

const Home = () => {
    return (
        <div className='Home-container' id='Home'>
            <div className="title-container">
                <h1>Web Developer</h1>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ricardo-salazar-b9bb13227/" target='_blank'>
                        <box-icon type='logo' name='linkedin' color='white' href='www.google.com'></box-icon>
                    </a>
                    <a href="https://docs.google.com/document/d/1rZ0IJ7-WM802UDXY2LakzOQVkmKdJZOH6rTkDQof9MM/edit?usp=sharing" target='_blank'>
                        <box-icon name='spreadsheet' type='solid' color='white' href=''></box-icon>
                    </a>
                    <a href="mailto:axel.111yo@gmail.com?Subject=Portfolio" target='_blank'>
                        <box-icon name='gmail' type='logo' color='white'></box-icon>
                    </a>
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