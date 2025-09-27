import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // localStorage.setItem("user", JSON.stringify({ username: form.username, password: form.password }));
    // alert("Registration successful! Please login.");
    navigate("/questionnaire");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow " style={{width:'350px'}}>
         <div className="text-center mb-3">
          <img
            src="https://media.licdn.com/dms/image/v2/C510BAQGSvw_fNAPlfg/company-logo_200_200/company-logo_200_200/0/1630626157736/uzwow_logo?e=2147483647&v=beta&t=ZsqOcy-QxgQiVV7XW7JrF_2EdA_a2EGlSvx86RyA1Gg"
            alt="Company Logo"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
        </div>
        <h3 className="text-center mb-3">Register</h3>
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="form-control mb-3"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary w-100" style={{backgroundColor:"#0a1a48"}}>
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <span style={{ cursor: "pointer", color: "#b42c5c" }} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
