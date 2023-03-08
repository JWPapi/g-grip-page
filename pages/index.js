import Head from 'next/head'
import Image from 'next/image'
import PricingSection from '../components/PricingSection'
import QuantityModal from '../components/QuantityModal'
import Benefits from '../components/Benefits'
import { useEffect, useState } from 'react'
import { Slideshow } from '../components/SlideShow'
import { useMediaQuery } from 'react-responsive'
import ProductImages from '../components/ProductImages'
import Cautions from '../components/Cautions'
import GettingStarted from '../components/GettingStarted'
import TechnicalSpecifications from '../components/TechnicalSpecifications'
import AboutGreg from '../components/AboutGreg'

export default function Page(props) {
  const [quantityModalOpen, setQuantityModalOpen] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  useEffect(() => {
    if (isMobile) {
      document.getElementById('introVideo').src = '/videos/ggrip_cgi_4_5.mp4'
      document.getElementById('inActionVideo').src = '/videos/ad_square_1350_25 (720p).mp4'
      document.getElementById('unboxingVideo').src = 'https://player.vimeo.com/video/805500478?h=9a39b0df3c'
    } else {
      document.getElementById('introVideo').src = '/videos/introVideo.mp4'
      document.getElementById('inActionVideo').src = '/videos/g_grip_in_action.mp4'
      document.getElementById('unboxingVideo').src = 'https://player.vimeo.com/video/769619524?h=fc1cc5987c'
    }
  }, [isMobile])

  return (
    <>
      <Head>
        <title>G–Grip by Greg Williams</title>
      </Head>
      <link rel="prefetch" href={props.checkoutURL} />
      <link rel="prerender" href={props.checkoutURL} />
      <div className="pt-4 md:pt-8 w-screen anchor" id="top">
        <main>
          <div>
            <div className="flex-col justify-center px-4 pt-8 hidden sm:flex">
              <Image src="/img/logo_big_red.svg" alt="G-Grip Logo" width={567} height={209} />
            </div>
            <div className="my-8">
              <div className="mb-8 md:mb-16 mt-8">
                <div className="mobilePlaceHolder">
                  <video autoPlay muted playsInline loop id="introVideo">
                    <source src="" type="video/mp4" />
                  </video>
                </div>
              </div>
              <h2 id="overview" className="px-4 mb-8 text-xl anchor text-center">
                Hold your phone like a camera
              </h2>
              <Benefits />
              <div className="px-4 md:px-0">
                <div className="c-grid-2 lg:px-0">
                  <div>
                    <h5>Universally compatible</h5>
                    <ul>
                      <li>Shutter/grip works with iPhone and Android.</li>
                      <li>Slides off when not in use.</li>
                      <li>Superfast Bluetooth® connection.</li>
                      <li>USB-C rechargeable.</li>
                    </ul>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p>
                      A Bluetooth® shutter button in an ergonomically designed grip that enables you to hold and shoot
                      one-handed like a traditional&nbsp;camera.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="mb-8 md:mb-16 anchor">
            <div className="sm:hidden">
              <Slideshow />
            </div>
            <div className="hidden sm:block">
              <ProductImages />
            </div>
          </section>
          <section className="mb-12">
            <h2>The G-Grip in action</h2>
            <div className="mt-4 mb-8">
              <video autoPlay muted playsInline loop id="inActionVideo">
                <source src="" type="video/mp4" />
              </video>
            </div>
          </section>
          <PricingSection {...props} onQuantityClick={setQuantityModalOpen} />
          <section className="mb-4 md:mb-12 anchor" id="about">
            <h2>Unboxing</h2>
            <div className="mt-4 mb-8">
              <div id="vimeoWrapper" className="aspect-4/5 sm:aspect-video">
                <iframe
                  id="unboxingVideo"
                  src="https://player.vimeo.com/video/769619524?h=fc1cc5987c"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </div>
          </section>
          <section className="mb-16 md:mb-32">
            <AboutGreg />
          </section>
          <section className="mt-16">
            <TechnicalSpecifications /> <GettingStarted />
          </section>
          <PricingSection {...props} onQuantityClick={setQuantityModalOpen} />
          <div className="mb-32 text-center">
            <div className="text-4xl md:text-7xl">“It’s not a gadget, it’s an&nbsp;instrument”</div>
            <div> –</div>
            <div className="italic"> Baz Luhrmann, Director (Elvis, 2022)</div>
            <div className="flex justify-center mt-32">
              <a href="https://instagram.com/theggrip" target="_blank" rel="noreferrer">
                {' '}
                <Image src={'/icons/instagram.svg'} width={64} height={64} alt="Instagram" />
                <div className="mt-1">Follow G-Grip on Instagram</div>
              </a>
            </div>
          </div>
          <Cautions />
        </main>
        <QuantityModal show={quantityModalOpen} currency={props.currency} onBackgroundClick={setQuantityModalOpen} />
      </div>
    </>
  )
}
