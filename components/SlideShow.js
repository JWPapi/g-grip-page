import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
}

const slideImages = [
  {
    url: '/img/g-grip-fitting-to-iphone.jpg',
  },
  {
    url: '/img/g-grip-on-iphone.jpg',
  },
  {
    url: '/img/g-grip-on-iphone-portrait.jpg',
  },
  {
    url: '/img/g-grip-on-iphone-portrait-2.jpg',
  },
  {
    url: '/img/g-grip-hand-on-iphone.jpg?v=2',
  },
]

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide indicators="true" arrows={false} transitionDuration={200} autoplay={false}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
