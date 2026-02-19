import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, ContactShadows, OrbitControls, useBounds } from '@react-three/drei'
import { Sidebar } from './Sidebar'
import { Case } from './Case'
import './App.css'
import { useStore } from './store'

export default function App() {
  const [count, setCount] = useState(0)
  const { current, min } = useStore()
  const isLoaded = current.width > 0
  const yOffset = (current.height - min.height) * 0.01 / 2
  const bounds = useBounds()

  useEffect(() => {
    const timer = setTimeout(() => {
      bounds.refresh().clip().fit()
    }, 150)
    return () => clearTimeout(timer)
  }, [bounds])

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
          camera={{ position: [0, 3, 5], fov: 40 }}
          dpr={[1, 2]}
          key={count}
          shadows
          gl={{ preserveDrawingBuffer: true }}
        >

          <ambientLight intensity={0.95} />
          <directionalLight
            position={[0.5, 1, 1.5]}
            color="#fff"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {isLoaded && <Bounds fit clip observe margin={1.25}>
            <mesh position={[0, yOffset, 0]}>
              <boxGeometry
                args={
                  [
                    current.width * 0.01,
                    current.height * 0.01,
                    current.depth * 0.01,
                  ]
                }
              />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>
          </Bounds>}
          <Case />

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