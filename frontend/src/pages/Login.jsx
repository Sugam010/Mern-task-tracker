import React, { useState } from "react";
import api from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br /><br />
      <a href="/signup">Create Account</a>
    </div>
  );
}

export default Login;
