import { useRouter } from 'next/router'
import { setState } from '@/helpers/store'
import { useEffect } from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import {Scroll, ScrollControls} from "@react-three/drei";
import NavBar from "@/components/dom/NavBar";

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    setState({ router })
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <NavBar />

      <LCanvas>
      <ScrollControls
        pages={9} // Each page takes 100% of the height of the canvas
      >
        {Component.r3f && Component.r3f(pageProps)}
        <Scroll>
        </Scroll>
        <Scroll html>
          <Dom>
        <Component {...pageProps} />
         </Dom>
        </Scroll>
      </ScrollControls>
      </LCanvas>

    </>
  )
}

export default App
