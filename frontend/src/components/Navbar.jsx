import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="logo">🥗 Nutrition Assistant</div>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;