//The benefit section is a 4 column grid that splits into 2 columns on mobile. Each column contains an image and a title

import Image from 'next/image'

export default function Benefits () {
  return (
    <div className="mb-16">
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-4 gap-y-12 mb-8 ">
      <div className="flex flex-col gap-4">
        <Image src="/icons/benefits/ergonomic-grip.svg" alt="Ergonomic Grip" width={100} height={100}/>
        <h3 className="text-center">Ergonomic grip</h3>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/icons/benefits/wireless-shutter.svg" alt="Bluetooth Shutter" width={100} height={100}/>
        <h3 className="text-center">Bluetooth® shutter</h3>

      </div>
      <div className="flex flex-col gap-4">
        <Image src="/icons/benefits/unique-slide-on- and-off-system.svg" alt="Slide On Off System" width={100}
               height={100}/>
        <h3 className="text-center">Unique slide on<br />and off system</h3>
      </div>
      <div className="flex flex-col gap-4">
        <Image src="/icons/benefits/20-hour-battery.svg" alt="battery life" width={100} height={100}/>
        <h3 className="text-center">20 hours battery (4,000&nbsp;standby)</h3>

      </div>
    </div>
  </div>
  )
}
