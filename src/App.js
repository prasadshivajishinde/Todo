
import './App.css';
// src/App.js
import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';


const App = () => {
  return (


    <>
       <div className=" app container">
        <div className="col-md-12">
          <div className="row">
            <h1 className='text-center '>Todo App</h1>
            <TaskInput />
            <br />
            <TaskList />
          </div>
        </div>
       </div>
    </>
  );
};

export default App;



