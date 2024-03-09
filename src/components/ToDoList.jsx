import React from 'react';
import ToDoTask from './ToDoTask';
import FilterTask from './FilterTask';

export default function ToDoList({ tasks, setTasks }) {
  const task = tasks.map((task) => (
    <ToDoTask
    key={task.id}
    task={task}
    setTasks={setTasks}/>
  ))
  return (
    <div>
    {task}
      <FilterTask />
    </div>
  );
}
