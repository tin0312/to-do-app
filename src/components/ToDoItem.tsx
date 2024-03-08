import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

interface ToDoItemProps {
  task: string;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
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
