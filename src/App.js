import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TeamBuilder from "./pages/TeamBuilder";
import Tracker from "./pages/Tracker";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  // 🔥 Loader effect
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  if (loading) return <Loader />;

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div style={appStyle}>
      <h1 style={title}>Xinity Nexus</h1>

      {/* 🔥 Navigation */}
      <div style={nav}>
        <button style={btn} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button style={btn} onClick={() => setPage("team")}>
          Team Builder
        </button>

        <button style={btn} onClick={() => setPage("tracker")}>
          Tracker
        </button>
      </div>

      {/* 🔥 Page Content with Animation */}
      <div style={content}>
        {page === "dashboard" && <Dashboard />}
        {page === "team" && <TeamBuilder />}
        {page === "tracker" && <Tracker />}
      </div>
    </div>
  );
}

/* 🔥 STYLES */

const appStyle = {
  minHeight: "100vh",
  textAlign: "center",
  padding: 20,
  animation: "fade 0.6s"
};

const title = {
  padding: 20,
  color: "cyan",
  textShadow: "0 0 15px cyan"
};

const nav = {
  marginBottom: 20
};

const content = {
  animation: "fade 0.5s"
};

const btn = {
  margin: 10,
  padding: "12px 20px",
  borderRadius: 12,
  background: "rgba(0,255,255,0.1)",
  color: "cyan",
  border: "1px solid cyan",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  transition: "0.3s"
};

export default App;