import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddClient() {
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
  });

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(client);

    try {
      // Updated Route
      await api.post("/clients/add", client);

      alert("Client Added Successfully");

      navigate("/clients");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed to Add Client");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Client</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={client.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={client.age}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={client.gender}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={client.height}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={client.weight}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={client.goal}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default AddClient;