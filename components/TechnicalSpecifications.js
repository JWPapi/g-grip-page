import Image from 'next/image'

export default function TechnicalSpecifications() {
  return (
    <>
      <div className="text-uxl text-center -mt-6 tracking-tighter line-height leading-none">20</div>
      <h2 className=" max-w-sm mx-auto text-center">
        hours battery life in normal use <br /> and 4,000 hours on standby.{' '}
      </h2>

      <div className="flex items-center justify-center py-16">
        <Image className="mx-auto my-8 " src={'/img/award-winner-design.png'} width="480" height="480" />
      </div>
      <h2 id="techspecs" className="anchor mt-16 md:mt-32">
        Technical specifications
      </h2>
      <div className="c-grid-2 mb-16 px-4 md:p-0">
        <div>
          <h5>Usage</h5>
          <ul>
            <li>Transition frequency 2.4000GHz - 2.4835GHz.</li>
            <li>Communication distance 10m (30ft).</li>
            <li>Battery life 20 hours in use and 4,000 hours on standby.</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h5>Dimensions</h5>
          <ul>
            <li>iPhone with iOS 6 and above.</li>
            <li>Android OS 4.2 and above.</li>
            <li>
              Compatible devices require Bluetooth® 4.0+ support and use of side volume key as the shutter button.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
