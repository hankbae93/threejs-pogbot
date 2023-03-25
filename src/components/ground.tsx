import React from 'react'
import { useTexture } from '@react-three/drei'
import { RepeatWrapping } from 'three'

const Ground = () => {
  const texture = useTexture('./texture/grass.png')
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.repeat.set(100, 100)

  return (
    <mesh rotation-x={Math.PI * -0.5} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default Ground
