import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const Girl = () => {
  const model = useLoader(GLTFLoader, './models/girl.glb')

  return <primitive object={model.scene} scale={0.3} />
}

export default Girl
