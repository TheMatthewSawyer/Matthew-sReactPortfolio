import React from 'react'
import EmployeeImg from '../images/employeedirectory.png'
import KnightImg from '../images/knightchat.png';
import ChoiceImg from '../images/choiceeats.jpg';
import WeatherImg from '../images/weatherimg.png';

function Portfolio() {



    return (
        <div id='portfolioSection' className='portfolioSection cantTouchThis container'>
            <div className='positioning'>
                <h1 className='sectionTitlePorfolio'>Portfolio</h1>
            </div>
            <div className='betterBRHalf'></div>
            <a href='https://still-citadel-52045.herokuapp.com/' className='portfolioItem' target='_blank' rel="noopener noreferrer" style={{cursor: 'pointer', textAlign: 'center'}}>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.75)',borderRadius: '10px', padding: '5px'}}>Employee Directory</div><img src={EmployeeImg} alt='the Employee Directory website'/>
            </a>
            <div className='betterBRFull'></div>
            <div className='betterBRFull'></div>
            <a href='https://knightlychat.herokuapp.com/' className='portfolioItem' target='_blank' rel="noopener noreferrer" style={{cursor: 'pointer', textAlign: 'center'}}>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.75)',borderRadius: '10px', padding: '5px'}}>Knight Chat</div><img src={KnightImg} alt='the Knight Chat website'/>
            </a>
            <div className='betterBRFull'></div>
            <div className='betterBRFull'></div>
            <a href='https://armandojhc.github.io/project1-SafeEats/' className='portfolioItem' target='_blank' rel="noopener noreferrer" style={{cursor: 'pointer', textAlign: 'center'}}>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.75)',borderRadius: '10px', padding: '5px'}}>Choice Eats</div><img src={ChoiceImg} alt='the Safe Eats website'/>
            </a>
            <div className='betterBRFull'></div>
            <div className='betterBRFull'></div>
            <a href='https://thematthewsawyer.github.io/MatthewsWeatherDashboard/' className='portfolioItem' target='_blank' rel="noopener noreferrer" style={{cursor: 'pointer', textAlign: 'center'}}>
                <div style={{backgroundColor: 'rgba(0, 0, 0, 0.75)',borderRadius: '10px', padding: '5px'}}>Weather App</div><img src={WeatherImg} alt='the Weather App website'/>
            </a>
            <div className='betterBRFull'></div>
        </div>
    );
}

export default Portfolio;


// The most direct way to change the html background is like so:
//  const imagePath = "/img/sub-folder/my-image.png";
//   document.documentElement.style.background = `url("${imagePath}")`;