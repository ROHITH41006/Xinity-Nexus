import { useState } from "react";

export default function Tracker() {
  const [tasks, setTasks] = useState([
    { name: "Frontend UI", progress: 0 },
    { name: "Backend API", progress: 0 },
    { name: "AI Matching", progress: 0 }
  ]);

  const [running, setRunning] = useState(false);

  const startTracking = () => {
    setRunning(true);

    const interval = setInterval(() => {
      setTasks((prev) =>
        prev.map((task) => {
          let increase = Math.floor(Math.random() * 10) + 5;
          let newProgress = Math.min(task.progress + increase, 100);
          return { ...task, progress: newProgress };
        })
      );
    }, 500);

    // stop after some time
    setTimeout(() => {
      clearInterval(interval);
      setRunning(false);
    }, 4000);
  };

  // 🔥 overall progress
  const overall = Math.round(
    tasks.reduce((a, b) => a + b.progress, 0) / tasks.length
  );

  return (
    <div style={container}>
      <h2 style={title}>📈 Project Tracker</h2>

      <button style={btn} onClick={startTracking}>
        {running ? "Tracking..." : "Start Tracking"}
      </button>

      {/* 🔥 TASK LIST */}
      {tasks.map((task, i) => (
        <div key={i} style={taskCard} className="card-hover">
          <h4>{task.name}</h4>

          <div style={bar}>
            <div style={{ ...fill, width: `${task.progress}%` }}></div>
          </div>

          <p>
            {task.progress}% —{" "}
            {task.progress === 100 ? "✅ Completed" : "⏳ In Progress"}
          </p>
        </div>
      ))}

      {/* 🔥 OVERALL */}
      <div style={overallBox}>
        <h3>Overall Progress: {overall}%</h3>
      </div>

      {overall >= 90 && (
        <p style={success}>🚀 Project almost ready for submission!</p>
      )}
    </div>
  );
}

/* STYLES */

const container = {
  padding: 20,
  textAlign: "center",
  animation: "fade 0.5s"
};

const title = {
  color: "cyan",
  textShadow: "0 0 10px cyan"
};

const btn = {
  margin: 15,
  padding: "12px 20px",
  borderRadius: 10,
  background: "rgba(0,255,255,0.1)",
  color: "cyan",
  border: "1px solid cyan",
  cursor: "pointer"
};

const taskCard = {
  background: "rgba(255,255,255,0.05)",
  margin: "15px auto",
  padding: 15,
  borderRadius: 12,
  width: "60%",
  backdropFilter: "blur(10px)"
};

const bar = {
  height: 10,
  background: "#222",
  borderRadius: 10,
  marginTop: 10,
  overflow: "hidden"
};

const fill = {
  height: "100%",
  background: "cyan",
  transition: "0.5s"
};

const overallBox = {
  marginTop: 20,
  padding: 15,
  borderRadius: 10,
  background: "rgba(0,255,255,0.1)"
};

const success = {
  marginTop: 10,
  color: "cyan",
  fontWeight: "bold"
};