import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddProgress() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);

  const [progress, setProgress] = useState({
    clientId: "",
    weight: "",
    bmi: "",
    notes: "",
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await api.get("/clients");
    setClients(res.data.clients);
  };

  const handleChange = (e) => {
    setProgress({
      ...progress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/progress/add", progress);

    alert("Progress Added Successfully");

    navigate("/progress");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Progress</h1>

      <form onSubmit={handleSubmit}>
        <select
          name="clientId"
          value={progress.clientId}
          onChange={handleChange}
          required
        >
          <option value="">Select Client</option>

          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="number"
          name="weight"
          placeholder="Weight"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          step="0.1"
          name="bmi"
          placeholder="BMI"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
          required
        />

        <br /><br />

        <button>Add Progress</button>
      </form>
    </div>
  );
}

export default AddProgress;