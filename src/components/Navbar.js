import React from 'react'

function Navbar(props) {

    function smallClickHandler() {
        let smallLinks = document.getElementById('smallLinks');
        let smallLinkButton = document.getElementById('smallMenu');
        if(smallLinks.style.top === '0px') {
            smallLinks.style.top = '100%';
            smallLinkButton.textContent = 'menu';
        } else {
            smallLinks.style.top = '0px';
            smallLinkButton.textContent = 'X';
        }
    }

    return (
        <div className='header'>
            <ul id='nav' className='nav container cantTouchThis'>
                <button onClick={smallClickHandler} id='smallMenu'>menu</button>
                <li className='menuName'><a className='nameLink' href='#top'>Matthew Sawyer</a></li>
                <li className='menuItem'><a className='navLink' href='#contactSection'>Contact</a></li>
                <li className='menuItem'><a className='navLink' href='#portfolioSection'>Portfolio</a></li>
                <li className='menuItem'><a className='navLink' href='#aboutSection'>About</a></li>
            </ul>
            |<div id='smallLinks' className='smallLinkShow'>
                <a className='smallOp' href='#aboutSection'>About</a>
                <a className='smallOp' href='#portfolioSection'>Portfolio</a>
                <a className='smallOp' href='#contactSection'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar