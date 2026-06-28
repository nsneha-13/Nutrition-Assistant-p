import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Dashboard() {
  const [clientsCount, setClientsCount] = useState(0);
  const [mealPlansCount, setMealPlansCount] = useState(0);
  const [progressCount, setProgressCount] = useState(0);

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const clientsRes = await api.get("/clients");
      const mealPlansRes = await api.get("/mealplans");
      const progressRes = await api.get("/progress");

      setClientsCount(clientsRes.data.clients.length);
      setMealPlansCount(mealPlansRes.data.mealPlans.length);
      setProgressCount(progressRes.data.progress.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            backgroundColor: "#f3f4f6",
            minHeight: "100vh",
            padding: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "30px",
              color: "#1f2937",
            }}
          >
            Dashboard
          </h1>

          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "250px",
                background: "#fff",
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <h2 style={{ color: "#2563eb" }}>👥 Total Clients</h2>
              <h1 style={{ marginTop: "15px", fontSize: "42px" }}>
                {clientsCount}
              </h1>
            </div>

            <div
              style={{
                width: "250px",
                background: "#fff",
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <h2 style={{ color: "#16a34a" }}>🍽 Meal Plans</h2>
              <h1 style={{ marginTop: "15px", fontSize: "42px" }}>
                {mealPlansCount}
              </h1>
            </div>

            <div
              style={{
                width: "250px",
                background: "#fff",
                borderRadius: "12px",
                padding: "25px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              }}
            >
              <h2 style={{ color: "#dc2626" }}>📈 Progress</h2>
              <h1 style={{ marginTop: "15px", fontSize: "42px" }}>
                {progressCount}
              </h1>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
              background: "#fff",
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <h2>👋 Welcome</h2>

            <p style={{ marginTop: "15px", fontSize: "18px" }}>
              Welcome to <b>Nutrition Assistant Dashboard</b>.
              <br />
              Manage Clients, Meal Plans and Progress easily using the sidebar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;