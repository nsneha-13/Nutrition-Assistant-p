import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function MealPlans() {
  const [mealPlans, setMealPlans] = useState([]);

  const getMealPlans = async () => {
    try {
      const res = await api.get("/mealplans");
      setMealPlans(res.data.mealPlans);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch meal plans");
    }
  };

  useEffect(() => {
    getMealPlans();
  }, []);

  const deleteMealPlan = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal plan?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/mealplans/${id}`);
      alert("Meal Plan Deleted Successfully");
      getMealPlans();
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
        🍽 Meal Plans
      </h1>

      <Link to="/add-mealplan">
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
          ➕ Add Meal Plan
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
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Snacks</th>
            <th>Calories</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {mealPlans.map((meal) => (
            <tr
              key={meal._id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "12px" }}>{meal.clientId?.name}</td>
              <td>{meal.breakfast}</td>
              <td>{meal.lunch}</td>
              <td>{meal.dinner}</td>
              <td>{meal.snacks}</td>
              <td>{meal.calories}</td>

              <td>
                <Link to={`/edit-mealplan/${meal._id}`}>
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
                  onClick={() => deleteMealPlan(meal._id)}
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

export default MealPlans;