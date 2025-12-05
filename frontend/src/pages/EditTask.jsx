import React, { useEffect, useState } from "react";
import api from "../api"; 
import { useParams } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [task, setTask] = useState(null);

  const fetchTask = async () => {
    const res = await api.get("/api/tasks", {
      headers: { Authorization: token },
    });

    const found = res.data.find((t) => t._id === id);
    setTask(found);
  };

  const updateTask = async () => {
    try {
      await api.put(
        `/api/tasks/${id}`,
        {
          title: task.title,
          description: task.description,
          priority: task.priority,
          status: task.status,
        },
        { headers: { Authorization: token } }
      );

      alert("Task updated");
      window.location.href = "/dashboard";
    } catch (error) {
      alert("Update failed");
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  if (!task) return <div>Loading...</div>;

  return (
    <div style={{ margin: 50 }}>
      <h2>Edit Task</h2>

      <input
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <br />

      <input
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <br />

      <label>Priority: </label>
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <br />

      <label>Status: </label>
      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <br />

      <button onClick={updateTask}>Update</button>
    </div>
  );
}

export default EditTask;
