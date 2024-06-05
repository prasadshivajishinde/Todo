// src/components/TaskList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/action/taskActions';
import { FaTrash } from 'react-icons/fa';

const getPriorityClass = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-danger text-white';
    case 'Medium':
      return 'bg-warning text-white';
    case 'Low':
      return 'bg-success text-white';
    default:
      return 'bg-secondary text-white';
  }
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list mt-4">
      {tasks.map((task, index) => (
        <div
          key={index} 
          className={ `  <task-item list-group-item d-flex justify-content-end align-items-center m-3 ${getPriorityClass(task.priority)}`}
        >
          <h4>{task.task}</h4>
          <br />
          <button onClick={() => dispatch(deleteTask(index))} className="btn  w-25 btn-link  p-0">
            <FaTrash style={{marginRight:'0px'}} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
