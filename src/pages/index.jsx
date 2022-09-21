import dynamic from 'next/dynamic'
import NavBar from "@/components/dom/NavBar";
import Image from "next/image";
import Link from "next/link";

// import Shader from '@/components/canvas/Shader/Shader'
// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  return (
    <>
      <NavBar/>
      <div className="max-w-5xl mx-auto">
        <h1 className="font-normal text-uxl text-center -mt-8">G-Grip</h1>
        <h3 className="font-normal text-center text-2xl -mt-10">By Greg Williams</h3>
        <div id="canvasPlaceholder" style={{height: "640px", width: ""}}/>
        <h2 className="text-center text-2xl mb-12">Hold your phone like a camera</h2>
        <div className="grid grid-cols-2 mb-10">
          <div>
            <h5>Universally Compatible</h5>
            <ul>
              <li>Shutter/grip works with iPhone and Android</li>
              <li>Slides off when not in use</li>
              <li>Superfast Bluetooth® connection</li>
              <li>USB-C rechargable</li>
            </ul>
          </div>
          <div>
            <p>
              A Bluetooth® shutter in an ergonomically designed grip that enables you to hold and shoot one-handed like
              a traditional camera.
            </p>
            <br/>
            <p>
              Works with iPhone and AndroidSlides off when not in use Superfast Bluetooth® connectionUSB-C rechargable
            </p>
          </div>
        </div>
        <Image src={"/img/holding_ggrip.jpg"} alt="holding_ggrip" width={1024} height={470}/>
        <div className="grid grid-cols-2 gap-5 mt-8">
          <Image src={"/img/attached_ggrip.jpg"} alt="attacked_grip" width={472} height={470}/>
          <Image src={"/img/removing_ggrip.jpg?v=5"} alt="attacked_grip" width={472} height={470}/>
        </div>
        <h2 className="text-center text-2xl mt-8">Up your Photography game</h2>
        <p className="w-1/2 mt-8 mb-10">G-Grip comes with 2 x 3M VHB single use adhesive backed plates which will adhere
                                        to smooth, non-textured, non-porous, flat surfaces. They will not adhere to
                                        rubber, matte glass, silicon, TPU or soft touch coatings.
        </p>

        <video className="mt-4" width="100%" height="auto" autoPlay muted>
          <source src="/videos/attaching_ggrip.mp4" type="video/mp4"/>
        </video>
        <div className="grid grid-cols-2 mt-4 gap-5">
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
              Note: To configure Burst mode on iPhone, go to Settings > Camera and enable the option to ‘Use Volume Up
              for Burst’.
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

        <h2 className="text-center text-2xl mt-8 mb-6">About</h2>
        <Image src={"/img/greg_holding_ggrip.jpg"} alt="greg" width={1024} height={600}/>
        <div className="grid grid-cols-2 mt-4 gap-5">
          <div>
            <h2>Greg Williams</h2>
            <p>
              One of the most trusted photographers in entertainment.<br/><br/> Greg has always loved shooting on his
              phone but missed the ergonomic grip and shutter of a camera – hence designing the G-Grip.
            </p>
          </div>
          <p>
            Greg says... <br/><br/> “I shoot pictures on my phone everyday. I invented the G-Grip so I can operate it
            like a traditional camera.”
          </p>
        </div>
        <h3 className="text-2xl mt-8 mb-6 max-w-sm text-center mx-auto">
          Battery life 20 hours in use and 4,000 hours on standby.
        </h3>
        <div className="text-uxl text-center -mt-24">20</div>
        <video autoPlay muted>
          <source src="/videos/rotating_ggrip.mp4" type="video/mp4"/>
        </video>
        <h2 className="text-center text-2xl mt-8 mb-6">Technical Specifications</h2>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <h5>Usage</h5>
            <ul>
              <li>Transition frequency 2.4000GHz - 2.4835GHz.</li>
              <li>Communication distance 10m (30ft)</li>
              <li>Battery life 20 hours in use and 4,000 hours on standby</li>
            </ul>
          </div>
          <div>
            <h5>Dimensions</h5>
            <ul>
              <li>iPhone with iOS 6 and above.</li>
              <li>Android OS 4.2 and above.</li>
              <li>Compatible devices require Bluetooth® 4.0+ support and use of side volume key as the shutter button.
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-2xl mt-16 mb-6 max-w-sm text-center mx-auto">
          Special Introductory Price
        </h3>
        <div className="text-9xl text-center mb-4 -mt-6">£39</div>
        <div className="text-center mb-32 ">
          <button className="rounded-full bg-blue-500 text-white px-4 py-2">
            Buy
          </button>
        </div>
        <hr className="mb-2"/>
        <div className="text-neutral-500 mb-8 text-sm">
          <p>The user is cautioned that changes or modifications not expressly approved by the party responsible for
             compliance could void the user’s authority to operate the equipment. This device complies with Part 15 of
             the FCC Rules. Operation is subject to the following two conditions: (1) this device may not cause harmful
             interference, and (2) this device must accept any interference received, including interference that may
             cause undesired operation. NOTE: This equipment has been tested and found to comply with the limits for a
             Class B digital device, pursuant to Part 15 of the FCC Rules. These limits are designed to provide
             reasonable protection against harmful interference in a residential installation. This equipment generates,
             uses and can radiate radio frequency energy and, if not installed and used in accordance with the
             instructions, may cause harmful interference to radio communications. However, there is no guarantee that
             interference will not occur in a particular installation. If this equipment does cause harmful interference
             to radio or television reception, which can be determined by turning the equipment off and on, the user is
             encouraged to try to correct the interference by one or more of the following measures:
          </p>
          <ul className="list-decimal mt-4 ml-4">
            <li>Reorientate or relocate the receiving antenna</li>
            <li>Increase the separation between the equipment and receiver</li>
            <li>Connect the equipment into an outlet on a circuit different from that to which the receiver is connected
            </li>
            <li>Consult the dealer or an experienced radio/TV technician for help</li>
          </ul>
          <h5 className="mt-4">FCC Radiation Exposure Statement</h5>
          <p>
            This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment. This
            transmitter must not be co-located or operating in conjunction with any other antenna or transmitter.
          </p>

          <h5 className="mt-4">Recycling</h5>
          <p> Please recycle all materials used in packaging.</p>

          <p className="mt-4">Designed and developed in the UK. Made in China.<br/> Patent pending.</p>
        </div>

      </div>
      <footer className="bg-slate-50 h-full pt-4 text-neutral-400">
        <div className="max-w-5xl mx-auto grid grid-cols-2">
          <ul className="list-none ml-0">
            <li><Link href="/legal"><a>Legal</a></Link></li>
            <li><Link href="/privacy"><a>Privacy Statement</a></Link></li>
            <li><Link href="/terms"><a>Terms & Conditions</a></Link></li>
            <li><Link href="/shipping"><a>Shipping & Return Policy</a></Link></li>
          </ul>
          <p>2022 © G-Grip<br />
             All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <Shader/>
  </>
)

export default Page

export async function getStaticProps () {
  return {
    props: {
      title: 'G–Grip by Greg Williams',
    },
  }
}
