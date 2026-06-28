import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditProgress() {
  const { id } = useParams();
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
    fetchProgress();
  }, []);

  const fetchClients = async () => {
    const res = await api.get("/client");
    setClients(res.data.clients);
  };

  const fetchProgress = async () => {
    const res = await api.get("/progress");

    const selected = res.data.progress.find(
      (item) => item._id === id
    );

    if (selected) {
      setProgress({
        clientId: selected.clientId._id,
        weight: selected.weight,
        bmi: selected.bmi,
        notes: selected.notes,
      });
    }
  };

  const handleChange = (e) => {
    setProgress({
      ...progress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/progress/${id}`, progress);

      alert("Progress Updated Successfully");

      navigate("/progress");
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Progress</h1>

      <form onSubmit={handleSubmit}>

        <select
          name="clientId"
          value={progress.clientId}
          onChange={handleChange}
        >
          {clients.map((client) => (
            <option
              key={client._id}
              value={client._id}
            >
              {client.name}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="number"
          name="weight"
          value={progress.weight}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          step="0.1"
          name="bmi"
          value={progress.bmi}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="notes"
          value={progress.notes}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Progress
        </button>

      </form>
    </div>
  );
}

export default EditProgress;