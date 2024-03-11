import React from 'react';
import ToDoTask from './ToDoTask';
import FilterTask from './FilterTask';

export default function ToDoList({ tasks, setTasks }) {
  const task = tasks.map((task) => <ToDoTask key={task.id} task={task} setTasks={setTasks} />);
  return (
    <div className="task-list">
      {/* A list of task */}
      <section className="pb-5">{task}</section>
      <section>
        {/* Buttons to filter tasks by status */}
        <FilterTask />
      </section>
    </div>
  );
}
