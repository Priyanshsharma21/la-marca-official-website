import Spline from "@splinetool/react-spline";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: "0.04",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app w-full">
      <Navbar />
      <div className="canvas-cont">
        <Spline scene="https://prod.spline.design/IjWhA22Tt8qTS6dz/scene.splinecode" />
      </div>
      <Hero />
    </div>
  );
}

export default App;
