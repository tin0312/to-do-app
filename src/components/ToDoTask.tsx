import Form from 'react-bootstrap/Form';
import { useState } from 'react';

interface ToDoItemProps {
  task: string;
}

export default function ToDoTask: React.FC<ToDoItemProps> ({ task }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prevChecked: boolean) => !prevChecked);
  };

  const labelStyle = {
    textDecoration: checked ? 'line-through' : 'none',
    color: checked ? 'grey' : 'black'
  };

  return (
    <li>
      <Form>
        <Form.Check
          type="checkbox"
          label={<span style={{ ...labelStyle, marginLeft: '2rem' }}>{task}</span>}
          id={task}
          name="task"
          onChange={toggleCheck}
        />
      </Form>
    </li>
  );
};

export default ToDoItem;
