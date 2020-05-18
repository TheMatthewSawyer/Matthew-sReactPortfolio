import React from 'react'

function Contact() {

    return (
        <div id='contactSection' className='contactSection container'>
            <div className='positioning'>
                <h1 className='sectionTitleContact'>Contact</h1>
            </div>
            <div className='betterBRFull'></div>
            <div>
                <div>
                    <span className='contactHeaders'>Email: </span>
                    MatthewLeonardSawyer@gmail.com
                </div>
                
                <div>
                    <span className='contactHeaders'>Github: </span>
                    <a className='contactLinks' href='https://github.com/TheMatthewSawyer/' rel="noopener noreferrer" target='_blank'>
                        https://github.com/TheMatthewSawyer/
                    </a>
                </div>
                
                <div>
                    <span className='contactHeaders'>Linkedin: </span>
                    <a className='contactLinks' href='https://www.linkedin.com/in/matthew-sawyer-372549197/' rel="noopener noreferrer" target='_blank'>
                        https://www.linkedin.com/in/matthew-sawyer-372549197/
                    </a>
                </div>

            </div>
        </div>
    );

}

export default Contact;