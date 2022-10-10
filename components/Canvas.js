import {Canvas} from '@react-three/fiber'
import {Preload} from '@react-three/drei'
import {Suspense} from 'react'

const LCanvas = ({children}) => {
  return (
      <Canvas
        mode="concurrent"
        style={{
          position: 'absolute',
        }}
        frameloop="demand"
      >
        <Preload all/>
        <ambientLight intensity={1}/>
        <spotLight position={[-5, -1, 0]}
                   distance={6}
                   attentuation={5}
                   anglePower={10}
                   angle={1}
                   intensity={30}
                   penumbra={1}
                   castShadow/>

        <spotLight position={[5, -1, 0]}
                   distance={6}
                   attentuation={5}
                   anglePower={10}
                   angle={1}
                   intensity={30}
                   penumbra={0}
                   castShadow/>

        {children}
      </Canvas>
  )
}

const LoadingSpinner = () => ( <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"/> )

export default LCanvas
