import { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!name || !skills) {
      setError("Please fill all details");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      onLogin();
    }, 1200);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
      style={{
        ...container,
        opacity: loading ? 0.5 : 1,
        transition: "0.5s"
      }}
    >
      <h1 style={title}>Xinity Nexus</h1>

      <input
        placeholder="Enter Name"
        style={input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Skills (React, AI...)"
        style={input}
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      {/* 🔥 BUTTON (ENTER KEY ENABLED) */}
      <button type="submit" style={btn}>
        {loading ? "Entering..." : "Enter Platform"}
      </button>

      {error && <p style={errorText}>{error}</p>}

      {/* 🔥 LOADING MESSAGE */}
      {loading && (
        <p style={loadingText}>
          🔐 Verifying user... 🚀 Launching platform...
        </p>
      )}

      <p style={hint}>✨ Enter any details to continue (demo mode)</p>
    </form>
  );
}

/* STYLES */

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "radial-gradient(circle at top, #0a0a1a, #000)",
  color: "white"
};

const title = {
  color: "cyan",
  textShadow: "0 0 15px cyan",
  marginBottom: 20
};

const input = {
  margin: 10,
  padding: 12,
  borderRadius: 10,
  border: "1px solid cyan",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  width: 250,
  outline: "none"
};

const btn = {
  marginTop: 10,
  padding: "12px 20px",
  background: "rgba(0,255,255,0.1)",
  color: "cyan",
  border: "1px solid cyan",
  borderRadius: 10,
  cursor: "pointer",
  transition: "0.3s"
};

const errorText = {
  color: "red",
  marginTop: 10
};

const loadingText = {
  marginTop: 10,
  fontSize: 14,
  opacity: 0.8
};

const hint = {
  marginTop: 10,
  fontSize: 12,
  opacity: 0.6
};