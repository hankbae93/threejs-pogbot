import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Tree = () => {
  // const model = useLoader(GLTFLoader, './models/old_tree.glb')
  const model = useLoader(GLTFLoader, './models/tree_blender.glb')
  model.scene.traverse((object) => {
    // @ts-ignore
    if (object.isMesh) {
      object.castShadow = true
    }
  })

  const treeArray = Array(30)
    .fill(null)
    .map((item, index) => 2 * (index + 1))

  return (
    <group>
      {treeArray.map((value) => {
        const x = Math.random() * 10 * value
        const z = Math.random() * 10 * value

        return (
          <object3D key={value} position={[x, 0, z]} rotation-y={Math.PI * x}>
            <primitive object={model.scene.clone()} scale={1} />
          </object3D>
        )
      })}

      {treeArray.map((value) => {
        const x = Math.random() * 10 * value
        const z = Math.random() * 10 * value

        return (
          <object3D key={value} position={[-x, 0, -z]}>
            <primitive object={model.scene.clone()} />
          </object3D>
        )
      })}
    </group>
  )
}

export default Tree
