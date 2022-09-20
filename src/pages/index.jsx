import dynamic from 'next/dynamic'
import NavBar from "@/components/dom/NavBar";
import Image from "next/image";

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
      <div className="flex  justify-center mt-16 w-100 mx-auto">
        <Image src="/img/big_logo.jpg" alt="Logo" width={815} height={275} />
      </div>
      <div className="text-center text-2xl">By Greg Williams</div>
      <div id="canvasPlaceholder" style={{height: "760px", width: ""}}>
      </div>
      <div className="font-medium text-center text-2xl">Hold your phone like a camera</div>
      <div className="grid grid-cols-2 max-w-5xl mx-auto">
        <div className="">
          <div className="text-center text-2xl">Universally Compatible</div>
          <ul>
            <li>Shutter/grip works with iPhone and Android</li>
            <li>Slides off when not in use</li>
          </ul>

        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center text-2xl">The Grip</div>
          <div className="text-center text-2xl">The Grip</div>
        </div>
      </div>

    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <Shader />
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
