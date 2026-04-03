export default function Tracker() {
  return (
    <div>
      <h2>📊 Project Tracker</h2>

      <div style={card}>
        <p>Progress: 70%</p>
        <div style={bar}>
          <div style={fill}></div>
        </div>
      </div>

      <div style={card}>
        <h3>Tasks</h3>
        <p>✔ UI Design</p>
        <p>✔ Backend Setup</p>
        <p>⏳ AI Integration</p>
      </div>

      <div style={card}>
        <h3>Leaderboard</h3>
        <p>1. Team Alpha</p>
        <p>2. BYTE FORCE 🚀</p>
      </div>
    </div>
  );
}

const card = {
  background: "#14143a",
  margin: 10,
  padding: 20,
  borderRadius: 10,
  color: "white"
};

const bar = {
  height: 20,
  background: "#333",
  borderRadius: 10,
  overflow: "hidden"
};

const fill = {
  height: "100%",
  width: "70%",
  background: "cyan"
};