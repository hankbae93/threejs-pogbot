import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'

export const CameraOrbitController = () => {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)
    return () => {
      controls.dispose()
    }
  }, [camera, gl])

  return null
}

const Floor = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  const map = useTexture('./texture/Brick_Wall_019_basecolor.jpg')

  return (
    <mesh ref={meshRef} rotation={[-3.1193713 / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={map} />
    </mesh>
  )
}

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const map = useTexture('./texture/Brick_Wall_019_basecolor.jpg')
  const { camera } = useThree()
  // camera.position.y = 0
  // camera.position.z = 1
  camera.rotation.x = -3.1193713 / 2

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += 0.01
      camera.position.x += 0.01
    }
  })
  return (
    <mesh ref={meshRef} scale={[2, 2, 2]} position={[0, 1, 0]}>
      <boxGeometry attach={'geometry'} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  )
}
