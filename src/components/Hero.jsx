import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1>Hi, I'm Shiv</h1>
        <p>Frontend Developer</p>
      </div>

      <div style={{ flex: 1, height: "600px" }}>
        <ThreeScene />
      </div>
    </section>
  );
}