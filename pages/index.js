import Head from "next/head"
import Image from "next/image"
import Footer from "../components/Footer"
// ToDo: Separate in smaller components
// ToDo: Smaller version of video for mobile
// ToDo: Change Resolution of self-hosted videos to 1280x720
export default function Page(props) {
  return (<>
    <Head>
      <title>G–Grip by Greg Williams</title>
    </Head>
    <div className="absolute w-screen">
      <main>
        <div>
          <div className="flex flex-col justify-center px-4 pt-8">
            <Image src="/img/logo_big_red.svg"
              alt="G-Grip Logo"
              width={567}
              height={209}/>

          </div>
          <div className="my-8">
            <div className="mb-8 md:mb-16 mt-8">
              <video autoPlay
                muted
                playsInline
                loop>
                <source src="/videos/the_intro_video"
                  type="video/mp4"/>
              </video>
            </div>
            <div className="px-4 md:px-0">
              <h2 id="overview"
                className="px-0 anchor">Hold your phone like a camera</h2>
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
                    A Bluetooth® shutter button in an ergonomically designed grip that enables you to hold and shoot one-handed like a traditional&nbsp;camera.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section className="mb-8 md:mb-16 anchor">
          <Image src={"/img/g-grip-hand-on-iphone.jpg?v=2"}
            alt="ggrip_holding"
            width={2400}
            height={1600}/>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-2">
            <Image src={"/img/g-grip-on-iphone.jpg"}
              alt="ggrip_on_iphone"
              width={2400}
              height={1600}/> <Image src={"/img/g-grip-fitting-to-iphone.jpg"}
            alt="ggrip_attaching"
            width={2400}
            height={1600}/>
          </div>
        </section>

        <section className="mb-12">
          <h2>The G-Grip in action</h2>
          <div className="mt-4 mb-8">
            <video autoPlay
              muted
              playsInline
              loop>
              <source src="/videos/g_grip_in_action.mp4"
                type="video/mp4"/>
            </video>
          </div>
        </section>
        <section className="mt-16 md:mt-32">
          <h2 className="text-center">Get it by 25 Nov</h2>
          <div className="text-9xl leading-none text-center mb-4 -mt-4 tracking-tighter">£49</div>
          <div className="text-center mb-32 ">
            <a href="https://g-grip.swell.store/buy/QyQf8uwP">
              <button className="text-2xl px-8 py-4">
                Pre-order now
              </button>
            </a>
          </div>
        </section>
        <section className="mb-4 md:mb-12 anchor" id="about">
          <h2>Unboxing</h2>
          <div className="mt-4 mb-8">
            <div className="md:hidden">
              <iframe src="https://player.vimeo.com/video/769619524?h=fc1cc5987c"
                width="1024"
                height="576"
                style={{maxWidth: "100%",height: 'calc(100vw * 0.5625)'}}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen></iframe>
            </div>
            <div className="hidden md:block">
              <iframe src="https://player.vimeo.com/video/769619524?h=fc1cc5987c"
                width="1024"
                height="576"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </section>
        <section className="mb-16 md:mb-32">
          <div className="c-grid-2 px-4 xl:px-0 mb-16">
            <div>
              <h5>Greg Williams</h5>
              <p>
                One of the most trusted photographers in entertainment.<br/><br/> Greg has always loved shooting on his phone but missed the ergonomic grip and shutter of a camera – hence designing the&nbsp;G-Grip.
              </p>
            </div>
            <div>
              <p className="mt-4 md:mt-0">
                Greg says... <br/><br/>
                <span className="italic"> I shoot pictures on my phone everyday. I invented the G-Grip so I can operate
                                        it like a traditional&nbsp;camera.</span>
              </p>
              <p className="mt-4">Follow Greg on <a className="text-neutral-400"
                href="https://www.instagram.com/gregwilliamsphotography/">Instagram</a></p>
            </div>
          </div>

        </section>
        <section>
          <h2 className="mt-16 max-w-sm mx-auto text-center">
            Battery life 20 hours in use <br/> and 4,000 hours on standby. </h2>
            <div className="text-uxl text-center -mt-6 tracking-tighter line-height leading-none">20</div>
            <div className="text-6xl text-center -mt-4 mb-16">hours</div>
          <h2 id="techspecs"
            className="anchor">Technical specifications</h2>
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
                <li>Compatible devices require Bluetooth® 4.0+ support and use of side volume key as the shutter button.
                </li>
              </ul>
            </div>
          </div>
          <h2>Getting started with the G-Grip</h2>
          <div className="c-grid-2 px-4 xl:px-0">
            <div>
              <h5>Attaching the G-Grip plate to your phone</h5>
              <p>G-Grip comes with 2 x 3M VHB single use adhesive backed plates which will adhere to smooth, non-textured, non-porous, flat surfaces. We recommend a hard plastic or leather case.* Position the plate using the guide supplied, leave for 24hrs to harden fully before attaching the G-Grip.</p>
              <h5 className="mt-4">Turning on</h5>
              <ul>
                <li>Press and hold for 3 seconds.</li>
              </ul>
              <h5 className="mt-4">Pairing G-Grip</h5>
              <ul>
                <li>Activate Bluetooth® on your device.</li>
                <li>Turn on G-Grip by pressing the shutter button until the status light is flashing green.</li>
                <li>Add Bluetooth® device in phone settings.</li>
                <li>Select ‘GGrip’ from the list of available devices.</li>
              </ul>

            </div>
            <div>
              <h5 className="mt-4 md:mt-0">Shooting photos</h5>
              <ul>
                <li>Select Photo mode on your device.</li>
                <li>Press shutter once for single picture.</li>
                <li>For Burst mode, press and hold (for up to 3 minutes).</li>
              </ul>
              <p className="mt-4">
                Note: To configure Burst mode on iPhone, go to Settings &gt; Camera and enable the option to ‘Use Volume Up for Burst’.
              </p>
              <h5 className="mt-4">Shooting videos</h5>
              <ul>
                <li>Select Video mode on your device.</li>
                <li>Press shutter once to record, and again to stop.</li>
              </ul>
              <h5 className="mt-4">Turning off</h5>
              <ul>
                <li>The device will go into automatic standby mode after 4 minutes of inactivity.</li>
              </ul>
              <small className="mt-6 block"> * They will not adhere to rubber, matte glass, silicon, TPU or soft touch&nbsp;coatings.</small>
            </div>
          </div>
        </section>
        <section className="mt-16 md:mt-32">
          <h2 className="text-center">Get it by 25 Nov</h2>
          <div className="text-9xl leading-none text-center mb-4 -mt-4 tracking-tighter">£49</div>
          <div className="text-center mb-32 ">
            <a href="https://g-grip.swell.store/buy/QyQf8uwP">
              <button className="text-2xl px-8 py-4">
                Pre-order now
              </button>
            </a>
          </div>
        </section>
        <section>
          <hr className="mb-2"/>
          <div className="text-neutral-500 mb-8 text-xs md:text-sm px-4 xl:px-0 flex flex-col gap-4">
            <p>The user is cautioned that changes or modifications not expressly approved by the party responsible for compliance could void the user’s authority to operate the equipment. This device complies with Part 15 of the FCC Rules. Operation is subject to the following two conditions: (1) this device may not cause harmful interference, and (2) this device must accept any interference received, including interference that may cause undesired operation. NOTE: This equipment has been tested and found to comply with the limits for a Class B digital device, pursuant to Part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses and can radiate radio frequency energy and, if not installed and used in accordance with the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures:
            </p>
            <ul className="list-decimal ml-4">
              <li>Reorient or relocate the receiving antenna</li>
              <li>Increase the separation between the equipment and receiver</li>
              <li>Connect the equipment into an outlet on a circuit different from that to which the receiver is connected
              </li>
              <li>Consult the dealer or an experienced radio/TV technician for help</li>
            </ul>
            <div>
              <h5>FCC Radiation Exposure Statement</h5>
              <p>
                This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment. This transmitter must not be co-located or operating in conjunction with any other antenna or transmitter.
              </p>
            </div>
            <div>
              <h5>Recycling</h5>
              <p> Please recycle all materials used in packaging.</p>
            </div>
            <p>Designed and developed in the UK. Made in China.<br/> Patent pending.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  </>)
}




