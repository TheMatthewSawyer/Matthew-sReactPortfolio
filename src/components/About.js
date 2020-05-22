import React from 'react'

function About() {
    
    
    return (

        <div id='aboutSection' className='aboutSection cantTouchThis'>
            <div className='positioning'>
                <h1 className='sectionTitleAbout'>About</h1>
            </div>
            <div className='betterBRHalf'></div>
            <div className='positioning'>
                <div className='welcomeMessage'>Welcome! Scroll down to start.</div>
            </div>
            <p className='paragraph'> 
                &emsp;&emsp; From a young age, Matthew was obsessed with everything related to computers. At the age of 11, he even managed to cobble together a Frankenstein computer from a discarded pile of desktops at his mother's work. Through fickle fate, instead of being known as one of the world's youngest arsonists, the computer functioned (even though at that age Matthew thought the voltage selector at the back of the power supply was more of a personal preference). The smugness he felt at fixing a thing adults had declared broken solidified his fate in becoming insufferable and pursuing a job in the technology field.
            </p>
            <p className='paragraph'>
                &emsp;&emsp;In the present day, Matthew decided to leave his job in the booming yogurt service industry to pursue a career in tech. He attended the Georgia Tech Coding Bootcamp. He lives in Tucker with his dog, Brownie, who has disappointingly yet to show any aptitude for computers or coding.
            </p>
            <div className='paragraph'>
                <div>Things I can do:</div>
                <ul className='canDoList'>
                    <div className='betterBRHalf'></div>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>jQuery</li>
                    <li>Node.js</li>
                    <li>Socket.io</li>
                    <li>Experience with dealing with API's</li>
                    <li>Experience with many frameworks
                    (Boostrap, Materialize, etc.)</li>
                    <li>Can drink 16oz of water in under 3 seconds</li>
                    <li>Experience with MySQL, Mongo (and their Heroku and Node.js counterparts)</li>
                    <li>Experience with templating software like
                    handlebars</li>
                </ul>
            </div>
            <div className='betterBRHalf'></div>
        </div>
    );
}

export default About;