import { useState } from "react";

export default function Dashboard() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={container}>
      <h2 style={title}>📊 Dashboard</h2>

      {/* WHY SECTION */}
      <div style={infoBox}>
        <h3>🚀 Why Xinity Nexus?</h3>
        <p>
          Most hackathon teams fail not due to lack of skill, but due to poor
          team formation. Our platform ensures balanced, skill-matched teams
          for higher success rates.
        </p>
      </div>

      {/* CARDS */}
      <div style={grid}>
        <div
          className="card-hover"
          style={card}
          onClick={() => setSelected("webx")}
        >
          🚀 WebX Hackathon
        </div>

        <div
          className="card-hover"
          style={card}
          onClick={() => setSelected("ai")}
        >
          🤖 AI Hackathon
        </div>
      </div>

      {/* 🔥 POPUP */}
      {selected && (
        <div style={overlay}>
          <div style={popup}>
            <h3>
              {selected === "webx"
                ? "🚀 WebX Hackathon"
                : "🤖 AI Hackathon"}
            </h3>

            <p>
              {selected === "webx"
                ? "Focus: Web development, UI/UX, full-stack applications."
                : "Focus: Artificial Intelligence, ML models, automation."}
            </p>

            <p>👥 Team Size: 3–4 members</p>
            <p>⏱ Duration: 24–48 hours</p>

            <button style={joinBtn}>
              Join Hackathon
            </button>

            <button style={closeBtn} onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* AI INSIGHT */}
      <div style={insight}>
        💡 AI Insight: Best match for frontend + AI collaboration
      </div>
    </div>
  );
}

/* STYLES */

const container = { padding: 20, animation: "fade 0.5s" };

const title = {
  color: "cyan",
  textShadow: "0 0 10px cyan"
};

const grid = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};

const card = {
  background: "rgba(255,255,255,0.05)",
  margin: 15,
  padding: 20,
  borderRadius: 12,
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(0,255,255,0.2)",
  cursor: "pointer"
};

const infoBox = {
  background: "rgba(0,255,255,0.05)",
  padding: 20,
  borderRadius: 12,
  marginBottom: 20,
  maxWidth: 600,
  margin: "auto",
  border: "1px solid rgba(0,255,255,0.2)"
};

const insight = {
  marginTop: 20,
  fontSize: 14,
  opacity: 0.9
};

/* 🔥 POPUP STYLES */

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const popup = {
  background: "#14143a",
  padding: 30,
  borderRadius: 15,
  textAlign: "center",
  color: "white",
  width: 300,
  boxShadow: "0 0 20px rgba(0,255,255,0.3)"
};

const joinBtn = {
  marginTop: 15,
  padding: "10px 20px",
  background: "cyan",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};

const closeBtn = {
  marginTop: 10,
  padding: "8px 15px",
  background: "gray",
  border: "none",
  borderRadius: 8,
  cursor: "pointer"
};