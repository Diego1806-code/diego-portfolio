import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import Toolbar from "./Toolbar";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Model() {
  const model = useGLTF("/diego-portfolio/model1.glb");
  return <primitive object={model.scene} position={[0, 0, 0]} scale={1} />;
}

// Add error handling and loading state
import { Suspense } from "react";

function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="background">
        <div className="gradient"></div>
      </div>
      <Toolbar />

      <header>
        <h1>Diego Fernandes Branco</h1>
        <TypeAnimation
          sequence={[
            "Web Developer",
            1000,
            "Automation Developer",
            1000,
            "gt3rs lover",
            1000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="type-animation"
        />
      </header>

      <section className="hero-section">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 2, 5] }}>
            <Scene />
          </Canvas>
        </div>
      </section>
    </div>
  );
}
useGLTF.preload("/diego-portfolio/model1.glb");

export default App;
