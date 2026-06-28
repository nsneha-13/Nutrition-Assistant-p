import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import MealPlans from "./pages/MealPlans";
import Progress from "./pages/Progress";
import AddClient from "./pages/AddClient";
import EditClient from "./pages/EditClient";
import AddMealPlan from "./pages/AddMealPlan";
import EditMealPlan from "./pages/EditMealPlan";
import AddProgress from "./pages/AddProgress";
import EditProgress from "./pages/EditProgress";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/mealplans" element={<MealPlans />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/add-client" element={<AddClient />} />
        <Route path="/edit-client/:id" element={<EditClient />} />
        <Route path="/add-mealplan" element={<AddMealPlan />} />
        <Route path="/edit-mealplan/:id" element={<EditMealPlan />} />
        <Route path="/add-progress" element={<AddProgress />} />
        <Route path="/edit-progress/:id" element={<EditProgress />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;