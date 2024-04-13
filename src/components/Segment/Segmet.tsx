import React from 'react'
import './segment.css'
import { useState } from 'react';


const Segmet:React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/236x/1e/ab/b5/1eabb5f88c8eb8dffc54dc9325ed5841.jpg",
    "https://i.pinimg.com/236x/60/73/d6/6073d69b63181e8162e9f03ac4b906a8.jpg",
    "https://i.pinimg.com/236x/c8/d5/62/c8d562b7c5a4b0b2d6ad17484513e842.jpg",
    "https://i.pinimg.com/236x/95/fb/99/95fb999ba538965e6d264f0671ad6c17.jpg"
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
    
  return (
    <div className='seg'>
        <div className='iim'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} style={{ width:600, height:600 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{width:70}} onClick={prevSlide}>&#10094; Prev</button>
                <button style={{width:70}} onClick={nextSlide}>Next &#10095;</button>
            </div>
        </div>
        <div className='s'>
            <img className='star' src='https://t3.ftcdn.net/jpg/05/31/76/76/360_F_531767656_9ZYTdKAhUXatTUAUp7iYi6coq9dy3nSF.jpg'alt=''/>
            <div style={{marginTop:30}}>
                <span style={{fontWeight:'bold',marginTop:100,textAlign:'center'}}>We'll start by creating atomic components, such as Tags,Description, Title, and so on that will display various information about each movie title. Then, we'll stitch these components together via a compound pattern to create a Banner component that displays each movie title in the form of an image. Finally, we'll use the HeroBanner component to build the image carousel component using the Swiper package.By the end of this post, you'll have the knowledge and skills to create a beautiful and functional image carousel component that will impress your users. Let's get started!</span>
                <h3 style={{marginTop:30}}>Joye Uk</h3>
                <span style={{marginTop:50}}>CEO of GenNextDesign</span>
            </div>
        </div>
    </div>
  )
}

export default Segmet