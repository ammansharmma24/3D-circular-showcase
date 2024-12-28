import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import Effect from "./Effect";
import NavBar from "./components/NavBar";
import { EffectComposer } from "three/examples/jsm/Addons.js";


const App = () => {
  return (
    <>
      <NavBar />
      <Canvas className="" camera={{ fov: 75 }}>
        {/* <OrbitControls></OrbitControls> */}
        <ambientLight></ambientLight>
        <Scene />
        {/* <EffectComposer>

        </EffectComposer> */}
      </Canvas>
    </>
  );
};

export default App;
