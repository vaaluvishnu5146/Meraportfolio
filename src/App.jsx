import { useRef } from "react";

export default function App() {
  const page = useRef(null);

  function handleColorChange(type = "green") {
    page.current.style.background = type;
  }
  return (
    <section ref={page} className="container" style={{ height: "90vh" }}>
      <h1>Signup</h1>
      <button onClick={() => handleColorChange("green")}>Green</button>
      <button onClick={() => handleColorChange("blue")}>Blue</button>
      <button onClick={() => handleColorChange("yellow")}>Yellow</button>
    </section>
  );
}
