import Form from 'react-bootstrap/Form';
import { useState } from 'react';

interface ToDoItemProps {
  task: {
    id: number;
    content: string;
    completed: boolean;
  };
}

const ToDoTask: React.FC<ToDoItemProps> = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prevChecked: boolean) => !prevChecked);
  };

  const labelStyle = {
    textDecoration: checked ? 'line-through' : 'none',
    color: checked ? 'grey' : 'black',
    marginLeft: '2rem'
  };

  return (
    <li>
      <Form>
        <Form.Check
          type="checkbox"
          label={<span style={labelStyle}>{task.content}</span>}
          id={task.id.toString()}
          name="task"
          onChange={toggleCheck}
        />
      </Form>
    </li>
  );
};

export default ToDoTask;
