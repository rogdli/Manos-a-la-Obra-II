import React from 'react';
import { TaskItem } from '../TaskItem';

function TaskList() {
    return (
      <>
        <TaskItem text="Task N" completed={false} />
        <TaskItem text="Task N-1" completed={false} />
        <TaskItem text="Completed Task N-2" completed={true} />
        <TaskItem text="Task K" completed={false} />
        <TaskItem text="Task 2" completed={false} />
        <TaskItem text="Completed Task 1" completed={true} />
      </>
    );
  }

  export {TaskList};