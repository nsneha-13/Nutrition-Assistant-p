import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddMealPlan() {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);

  const [mealPlan, setMealPlan] = useState({
    clientId: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
    calories: "",
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await api.get("/clients");
      setClients(res.data.clients);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setMealPlan({
      ...mealPlan,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/mealPlans/add", mealPlan);

      alert("Meal Plan Added Successfully");

      navigate("/mealplans");
    } catch (error) {
      alert(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Meal Plan</h1>

      <form onSubmit={handleSubmit}>

        <select
          name="clientId"
          value={mealPlan.clientId}
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
          type="text"
          name="breakfast"
          placeholder="Breakfast"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="lunch"
          placeholder="Lunch"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="dinner"
          placeholder="Dinner"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="snacks"
          placeholder="Snacks"
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="number"
          name="calories"
          placeholder="Calories"
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Add Meal Plan
        </button>

      </form>
    </div>
  );
}

export default AddMealPlan;