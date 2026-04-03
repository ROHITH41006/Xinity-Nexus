export default function Login({ onLogin }) {
  return (
    <div style={container}>
      <h1>Xinity Nexus</h1>
      <input placeholder="Enter Name" style={input} />
      <input placeholder="Skills (React, AI...)" style={input} />
      <button style={btn} onClick={onLogin}>Enter Platform</button>
    </div>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "#0a0a1a",
  color: "white"
};

const input = {
  margin: 10,
  padding: 10,
  borderRadius: 8,
  border: "none",
  width: 200
};

const btn = {
  padding: 10,
  background: "cyan",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};