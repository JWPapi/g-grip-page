import { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'



const Shader = (props) => {
  const group = useRef()
  const mesh  = useRef()
  //const data = useScroll()

  const { nodes, materials } = useGLTF('/ggrip.glb')


  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={mesh} geometry={nodes.GGrip.geometry} rotation={[-1.4, 0.05, 0.3]} scale={0.05}>
        <meshStandardMaterial color="#666666" transparent castShadow/>
      </mesh>
    </group>
  )
}

export default Shader
