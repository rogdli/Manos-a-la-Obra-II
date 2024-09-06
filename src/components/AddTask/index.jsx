import React from 'react';
import './AddTask.css';

function AddTask() {
    return (
      <div className="textBox">
        <input type="text"></input>
        <button className="addButton">Add</button>
      </div>
    );
  }

export {AddTask}