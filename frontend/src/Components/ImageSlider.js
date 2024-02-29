import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="banner.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Read and stay Happy!</h3>
                        <p>Book Reading helps you focus!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                        className="d-block w-100"
                        src="banner2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Read While You Go!</h3>
                        <p>Reading should Continue Always!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                        className="d-block w-100"
                        src='banner3.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Thrilling Stories at your fingertips</h3>
                        <p>If you love Thrilling stories then BookCity is for You</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
