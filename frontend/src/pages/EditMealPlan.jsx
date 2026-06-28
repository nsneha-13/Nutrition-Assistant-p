import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditMealPlan() {
  const { id } = useParams();
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
    fetchMealPlan();
  }, []);

  const fetchClients = async () => {
    const res = await api.get("/clients");
    setClients(res.data.clients);
  };

  const fetchMealPlan = async () => {
    const res = await api.get("/mealPlans");

    const selected = res.data.mealPlans.find(
      (m) => m._id === id
    );

    if (selected) {
      setMealPlan({
        clientId: selected.clientId._id,
        breakfast: selected.breakfast,
        lunch: selected.lunch,
        dinner: selected.dinner,
        snacks: selected.snacks,
        calories: selected.calories,
      });
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

  console.log("Sending:", mealPlan);

  try {
    const res = await api.put(`/mealPlans/${id}`, mealPlan);

    console.log(res.data);

    alert("Meal Plan Updated Successfully");

    navigate("/mealplans");
  } catch (error) {
    console.log("ERROR:", error);
    console.log("RESPONSE:", error.response);
    console.log("DATA:", error.response?.data);

    alert(error.response?.data?.message || "Update Failed");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Meal Plan</h1>

      <form onSubmit={handleSubmit}>

        <select
          name="clientId"
          value={mealPlan.clientId}
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
          name="breakfast"
          value={mealPlan.breakfast}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="lunch"
          value={mealPlan.lunch}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="dinner"
          value={mealPlan.dinner}
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="snacks"
          value={mealPlan.snacks}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="calories"
          value={mealPlan.calories}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Meal Plan
        </button>

      </form>
    </div>
  );
}

export default EditMealPlan;