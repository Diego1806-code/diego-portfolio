import { Canvas } from "@react-three/fiber";
import { TypeAnimation } from "react-type-animation";
import Scene from "../components/Scene";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
