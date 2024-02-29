import React from 'react'
import './WelcomeBox.css'

function WelcomeBox() {
    return (
        <div className='welcome-box'>
 <div className="fancy-text-container">
      <p className="mainText">
        WE WELCOME YOU TO <span className="fancySpan">BookVerse</span>
      </p>
    </div>
            <p className='welcome-message'>An E-book reading platform<br/>
            <span className='welcome-submessage'>Book a day keeps boredom away!</span></p>
        </div>
    )
}

export default WelcomeBox
