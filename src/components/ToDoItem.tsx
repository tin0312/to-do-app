import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function ToDoItem({ task }) {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => setChecked(!checked);

  const labelStyle = {
    textDecoration: checked ? 'line-through' : 'none'
  };

  return (
    <Form.Check
      type="radio"
      label={<span style={labelStyle}>{task}</span>}
      id={task}
      name="task"
      onChange={toggleCheck}
    />
  );
}


