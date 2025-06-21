import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const model = useGLTF("/diego-portfolio/model1.glb");
  return <primitive object={model.scene} position={[0, 0, 0]} scale={1} />;
}

function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 5, 5]}
        angle={0.5}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight position={[0, 3, 3]} intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
    </>
  );
}

export default Scene;
