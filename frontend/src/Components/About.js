import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About BookVerse</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                    At BookVerse, we believe in the transformative power of books and the incredible impact libraries can have on communities. Our journey began with a shared passion for fostering a love of reading, knowledge, and intellectual exploration.<br/>
                        <br/>
                        BookVerse is more than just a library website company; we are on a mission to empower minds through literature. We envision a world where access to knowledge is universal, and everyone can embark on a journey of discovery, personal growth, and enrichment through the pages of a book.<br/>
                        <br/>
                        There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected 
                        humour<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
