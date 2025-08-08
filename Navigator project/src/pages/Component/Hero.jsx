import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";

const RotatingText = () => {
  const textRef = useRef();

  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={1.2}
      color="white"
      position={[0, 0, 0]}
      anchorX="center"
      anchorY="middle"
    >
      The Store
    </Text>
  );
};

const Hero = () => {
  return (
    <div style={{ height: "80vh", width: "100vw", backgroundColor: "#000" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls enableZoom={false} />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        <RotatingText />
      </Canvas>
    </div>
  );
};

export default Hero;
