import Form from 'react-bootstrap/Form';
import { useState } from 'react';

interface ToDoItemProps {
  task: {
    id: string;
    content: string;
    completed: boolean;
  };
  tasks: Array<{ id: string; content: string; completed: boolean }>;
  setTasks: React.Dispatch<
    React.SetStateAction<Array<{ id: string; content: string; completed: boolean }>>
  >;
}

const ToDoTask: React.FC<ToDoItemProps> = ({ task, tasks, setTasks }) => {
  const [checked, setChecked] = useState(task.completed);

  const toggleCheck = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    setChecked(!checked);
  };

  const labelStyle = {
    textDecoration: checked ? 'line-through' : 'none',
    color: checked ? 'grey' : 'black',
    marginLeft: '2rem'
  };

  return (
    <li className="p-4">
      <Form>
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>{task.content}</span>}
          id={task.id.toString()}
          name="task"
          onChange={toggleCheck}
          checked={checked}
        />
      </Form>
    </li>
  );
};

export default ToDoTask;
