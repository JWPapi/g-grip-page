import dynamic from 'next/dynamic'
import {Scroll, ScrollControls} from "@react-three/drei";
import Head from "next/head";
import HTMLContent from "../components/HTMLContent";

// https://github.com/pmndrs/react-three-next/issues/49
const GGrip = dynamic(() => import('@/../../components/GGrip'), {ssr: false})

const LCanvas = dynamic(() => import('@/../../components/canvas'), {ssr: false})

// ToDo: Separate in smaller components
export default function Page (props) {
  return ( <>
    <Head>
      <title>G–Grip by Greg Williams</title>
    </Head>
    <LCanvas>
      <ScrollControls pages={9}>
        <GGrip/>
        <Scroll/>
        <Scroll html>
          <HTMLContent/>
        </Scroll>
      </ScrollControls>
    </LCanvas>
  </> )
}




