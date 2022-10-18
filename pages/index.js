import dynamic from 'next/dynamic'
import Head from "next/head";
import HTMLContent from "../components/HTMLContent";

// https://github.com/pmndrs/react-three-next/issues/49
const GGrip = dynamic(() => import('@/../../components/GGrip'), {ssr: false})

const LCanvas = dynamic(() => import('@/../../components/Canvas'), {ssr: false})

// ToDo: Separate in smaller components
export default function Page (props) {
  return ( <>
    <Head>
      <title>G–Grip by Greg Williams</title>
    </Head>

    <HTMLContent/>

  </> )
}




