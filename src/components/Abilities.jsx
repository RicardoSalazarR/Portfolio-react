import React from 'react';

const Abilities = () => {
    const abilities = [
        {
            title: "Front end programming",
            text: "Experience with RactJS, making use of technologies such as redux, hook and react router.",
            iconName: 'react',
            color:'rgb(112,222,249)'
        },
        {
            title: "Programming languages",
            text: "Experience in programming languages ​​such as: javascript, java, python, c++",
            iconName: 'javascript',
            color:'rgb(232,211,76)'
        },
        {
            title: "Other Technologies",
            text: "Experience with: CSS, HTML, Git",
            iconName: 'html5',
            color:'rgb(212,87,54)'
        },
        {
            title: "Database design",
            text: "Experience in layout and administration of SQL databases.",
            iconName: 'postgresql',
            color:'rgb(60,100,137)'
        }
    ]
    return (
        <div className='abilities-section' id='Abilities'>
            <h2>Abilities</h2>
            <div className="abilities-background">
                <div className='big-circle'></div>
                <div className='small-circle'></div>
            </div>
            <div className='abilities'>
                {
                    abilities.map(abilitie => (
                        <div className='abilitie-card'>
                            <div className='abilitie-card-header'>
                                <box-icon name={abilitie.iconName} type='logo' size='lg' color={abilitie.color}></box-icon>
                                <h4>{abilitie.title}</h4>
                            </div>
                            <p className='abilitie-card-content'>{abilitie.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Abilities;