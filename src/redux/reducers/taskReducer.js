// src/redux/reducers/taskReducer.js
import { ADD_TASK, DELETE_TASK } from '../action/taskActions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    case DELETE_TASK:
      const filteredTasks = state.tasks.filter((_, index) => index !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return {
        ...state,
        tasks: filteredTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
