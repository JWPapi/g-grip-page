import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'

export const Slideshow = ()  => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image src={'/img/award-middle-g-grip-hand-on-iphone.jpg?v=2'} alt="ggrip_holding" width={2400} height={1600} />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image src={'/img/g-grip-on-iphone.jpg'} alt="ggrip_on_iphone" width={2400} height={1600} />{' '}
          </div>
          <div className="keen-slider__slide number-slide3">
            <Image src={'/img/g-grip-fitting-to-iphone.jpg'} alt="ggrip_attaching" width={2400} height={1600} />{' '}
          </div>
          <div className="keen-slider__slide number-slide4">
            <Image src={'/img/g-grip-on-iphone-portrait.jpg'} alt="ggrip_iphone_portrait" width={2400} height={1600} />{' '}
          </div>
          <div className="keen-slider__slide number-slide5">
            <Image src={'/img/g-grip-on-iphone-portrait-2.jpg'} alt="ggrip_iphone_portrait_2" width={2400} height={1600} />{' '}
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

