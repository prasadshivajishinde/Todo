// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action/taskActions'

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ task, priority }));
      setTask('');
    }
  };

  return (
    <div className="task-input card p-3 shadow-sm">
      <h5 className="card-title">Add a new task</h5>
      <div className="mb-3">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-select"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <button
        onClick={handleAddTask}
        className="btn btn-primary"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
