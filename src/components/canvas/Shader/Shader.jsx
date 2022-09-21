import { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import {useFrame} from "@react-three/fiber";
import {useScroll} from "@react-three/drei";



const Shader = (props) => {
  const group = useRef()
  const mesh  = useRef()
  const data = useScroll()

  const { nodes, materials } = useGLTF('/compressedggrip.glb')



  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={mesh} geometry={nodes.GGrip.geometry} rotation={[-1.4, 3.15, 0.3]} scale={0.05} position={[0,-1.5,0]}>
        <meshStandardMaterial color="#444" transparent castShadow/>
      </mesh>
    </group>
  )
}

export default Shader
