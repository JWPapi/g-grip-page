//The benefit section is a 4 column grid that splits into 2 columns on mobile. Each column contains an image and a title

import Image from 'next/image'

export default function Benefits () {
  return (<div className="mb-16">
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-4 gap-y-12 mb-8 ">
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <Image src="/icons/benefits/grip-icon.svg" alt="Ergonomic Grip" layout="fill"/>
        </div>
        <h5 className="text-center">Ergonomic grip</h5>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <Image src="/icons/benefits/grip-shutter-icon.svg" alt="Bluetooth Shutter" layout="fill"/>
        </div>
        <h5 className="text-center">Bluetooth® shutter</h5>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <Image src="/icons/benefits/grip-on-off-icon.svg" alt="Slide On Off System" layout="fill"/>
        </div>
        <h5 className="text-center">Unique slide on<br/>and off system</h5>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div style={{ width: '128px', height: '128px', position: 'relative' }}>
          <Image src="/icons/benefits/grip-battery-icon.svg" alt="battery life" layout="fill"/>
        </div>
        <h5 className="text-center">20 hours battery<br/>(4,000 standby)</h5>

      </div>
    </div>
  </div>)
}
