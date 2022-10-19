import {useEffect, useState} from "react";

export default function GGrip_Scroll () {
  const [frame, setFrame] = useState('/img/scrollAnimation/ezgif-frame-001.jpg')

  useEffect(() => {

    window.addEventListener('scroll', () => {
      const frameNumber = Math.min(Math.floor(window.scrollY / 8) + 1, 121);
      const frameString = frameNumber.toString().padStart(3, '0');
      setFrame(`/img/scrollAnimation/ezgif-frame-${frameString}.jpg`)
    })


  }, [])

  return (
    <div id="frames" className="-mt-2 md:-mt-8 mb-8" >
        <img src={frame} width="640" className="mx-auto"/>
      <h2 className="px-0">Hold your phone like a camera</h2>
      <div className="c-grid-2 lg:px-0">
        <div>
          <h5>Universally Compatible</h5>
          <ul>
            <li>Shutter/grip works with iPhone and Android.</li>
            <li>Slides off when not in use.</li>
            <li>Superfast Bluetooth® connection.</li>
            <li>USB-C rechargeable.</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <p>
            A Bluetooth® shutter in an ergonomically designed grip that enables you to hold and shoot one-handed
            like a traditional camera.
          </p>
        </div>
      </div>
    </div> )
}


