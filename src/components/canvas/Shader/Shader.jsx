import { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import {useFrame} from "@react-three/fiber";
import {useScroll} from "@react-three/drei";



const Shader = (props) => {
  const group = useRef()
  const mesh  = useRef()
  const data = useScroll()

  const { nodes, materials } = useGLTF('/ggrip.glb')
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    mesh.current.rotation.z = data.offset * 6.3


  })



  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={mesh} geometry={nodes.GGrip.geometry} rotation={[-1.4, 0.05, 0.3]} scale={0.05} position={[0,1,0]}>
        <meshStandardMaterial color="#666666" transparent castShadow/>
      </mesh>
    </group>
  )
}

export default Shader
