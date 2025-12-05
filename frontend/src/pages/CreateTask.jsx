import React, { useState } from "react";
import api from "../api"; 
import axios from "axios";

function CreateTask() {
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("To Do");

  const createTask = async () => {
    try {
      await api.post(
            "/api/tasks",
        { title, description, priority, status },
        { headers: { Authorization: token } }
      );

      alert("Task created");
      window.location.href = "/dashboard";
    } catch (error) {
      alert("Failed to create task");
    }
  };

  return (
    <div style={{ margin: 50 }}>
      <h2>Create Task</h2>

      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <br />

      <input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <label>Priority: </label>
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <br />

      <label>Status: </label>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <br />

      <button onClick={createTask}>Create</button>
    </div>
  );
}

export default CreateTask;
