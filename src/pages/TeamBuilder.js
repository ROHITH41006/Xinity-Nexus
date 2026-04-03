import { useState } from "react";

const names = ["Mani", "Vishnu", "Harish", "Rahul", "Amit", "Kiran"];
const skills = ["React", "Node", "UI/UX", "AI", "Backend", "Python"];

export default function TeamBuilder() {
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState([]);

  const generateTeam = () => {
    setLoading(true);

    setTimeout(() => {
      const shuffledNames = [...names].sort(() => 0.5 - Math.random());

      const newTeam = [];

      for (let i = 0; i < 3; i++) {
        const randomSkill =
          skills[Math.floor(Math.random() * skills.length)];
        const match = Math.floor(Math.random() * 20) + 80;

        newTeam.push({
          name: shuffledNames[i],
          skills: randomSkill,
          match
        });
      }

      setTeam(newTeam);
      setLoading(false);
    }, 1200);
  };

  const bestMatch = team.length
    ? Math.max(...team.map((t) => t.match))
    : 0;

  const avgMatch = team.length
    ? Math.round(team.reduce((a, b) => a + b.match, 0) / team.length)
    : 0;

  return (
    <div style={container}>
      <h2 style={title}>🤖 AI Team Builder</h2>

      {/* 🔥 SYSTEM STATUS */}
      <p style={status}>⚡ System Status: AI Engine Active</p>

      <button style={btn} onClick={generateTeam}>
        {loading ? "Generating Smart Team..." : "Generate Team"}
      </button>

      {/* 🔥 AI THINKING EFFECT */}
      {loading && (
        <p className="loading">
          🤖 Analyzing skills...
          <br />
          🔍 Matching compatibility...
          <br />
          ⚡ Optimizing team balance...
        </p>
      )}

      {team.length > 0 && (
        <p style={stats}>
          ⚡ Avg Match: {avgMatch}% | 🎯 Efficiency: High
        </p>
      )}

      <div style={grid}>
        {team.map((t, i) => {
          const role =
            t.skills === "React" || t.skills === "UI/UX"
              ? "Frontend"
              : t.skills === "Node" || t.skills === "Backend"
              ? "Backend"
              : "AI";

          return (
            <div
              key={i}
              className="card-hover"
              style={{
                ...card,
                border:
                  t.match === bestMatch
                    ? "2px solid cyan"
                    : "1px solid rgba(0,255,255,0.2)",
                boxShadow:
                  t.match === bestMatch
                    ? "0 0 20px cyan"
                    : "0 0 8px rgba(0,255,255,0.2)"
              }}
            >
              <h3 style={name}>
                {t.name}
                {t.match === bestMatch && (
                  <span style={badge}>⭐ Best Match</span>
                )}
              </h3>

              <p style={skill}>{t.skills}</p>

              <span style={tag}>{role}</span>

              <p style={match}>Match: {t.match}%</p>

              <p style={confidence}>AI Confidence: High</p>

              <div style={bar}>
                <div style={{ ...fill, width: `${t.match}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔥 FINAL DECISION LINE */}
      {team.length > 0 && (
        <p style={decision}>
          💡 Final AI Decision: This team has the highest success probability.
        </p>
      )}
    </div>
  );
}

/* STYLES */

const container = { padding: 20, animation: "fade 0.5s" };

const title = {
  color: "cyan",
  textShadow: "0 0 10px cyan"
};

const status = {
  fontSize: 12,
  opacity: 0.7,
  marginBottom: 10
};

const stats = {
  marginTop: 10,
  fontSize: 14,
  opacity: 0.9
};

const decision = {
  marginTop: 20,
  color: "cyan",
  fontWeight: "bold"
};

const btn = {
  margin: 15,
  padding: "12px 20px",
  borderRadius: 12,
  background: "rgba(0,255,255,0.1)",
  color: "cyan",
  border: "1px solid cyan",
  cursor: "pointer"
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
  borderRadius: 15,
  width: 220,
  backdropFilter: "blur(12px)"
};

const name = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const skill = { opacity: 0.8 };
const match = { fontWeight: "bold" };
const confidence = { fontSize: 12, opacity: 0.7 };

const badge = {
  background: "cyan",
  color: "black",
  padding: "3px 8px",
  borderRadius: 6,
  marginLeft: 10
};

const tag = {
  background: "rgba(0,255,255,0.2)",
  padding: "4px 10px",
  borderRadius: 20,
  fontSize: 12,
  marginTop: 5,
  display: "inline-block"
};

const bar = {
  height: 8,
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