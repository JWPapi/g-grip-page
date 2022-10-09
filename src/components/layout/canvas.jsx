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
      <spotLight position={[-5, -1, 0]} distance={6} attentuation={5} anglePower={10} angle={1} intensity={30} penumbra={1}  castShadow/>

      <spotLight position={[5, -1, 0]} distance={6} attentuation={5} anglePower={10} angle={1} intensity={30} penumbra={0}  castShadow/>

      {children}
    </Canvas>
  )
}

export default LCanvas
