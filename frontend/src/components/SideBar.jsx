import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        Menu
      </h2>

      <ul>

        <li>
          <Link to="/dashboard">
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/clients">
            👥 Clients
          </Link>
        </li>

        <li>
          <Link to="/mealplans">
            🍽 Meal Plans
          </Link>
        </li>

        <li>
          <Link to="/progress">
            📈 Progress
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;