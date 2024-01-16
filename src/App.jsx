import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    tasksname: '',
    detail: '',
  });

  useEffect(() => {
    console.log("result: ", tasks);
  })

  const addTask = () => {
    if (newTask.tasksname.trim() !== '' && newTask.detail.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({
        tasksname: '',
        detail: '',
      });
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>

      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.tasksname}
          onChange={(e) => setNewTask({ ...newTask, tasksname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Details"
          value={newTask.detail}
          onChange={(e) => setNewTask({ ...newTask, detail: e.target.value })}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>Name:</strong> {task.tasksname}, <strong>Details:</strong> {task.detail}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;