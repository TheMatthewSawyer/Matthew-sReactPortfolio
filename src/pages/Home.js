import React from 'react';
import Navbar from '../components/Navbar'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

function Home () {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <About />
                    <Portfolio />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default Home;