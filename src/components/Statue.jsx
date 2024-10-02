/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ambowen (https://sketchfab.com/ambowen)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/niobe-state-model-9d6428019b84437bb7b2c413e8f447c3
Title: Niobe State Model
*/


import { useGLTF } from '@react-three/drei'

const Statue = (props)=> {
  const { nodes, materials } = useGLTF('/models/statue.glb')
  return (
    <group {...props} dispose={null} receiveShadow castShadow  >
      <group name="Sketchfab_Scene" receiveShadow castShadow>
        <group receiveShadow castShadow
          name="Sketchfab_model"
          position={[-0.309, -2.505, -13.633]}
          rotation={[-3.127, -0.026, -0.018]}>
          <group name="StateLDOBJcleanermaterialmergergles" receiveShadow castShadow>
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.defaultMat}
            />
            <mesh
              name="Object_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
              material={materials.defaultMat}
            />
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.defaultMat}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.defaultMat}
            />
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.defaultMat}
            />
            <mesh
              name="Object_7"
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.defaultMat}
            />
            <mesh
              name="Object_8"
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.defaultMat}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/statue.glb')
export default Statue;