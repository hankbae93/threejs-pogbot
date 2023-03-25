import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const FogBot = () => {
  const model = useLoader(GLTFLoader, './models/pepe.glb')

  return <primitive object={model.scene} scale={0.3} />
}

export default FogBot
