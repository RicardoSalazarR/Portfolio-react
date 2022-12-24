import React from 'react';
import ecommerce from '../assets/ecommerce.png'
import pokedex from '../assets/pokedex.png'
import rickAndMorty from '../assets/rick-and-morty.png'

const Portfolio = () => {
    const projects=[
        {
            title:'pokedex',
            image:pokedex
        },
        {
            title:'ecommerce',
            image:ecommerce
        },
        {
            title:'Rick and Morty Planetary Catalog',
            image:rickAndMorty
        }
    ]
    return (
        <div className='portfolio-container section' id='Portfolio'>
            <h2>Portfolio</h2>
            <div className='projects-cards-container'>
                {
                    projects.map(project=>(
                        <div className='project-card'>
                            <h4>{project.title}</h4>
                            <img src={project.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Portfolio;