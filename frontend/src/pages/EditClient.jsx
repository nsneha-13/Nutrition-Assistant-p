import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    goal: "",
  });

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async () => {
    try {
      const res = await api.get("/clients");
      const selectedClient = res.data.clients.find(
        (c) => c._id === id
      );

      if (selectedClient) {
        setClient(selectedClient);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };

 const updateClient = async (e) => {
  e.preventDefault();

  try {
    await api.put(`/clients/${id}`, client);

    alert("Client Updated Successfully");

    navigate("/clients");
  } catch (error) {
    console.log(error.response?.data);

    alert(error.response?.data?.message || "Update Failed");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Client</h1>

      <form onSubmit={updateClient}>
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          value={client.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="gender"
          value={client.gender}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="height"
          value={client.height}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="weight"
          value={client.weight}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="goal"
          value={client.goal}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Update Client</button>
      </form>
    </div>
  );
}

export default EditClient;