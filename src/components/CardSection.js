import React from 'react';
import '../App.css'
import './CardSection.css'
import video from "/videos/video-1.mp4" //THIS BIT



function CardSection() {
    return (
        <div className='card-container'>
            <div className="image">
            <video src={video} autoPlay loop muted />
            </div>
            <h1>WELCOME TO MY WEB DEVELOPING PORTFOLIO</h1>
            <p>Check my resumé and sent me a message!</p>
        </div>
        )  
}

export default CardSection;