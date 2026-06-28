import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log("Full Error:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Cannot connect to server");
      }
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#4f46e5,#2563eb)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "#fff",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "10px",
          }}
        >
          Nutrition Assistant
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Login to Continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "18px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            color: "#555",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;