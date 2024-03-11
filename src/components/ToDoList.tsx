import ToDoTask from './ToDoTask';
import FilterTask from './FilterTask';

interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface ToDoListProps {
  tasks: Task[];
}

export default function ToDoList({ tasks }: ToDoListProps) {
  const task = tasks.map((task) => <ToDoTask key={task.id} task={task} />);
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
