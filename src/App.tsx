import React, { Suspense } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'

import { CameraOrbitController } from './components/test-components'
import Ground from './components/ground'
import FogBot from './components/fog-bot'
import Light from './components/light'
import Tree from './components/tree'
import Girl from './components/girl'

function App() {
  return (
    <div className='App'>
      <Canvas camera={{ position: [0, 10, 0] }}>
        <Suspense>
          <CameraOrbitController />
          <axesHelper />
          <gridHelper args={[10, 10]} />
          <Light />
          <Ground />

          <FogBot />
          <Girl />
          <Tree />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
