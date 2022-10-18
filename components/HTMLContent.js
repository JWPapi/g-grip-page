import Image from "next/image";
import Footer from "./Footer";

//ToDo: Add by Greg Williams
//ToDo: Follow up to get Rendering
//ToDo: Page stays the same and only the g-grip is rotaing
export default function HTMLContent () {
  return (
    <div className="absolute top-0 left-0   w-screen h-screen">
      <main>
        <div className="flex justify-center">
          <Image src="/img/logo_big.svg" alt="G-Grip Logo" width={567} height={209}/>
        </div>
        <div id="canvas"/>
        <section className="mb-16 md:mb-32" id="overview">
          <h2>Hold your phone like a camera</h2>
          <div className="c-grid-2 mb-8 px-4 lg:px-0">
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
          <Image src={"/img/g-grip-hand-on-iphone.jpg"} alt="ggrip_holding" width={2400} height={1600}/>
          <div className="grid grid-cols-2 gap-2 md:gap-4 md:mt-2">
            <Image src={"/img/g-grip-on-iphone.jpg"} alt="ggrip_on_iphone" width={2400} height={1600}/>
            <Image src={"/img/g-grip-fitting-to-iphone.jpg"} alt="ggrip_attaching" width={2400} height={1600}/>
          </div>
        </section>
        <section className="mb-16 md:mb-32">
          <h2>Up your Photography game</h2>
          <p className="md:w-1/2 mb-8 px-4 xl:px-0">
            G-Grip comes with 2 x 3M VHB single use adhesive backed plates which will adhere
            to smooth, non-textured, non-porous, flat surfaces. They will not adhere to
            rubber, matte glass, silicon, TPU or soft touch coatings.
          </p>
          <video className="mb-8" width="100%" height="auto" autoPlay muted>
            <source src="/videos/attaching_ggrip.mp4" type="video/mp4"/>
          </video>
          <div className="c-grid-2 px-4 xl:px-0">
            <div>
              <h5>Turning on</h5>
              <ul>
                <li>Press and hold for 3 seconds</li>
              </ul>
              <h5 className="mt-4">Pairing G-Grip</h5>
              <ul>
                <li>Activate Bluetooth® on your device.</li>
                <li>Turn on G-Grip by pressing the shutter button until the status light is flashing green.</li>
                <li>Add Bluetooth® device in phone settings.</li>
                <li>Select ‘GGrip’ from the list of available devices.</li>
              </ul>
              <h5 className="mt-4">Shooting photos</h5>
              <ul>
                <li>Select Photo mode on your device.</li>
                <li>Press shutter once for single picture.</li>
                <li>Add Bluetooth® device in phone settings.</li>
                <li>For Burst mode, press and hold (for up to 3 minutes).</li>
              </ul>
            </div>
            <div>
              <p>
                Note: To configure Burst mode on iPhone, go to Settings &gt; Camera and enable the option to ‘Use
                Volume Up for Burst’.
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
            </div>
          </div>
        </section>
        <section id="about">
          <h2>About</h2>
          <div className="mb-8">
            <Image src={"/img/greg-williams-g-grip-on-iphone-col.jpg"}
                   alt="greg"
                   width={2400}
                   height={1600}/>
          </div>
          <div className="c-grid-2 px-4 xl:px-0">
            <div>
              <h5>Greg Williams</h5>
              <p>
                One of the most trusted photographers in entertainment.<br/><br/> Greg has always loved shooting on
                his phone but missed the ergonomic grip and shutter of a camera – hence designing the G-Grip.
              </p>
            </div>
            <p className="mt-4 md:mt-0">
              Greg says... <br/><br/>
              <span className="italic"> I shoot pictures on my phone everyday. I invented the G-Grip so I can operate
                                                                it like a traditional camera.</span>
            </p>
          </div>
          <h2 className="mt-32 md:mt-64 max-w-sm mx-auto">
            Battery life 20 hours in use <br/> and 4,000 hours on standby.
          </h2>
          <div className="text-uxl text-center mt-16 mb-64 tracking-tighter">20</div>
          <h2 id="techSpecs">Technical Specifications</h2>
          <div className="c-grid-2 mb-16 px-4 md:p-0">
            <div>
              <h5>Usage</h5>
              <ul>
                <li>Transition frequency 2.4000GHz - 2.4835GHz.</li>
                <li>Communication distance 10m (30ft).</li>
                <li>Battery life 20 hours in use and 4,000 hours on standby.</li>
              </ul>
            </div>
            <div>
              <h5>Dimensions</h5>
              <ul>
                <li>iPhone with iOS 6 and above.</li>
                <li>Android OS 4.2 and above.</li>
                <li>Compatible devices require Bluetooth® 4.0+ support and use of side volume key as the shutter
                    button.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mt-16 md:mt-32">
          <h2>Special Introductory Price </h2>
          <div className="text-9xl text-center mb-4 -mt-4">£39</div>
          <div className="text-center mb-32 ">
            <a href="https://g-grip.swell.store/buy/QyQf8uwP">
              <button className="text-4xl px-8 py-4">
                Buy
              </button>
            </a>
          </div>
        </section>
        <section>
          <hr className="mb-2"/>
          <div className="text-neutral-500 mb-8 text-xs md:text-sm px-4 xl:px-0 ">
            <p>The user is cautioned that changes or modifications not expressly approved by the party responsible for
               compliance could void the user’s authority to operate the equipment. This device complies with Part 15
               of the FCC Rules. Operation is subject to the following two conditions: (1) this device may not cause
               harmful interference, and (2) this device must accept any interference received, including interference
               that may cause undesired operation. NOTE: This equipment has been tested and found to comply with the
               limits for a Class B digital device, pursuant to Part 15 of the FCC Rules. These limits are designed to
               provide reasonable protection against harmful interference in a residential installation. This
               equipment generates, uses and can radiate radio frequency energy and, if not installed and used in
               accordance with the instructions, may cause harmful interference to radio communications. However,
               there is no guarantee that interference will not occur in a particular installation. If this equipment
               does cause harmful interference to radio or television reception, which can be determined by turning
               the equipment off and on, the user is encouraged to try to correct the interference by one or more of
               the following measures:
            </p>
            <ul className="list-decimal mt-4 ml-4">
              <li>Reorient or relocate the receiving antenna</li>
              <li>Increase the separation between the equipment and receiver</li>
              <li>Connect the equipment into an outlet on a circuit different from that to which the receiver is
                  connected
              </li>
              <li>Consult the dealer or an experienced radio/TV technician for help</li>
            </ul>
            <h5 className="mt-4">FCC Radiation Exposure Statement</h5>
            <p>
              This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment.
              This transmitter must not be co-located or operating in conjunction with any other antenna or
              transmitter.
            </p>
            <h5 className="mt-4">Recycling</h5>
            <p> Please recycle all materials used in packaging.</p>
            <p className="mt-4">Designed and developed in the UK. Made in China.<br/> Patent pending.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
