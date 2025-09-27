import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      if (response.ok) {
        // Login successful
        navigate("/questionnaire");
      } else {
        const data = await response.json();
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow " style={{ width: "350px" }}>
        
        <div className="text-center mb-3">
          <img
            src="https://media.licdn.com/dms/image/v2/C510BAQGSvw_fNAPlfg/company-logo_200_200/company-logo_200_200/0/1630626157736/uzwow_logo?e=2147483647&v=beta&t=ZsqOcy-QxgQiVV7XW7JrF_2EdA_a2EGlSvx86RyA1Gg"
            alt="Company Logo"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
        </div>

        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control mb-3"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn-success w-100"
            style={{ backgroundColor: "#357bbc" }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "#04ce4e" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
