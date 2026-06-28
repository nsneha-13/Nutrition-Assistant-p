import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Progress() {
  const [progress, setProgress] = useState([]);

  const getProgress = async () => {
    try {
      const res = await api.get("/progress");
      setProgress(res.data.progress);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch progress");
    }
  };

  useEffect(() => {
    getProgress();
  }, []);

  const deleteProgress = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this progress record?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/progress/${id}`);
      alert("Progress Deleted Successfully");
      getProgress();
    } catch (error) {
      alert(error.response?.data?.message || "Delete Failed");
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#1f2937",
          marginBottom: "20px",
        }}
      >
        📈 Client Progress
      </h1>

      <Link to="/add-progress">
        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          ➕ Add Progress
        </button>
      </Link>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "white",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead
          style={{
            background: "#2563eb",
            color: "white",
          }}
        >
          <tr>
            <th style={{ padding: "12px" }}>Client</th>
            <th>Weight</th>
            <th>BMI</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {progress.map((item) => (
            <tr
              key={item._id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "12px" }}>
                {item.clientId?.name}
              </td>

              <td>{item.weight} kg</td>

              <td>{item.bmi}</td>

              <td>{item.notes}</td>

              <td>
                <Link to={`/edit-progress/${item._id}`}>
                  <button
                    style={{
                      background: "#16a34a",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteProgress(item._id)}
                  style={{
                    background: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Progress;