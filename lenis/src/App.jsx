import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div style={{ height: "100vh", background: "black" }}>Section 1</div>
      <div style={{ height: "100vh", background: "white" }}>Section 2</div>
      <div style={{ height: "100vh", background: "purple" }}>Section 3</div>
    </>
  );
}

export default App;
