import Image from 'next/image'

export default function ProductImages() {
  return (
    <>
      <Image src={'/img/award-middle-g-grip-hand-on-iphone.jpg?v=2'} alt="ggrip_holding" width={2400} height={1600} />
      <div className="grid grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-2">
        <Image src={'/img/g-grip-on-iphone.jpg'} alt="ggrip_on_iphone" width={2400} height={1600} />{' '}
        <Image src={'/img/g-grip-fitting-to-iphone.jpg'} alt="ggrip_attaching" width={2400} height={1600} />{' '}
        <Image src={'/img/g-grip-on-iphone-portrait.jpg'} alt="ggrip_iphone_portrait" width={2400} height={1600} />{' '}
        <Image src={'/img/g-grip-on-iphone-portrait-2.jpg'} alt="ggrip_iphone_portrait_2" width={2400} height={1600} />{' '}
      </div>
    </>
  )
}
