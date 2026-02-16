import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bounds, ContactShadows, OrbitControls } from '@react-three/drei'
import './App.css'

function Box({ width, height, depth, pos }) {
  pos[1] += height / 2 + 0.25
  return (
    <mesh
      position={pos}
      rotation={[0, Math.PI / 4, 0]}
      castShadow
    >
      <boxGeometry
        key={`${width}-${height}-${depth}`}
        args={[width, height, depth]}
      />
      <meshPhongMaterial color="#ff0000" />
    </mesh>
  )
}

export default function App() {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({ w: 1, h: 1, d: 1})
  const pos = [0, 0, 0]

  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.on('vite:beforeUpdate', () => {
        setCount(prev => prev + 1)
      })
    }
  }, [])

  return (
    <Canvas key={count} shadows camera={{ position: [0, 5, 5], fov: 60 }}>
      <color attach="background" args={['#f0f0f0']} />

      <Bounds fit observe margin={1.5}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0.5, 1, 1]} color="#fff" castShadow />
        <Box width={size.w} height={size.h} depth={size.d} pos={pos} />
      </Bounds>

      <ContactShadows
        position={[0, -0.1, 0]}
        opacity={0.8}
        scale={20}
        blur={2}
        far={10}
      />

      <OrbitControls target={pos} />
      {/* <gridHelper args={[10, 10]} /> */}

    </Canvas>
  )
}