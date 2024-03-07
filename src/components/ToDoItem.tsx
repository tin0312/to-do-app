import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function ToDoItem({ task }) {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const labelStyle = {
    textDecoration: checked ? 'line-through' : 'none',
    color: checked ? 'grey' : 'black'
  };

  return (
    <Form>
      <Form.Check
        type="checkbox"
        label={<span style={labelStyle}>{task}</span>}
        id={task}
        name="task"
        onChange={toggleCheck}
      />
    </Form>
  );
}
