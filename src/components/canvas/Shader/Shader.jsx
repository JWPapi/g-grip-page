import {useRef} from 'react'
import {useGLTF} from '@react-three/drei/core/useGLTF'
import {useFrame} from "@react-three/fiber";
import {useScroll} from "@react-three/drei";

const Shader = (props) => {
  const ref = useRef()
  const mesh = useRef()
  const scrollPosition = useScroll()

  useFrame(() => {
    if (scrollPosition.offset * 10 < Math.PI) {
      ref.current.rotation.y = scrollPosition.offset * 10
      ref.current.position.y= -1.25
    } else {
      ref.current.position.y = -1.25 + (scrollPosition.offset * 10 - Math.PI) * 5
    }
  })
  const {nodes, materials} = useGLTF('/out.glb')

  return (
    <>
      <directionalLight
        intensity={1}
        decay={2}
        color="#666666"
        position={[0.19, 0.22, 0.11]}
        rotation={[-2.02, -0.67, -0.29]}
        scale={[0.94, 0.94, 1]}
      />
      <directionalLight
        intensity={1}
        decay={2}
        color="#191919"
        position={[-0.11, 0.19, -0.22]}
        rotation={[-0.71, 0.35, -0.38]}
        scale={[0.7, 0.7, 1]}
      />
      <directionalLight
        intensity={1}
        decay={2}
        color="#333333"
        position={[-0.29, 0.11, -0.06]}
        rotation={[-1.08, 1.17, -0.45]}
        scale={[0.98, 0.98, 1]}
      />

      <group ref={ref} position={[0, -1.25, 0]} scale={50}>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials["satin finish stainless steel"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_2.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_3.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_4.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_5.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_6.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_7.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_8.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_9.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_10.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_11.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_12.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_13.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_14.geometry}
          material={materials["black low gloss plastic"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_15.geometry}
          material={materials.texture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_16.geometry}
          material={materials["black medium gloss plastic"]}
        />
      </group>
    </>
  )
}

export default Shader
