import React, { Suspense, useEffect, useRef } from 'react'

import './App.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

import * as THREE from 'three'
import { OrthographicCamera, useTexture } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const CameraOrbitController = () => {
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

function App() {
  return (
    <div className='App'>
      <Canvas
        orthographic
        camera={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          near: 0.000001,
          zoom: 30
        }}
      >
        <Suspense>
          <CameraOrbitController />
          <axesHelper />
          <gridHelper args={[10, 10]} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            shadow-mapSize={[1024, 1024]}
          />

          <Floor />
          <AnimatedBox />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
