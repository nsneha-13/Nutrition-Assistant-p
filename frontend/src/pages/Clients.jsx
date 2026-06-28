import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Clients() {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data.clients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  const deleteClient = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/clients/${id}`);

      alert("Client Deleted Successfully");

      getClients();
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
        👥 Clients
      </h1>

      <Link to="/add-client">
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
          ➕ Add New Client
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
            <th style={{ padding: "12px" }}>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Goal</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr
              key={client._id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "12px" }}>{client.name}</td>
              <td>{client.age}</td>
              <td>{client.gender}</td>
              <td>{client.height}</td>
              <td>{client.weight}</td>
              <td>{client.goal}</td>

              <td>
                <Link to={`/edit-client/${client._id}`}>
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
                  onClick={() => deleteClient(client._id)}
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

export default Clients;