import { useState } from "react";

// 🔥 Data pools
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
          match: match
        });
      }

      setTeam(newTeam);
      setLoading(false);
    }, 1200);
  };

  // 🔥 Best match logic
  const bestMatch = team.length
    ? Math.max(...team.map((t) => t.match))
    : 0;

  return (
    <div style={container}>
      <h2 style={title}>🤖 AI Team Builder</h2>

      <button style={btn} onClick={generateTeam}>
        Generate Team
      </button>

      {loading && (
        <p style={loadingText}>
          🔄 AI analyzing skills and compatibility...
        </p>
      )}

      <div style={grid}>
        {team.map((t, i) => (
          <div
            key={i}
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

            <p style={match}>Match: {t.match}%</p>

            {/* 🔥 Progress Bar */}
            <div style={bar}>
              <div
                style={{
                  ...fill,
                  width: `${t.match}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🔥 STYLES */

const container = {
  padding: 20,
  animation: "fade 0.5s"
};

const title = {
  color: "cyan",
  textShadow: "0 0 10px cyan"
};

const loadingText = {
  marginTop: 10,
  opacity: 0.8
};

const btn = {
  margin: 15,
  padding: "12px 20px",
  borderRadius: 12,
  background: "rgba(0,255,255,0.1)",
  color: "cyan",
  border: "1px solid cyan",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  transition: "0.3s"
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
  color: "white",
  backdropFilter: "blur(12px)",
  transition: "0.3s"
};

const name = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const skill = {
  opacity: 0.8
};

const match = {
  fontWeight: "bold",
  marginTop: 5
};

const badge = {
  color: "black",
  background: "cyan",
  padding: "3px 8px",
  borderRadius: 6,
  fontSize: 12,
  marginLeft: 10
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
  borderRadius: 10,
  transition: "0.5s"
};