import { Canvas } from "@react-three/fiber";
import Character from "./Character";

export default function ThreeScene() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "50vw",
        height: "100vh",
        zIndex: 2000,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Character />
      </Canvas>
    </div>
  );
}