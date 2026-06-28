
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", formData);

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#fef9ff,#eef2ff,#f8fafc)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
          textAlign: "center",
          border: "1px solid #e5e7eb",
        }}
      >
        <h1
          style={{
            color: "#6366f1",
            marginBottom: "10px",
            fontSize: "32px",
          }}
        >
          Nutrition Assistant
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            fontSize: "16px",
          }}
        >
          Create Your Account
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "18px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

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
              border: "1px solid #d1d5db",
              borderRadius: "10px",
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
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            color: "#555",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: "#6366f1",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;

