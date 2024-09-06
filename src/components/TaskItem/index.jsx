import React from 'react';
import './taskItem.css'; 

function TaskItem({ text, completed }) {
    return (
      <div className="taskBox">
        <input type="checkbox" checked={completed} readOnly />
        <p>{completed ? <del>{text}</del> : text}</p>
        <button>🗑️</button>
      </div>
    );
}

export { TaskItem };
