import { ChangeEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import Form from 'react-bootstrap/Form';

interface Task {
  id: string;
  content: string;
  completed: boolean;
}

interface ToDoListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function ToDoList({ tasks, setTasks }: ToDoListProps) {
  const [taskInput, setTaskInput] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTaskInput(e.currentTarget.value);
  }
  function createTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (taskInput) {
        const newTask = {
          id: nanoid(),
          content: taskInput,
          completed: false
        };
        console.log(typeof newTask.id);
        setTasks([newTask, ...tasks]);
        setTaskInput('');
      }
    }
  }

  return (
    <div>
      <Form className="w-100 p-0">
        <Form.Group>
          <Form.Control
            type="text"
            onChange={handleChange}
            onKeyDown={createTask}
            placeholder="Create a new todo..."
          />
        </Form.Group>
      </Form>
    </div>
  );
}
