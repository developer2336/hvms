import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PresentationControls,
  useGLTF,
  Environment,
  Float,
  ContactShadows
} from '@react-three/drei';

const VendingMachineModel = () => {
  return (
    <group position={[0, -1, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Main body with bevelled edges */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2, 4, 1]} />
        <meshStandardMaterial color="#3B82F6" metalness={0.3} roughness={0.25} />
      </mesh>

      {/* Glass front */}
      <mesh position={[0, 0, 0.505]}>
        <boxGeometry args={[1.8, 3.6, 0.08]} />
        <meshPhysicalMaterial
          transmission={0.95}
          thickness={0.2}
          roughness={0.1}
          reflectivity={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          attenuationDistance={1.5}
          ior={1.5}
        />
      </mesh>

      {/* Product rows */}
      {[...Array(6)].map((_, i) => (
        <group key={i} position={[0, 1.5 - i * 0.6, 0.3]}>
          {[...Array(4)].map((_, j) => (
            <mesh key={j} position={[-0.75 + j * 0.5, 0, 0]}>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial
                color={
                  i < 2 ? "#F97316" :
                  i < 4 ? "#3B82F6" :
                  "#10B981"
                }
                roughness={0.4}
                metalness={0.3}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Control panel */}
      <mesh position={[0, -1.6, 0.51]}>
        <boxGeometry args={[1.5, 0.6, 0.2]} />
        <meshStandardMaterial color="#1E293B" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Screen with better emissive effect */}
      <mesh position={[0, -1.6, 0.62]}>
        <boxGeometry args={[1, 0.4, 0.05]} />
        <meshStandardMaterial
          emissive="#60A5FA"
          emissiveIntensity={2}
          color="#000000"
        />
      </mesh>

      {/* Collection tray */}
      <mesh position={[0, -2.1, 0.3]}>
        <boxGeometry args={[1.5, 0.2, 0.6]} />
        <meshStandardMaterial color="#1E293B" />
      </mesh>
    </group>
  );
};

const VendingMachine3D: React.FC = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ fov: 45, position: [0, 0, 8] }}
      shadows
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

      <Suspense fallback={null}>
        <PresentationControls
          global
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensity={0.1} floatIntensity={0.3}>
            <VendingMachineModel />
          </Float>
        </PresentationControls>
        <Environment preset="warehouse" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
      </Suspense>
    </Canvas>
  );
};

export default VendingMachine3D;
