import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Signup Successful!");
      window.location.href = "/";
    } catch (err) {
      alert("Error: " + err.response.data.message);
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
