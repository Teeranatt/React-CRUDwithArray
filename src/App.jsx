import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    tasksname: '',
    detail: '',
  });
  const [a, setA] = useState([
    {
      name: 'john',
      age: '12'
    },
    {
      name: 'joe',
      age: '13'
    },
  ])
  useEffect(() => {
    console.log("result: ", tasks);

    console.log("log test ==>", [...a]);

  }, [])

  //ฟังก์ชันเพิ่ม จะเช็ค input ที่รับเข้ามาก่อนว่าต้องไม่ว่างนะ แล้วทำการ setTask โดยความหมายของ [...tasks, newTask] คือการใช้ spread operator เพื่อคักลอกค่าใน task ทั้งหมด แล้วทำการเพิ่ม newTask ไปยังท้ายสุดของ array ตัวใหม่ที่่จะเก็บใน array ชื่อ task 
  const addTask = () => {
    if (newTask.tasksname.trim() !== '' && newTask.detail.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({
        tasksname: '',
        detail: '',
      });
    }
    else {
      alert('ข้อความต้องไม่ว่าง')
    }
  };

  //
  const deleteTask = (index) => {
    //ให่ updatedTasks มีค่าเท่ากับ task (ตามที่เข้าใจคือ spread operator คือการนำเอาจาก array โดยที่ไม่ให้มีเครื่องหมาย array ==> [])
    const updatedTasks = [...tasks];
    //คัดลอกค่าก่อน ไม่ทำกับตัวแปล tasks โดยตรง เพื่อป้องกันข้อผิดพลาด

    //จากนั้นให้ทำการลบในตัวแปร updatedTasks แทน แล้วค่อยเอาค่าที่ลบแล้วไปอัพเดตใน tasks อีกที
    //โดยการลบจะใช้ method ==> splice(start, deleteCount) 
    //อธิบายคือ updatedTasks เรียกใช้ .splice(index, 1) ถ้า index ที่ถูกส่งเข้ามาคือ 0 ก็คือ ลบ index ที่ 0 ออกไป 1 ตัวนับจาก 0 โดยรวมตัวมันเอง นั้นก็คือ ถ้า index = 0,deleteCount = 1 ก็คือตำแหน่งที่ 0 ลบออกไป 1 ตัว โดยนับจาก 0 ; ถ้า index = 5,deleteCount = 3 ==> .splice(5,3) จะทำการลบ index ที่ 5 นับไปอีก 3 ตัว โดยรวม 5 นั่นคือ ลบ index ที่ 5,6,7 จบปิ๊งงง
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    // console.log('index คือ',index);
  };

  const editTask = (data) => {
    const changTask = ""
  }

  const test = () => {
    const [a, setA] = useState([
      {
        name: 'john',
        age: '12'
      },
      {
        name: 'joe',
        age: '13'
      },
    ])
    console.log("log test ==>", [...a]);
  }
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