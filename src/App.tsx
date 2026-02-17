import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, ContactShadows, OrbitControls, useBounds } from '@react-three/drei'
import { useStore } from './store'
import { Sidebar } from './Sidebar'
import './App.css'

function SmartBounds() {
  const api = useBounds()
  const { width, height, depth } = useStore()

  useEffect(() => {
    const handler = setTimeout(() => {
      api.refresh().clip().fit()
    }, 150)
    return () => clearTimeout(handler)
  }, [width, height, depth, api])

  return null
}

function Box() {
  const { width, height, depth, color } = useStore()
  const yPos = height / 2 + 0.4

  return (
    <mesh
      position={[0, yPos, 0]}
      rotation={[0, Math.PI / 4, 0]}
      castShadow
    >
      <boxGeometry
        key={`${width}-${height}-${depth}`}
        args={[width, height, depth]}
      />
      <meshPhongMaterial color={color} />
    </mesh>
  )
}

export default function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.on('vite:beforeUpdate', () => {
        setCount(prev => prev + 1)
      })
    }
  }, [])

  return (
    <>
      <main className='viewport'>
        <Canvas
          className="canvas"
          camera={{ position: [0, 3, 5], fov: 60 }}
          dpr={[1, 2]}
          key={count}
          shadows
          gl={{ preserveDrawingBuffer: true }}
        >

          <ambientLight intensity={0.75} />
          <directionalLight position={[0.5, 1, 1.5]} color="#fff" castShadow />

          <Bounds fit clip observe margin={1.5}>
            <SmartBounds />
            <Box />
          </Bounds>

          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.8}
            scale={20}
            blur={2}
            far={50}
          />

          <OrbitControls makeDefault />
          {/* <gridHelper args={[10, 10]} /> */}

        </Canvas>
      </main>
      <Sidebar />
    </>
  )
}