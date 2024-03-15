import { ChangeEvent, FormEvent, useState } from 'react';
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
  appMode: string;
}

export default function ToDoList({ tasks, setTasks, appMode }: ToDoListProps) {
  const [taskInput, setTaskInput] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTaskInput(e.currentTarget.value);
  }

  function createTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent form submission
    if (taskInput) {
      const newTask = {
        id: nanoid(),
        content: taskInput.trim(),
        completed: false
      };
      setTasks([newTask, ...tasks]);
      setTaskInput('');
    }
  }

  return (
    <div>
      <Form className="w-100 p-0" onSubmit={createTask}>
        <Form.Group>
          <Form.Control
            className={`${appMode}-form`}
            type="text"
            value={taskInput}
            onChange={handleChange}
            placeholder="Create a new todo..."
          />
        </Form.Group>
      </Form>
    </div>
  );
}
