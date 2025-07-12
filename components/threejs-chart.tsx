"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import type * as THREE from "three"

interface ThreeJSChartProps {
  type: string
  data: any
}

function BarChart3D({ data }: { data: any }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {data.datasets[0].data.map((value: number, index: number) => {
        const height = (value / 25000) * 5 // Scale height
        const x = (index - 2) * 2 // Position bars

        return (
          <group key={index} position={[x, height / 2, 0]}>
            <mesh>
              <boxGeometry args={[1, height, 1]} />
              <meshStandardMaterial color={data.datasets[0].backgroundColor[index]} />
            </mesh>
            <Text position={[0, height + 0.5, 0]} fontSize={0.3} color="black" anchorX="center" anchorY="middle">
              {data.labels[index]}
            </Text>
          </group>
        )
      })}
    </group>
  )
}

function ScatterChart3D({ data }: { data: any }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {data.datasets[0].data.map((point: { x: number; y: number }, index: number) => {
        const x = (point.x / 25000) * 5 - 2.5
        const y = (point.y / 6000) * 3
        const z = Math.random() * 2 - 1

        return (
          <mesh key={index} position={[x, y, z]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="rgba(54, 162, 235, 0.8)" />
          </mesh>
        )
      })}
    </group>
  )
}

export function ThreeJSChart({ type, data }: ThreeJSChartProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {type === "3d-bar" ? <BarChart3D data={data} /> : <ScatterChart3D data={data} />}

        {/* Grid */}
        <gridHelper args={[10, 10]} />
      </Canvas>
    </div>
  )
}
