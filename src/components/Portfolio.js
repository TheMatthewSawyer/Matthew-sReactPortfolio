import React from 'react'

function Portfolio() {



    return (
        <div id='portfolioSection' className='portfolioSection cantTouchThis container'>
            <div className='positioning'>
                <h1 className='sectionTitlePorfolio'>Portfolio</h1>
            </div>
            <div className='betterBRHalf'></div>
            <div className='portfolioItem'>
            </div>
            <div className='betterBRFull'></div>
            <div className='portfolioItem'>
            </div>
            <div className='betterBRFull'></div>
            <div className='portfolioItem'>
            </div>
            <div className='betterBRFull'></div>
            <div className='portfolioItem'>
            </div>
            <div className='betterBRFull'></div>
            <div className='portfolioItem'>
                
            </div>
        </div>
    );
}

export default Portfolio;


// The most direct way to change the html background is like so:
//  const imagePath = "/img/sub-folder/my-image.png";
//   document.documentElement.style.background = `url("${imagePath}")`;