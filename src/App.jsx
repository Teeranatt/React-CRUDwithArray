import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    tasksname: '',
    detail: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [valuex, setValuex] = useState(0);

  useEffect(() => {
    console.log("result: ", tasks);
    console.log(valuex);
  }, [tasks, valuex]);


  const addTask = () => {
    if (newTask.tasksname.trim() !== '' && newTask.detail.trim() !== '') {
      if (tasks.some(task => task.tasksname === newTask.tasksname)) {
        //console.log("ข้อมูลซ้ำ:", newTask.tasksname);
        alert('ชื่อต้องไม่ซ้ำ');
      } else {
        setTasks([...tasks, newTask]);
        setNewTask({
          tasksname: '',
          detail: '',
        });
      }

    } else {
      alert('ข้อความต้องไม่ว่าง');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setValuex(1);
    setNewTask({
      tasksname: tasks[index].tasksname,
      detail: tasks[index].detail,
    });
  };

  const editIndexx = () => {
    setEditIndex(null);
    setValuex(0);
  };

  const updateTask = () => {
    if (newTask.tasksname.trim() !== '' && newTask.detail.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setNewTask({ tasksname: '', detail: '' });
      setValuex(0);
    } else {
      alert('รายละเอียดงานต้องไม่ว่าง');
    }
  };

  return (
    <div className="App">
      <h1>รายการสิ่งที่ต้องทำ</h1>

      <div>
        <input
          type="text"
          placeholder="ชื่องาน"
          value={newTask.tasksname}
          onChange={(e) => setNewTask({ ...newTask, tasksname: e.target.value })}
        />
        <input
          type="text"
          placeholder="รายละเอียดงาน"
          value={newTask.detail}
          onChange={(e) => setNewTask({ ...newTask, detail: e.target.value })}
        />
        {valuex === 0 ? (
          <button onClick={addTask}>เพิ่ม</button>
        ) : (<button onClick={updateTask}>บันทึก</button>)}
      </div>

      {tasks.length === 0 ? (
        <p>ไม่มีงานที่ต้องทำ</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div style={{ width: 350, backgroundColor: '#3366ae', padding: 10, borderRadius: 5, margin: 7 }}>
                <strong>ชื่อ:</strong> {task.tasksname}, <br />
                <strong>รายละเอียด:</strong> {task.detail} <br />

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }}
                >
                  {editIndex === index ? (
                    <>
                      <button onClick={updateTask}>บันทึก</button>
                      <button onClick={editIndexx}>ยกเลิก</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => editTask(index)}>แก้ไข</button>
                      <button onClick={() => deleteTask(index)}>ลบ</button>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
