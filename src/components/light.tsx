import React, { MutableRefObject, useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'

const Lights = () => {
  // @ts-ignore
  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight position={[0, 10, 10]} castShadow />
    </>
  )
}

export default Lights
