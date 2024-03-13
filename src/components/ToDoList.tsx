import { useState, useEffect } from 'react';
import ToDoTask from './ToDoTask';
import FilterTask from './FilterTask';

interface ToDoListProps {
  tasks: Array<{ id: string; content: string; completed: boolean }>;
  setTasks: React.Dispatch<
    React.SetStateAction<Array<{ id: string; content: string; completed: boolean }>>
  >;
}

export default function ToDoList({ tasks, setTasks }: ToDoListProps) {
  const [taskLeft, setTaskLeft] = useState(0);

  useEffect(() => {
    const taskLeft = tasks.filter((task) => !task.completed).length;
    setTaskLeft(taskLeft);
  }, [tasks]);

  const task = tasks.map((task) => (
    <ToDoTask key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
  ));
  return (
    <div className="task-list position-relative fs-6">
      {/* A list of task */}
      <section>{task}</section>
      <section className="filter-container d-flex justify-content-between align-items-center p-4">
        {/* Tasks left */}
        <p className="pb-0 mb-0">{taskLeft} tasks left</p>
        {/* Buttons to filter tasks by status */}
        <section className="filter-desktop">
          <FilterTask />
        </section>
        {/* Filter section for mobile */}
        <a>Clear completed</a>
      </section>
      <section className="filter-mobile mt-5">
          <FilterTask />
        </section>
    </div>
  );
}
