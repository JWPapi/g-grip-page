import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'


const LCanvas = ({ children }) => {

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
      }}
    >
      <Preload all />
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.8} penumbra={1} shadow-mapSize={[512, 512]} castShadow/>
      {children}
    </Canvas>
  )
}

export default LCanvas
