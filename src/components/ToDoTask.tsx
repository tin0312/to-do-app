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
  const [checked, setChecked] = useState(task.completed);

  const toggleCheck = () => {
    setChecked((prevStatus: boolean) => !prevStatus);
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
          checked={checked}
        />
      </Form>
    </li>
  );
};

export default ToDoTask;
