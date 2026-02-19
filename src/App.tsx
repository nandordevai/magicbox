import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, ContactShadows, OrbitControls, useBounds } from '@react-three/drei'
import { useStore } from './store'
import { Sidebar } from './Sidebar'
import { Case } from './Case'
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
          <directionalLight
            position={[0.5, 1, 1.5]}
            color="#fff"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          <Bounds fit clip observe margin={1.5}>
            <SmartBounds />
            <Case />
          </Bounds>

          <ContactShadows
            position={[0, -0.1, 0]}
            opacity={0.9}
            scale={5}
            blur={1}
            far={20}
          />

          <OrbitControls makeDefault />
          {/* <gridHelper args={[10, 10]} /> */}

        </Canvas>
      </main>
      <Sidebar />
    </>
  )
}