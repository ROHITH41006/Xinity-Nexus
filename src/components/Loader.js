export default function Loader() {
  return (
    <div style={container}>
      <h1>Xinity Nexus</h1>
      <p>Initializing AI Engine...</p>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  background: "#0a0a1a",
  color: "cyan"
};