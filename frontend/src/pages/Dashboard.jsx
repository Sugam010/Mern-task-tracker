import React, { useEffect, useState } from "react";
import api from "../api";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await api.get("/api/tasks", {
        headers: {
          Authorization: token,
        },
      });
      setTasks(res.data);
    } catch (error) {
      alert("Please login again");
      window.location.href = "/";
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/api/tasks/${id}`, {

        headers: { Authorization: token },
      });
      fetchTasks();
    } catch (error) {
      alert("Failed to delete");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === "" || t.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ margin: 50 }}>
      <h2>Your Tasks</h2>

      <button onClick={() => (window.location.href = "/create")}>
        Create New Task
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        style={{ marginLeft: 10 }}
      >
        Logout
      </button>

      <br /><br />

      <input
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />

      <label>Filter by Status: </label>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <br /><br />

      {filteredTasks.map((task) => (
        <div key={task._id} style={{ padding: 10, border: "1px solid black", marginBottom: 10 }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: <b>{task.priority}</b></p>
          <p>Status: <b>{task.status}</b></p>

          <button onClick={() => (window.location.href = `/edit/${task._id}`)}>
            Edit
          </button>

          <button onClick={() => deleteTask(task._id)} style={{ marginLeft: 10 }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
