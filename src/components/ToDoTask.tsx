import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Draggable } from 'react-beautiful-dnd';

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
  index: number;
}

const ToDoTask: React.FC<ToDoItemProps> = ({ task, tasks, setTasks, index }) => {
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
    <Draggable draggableId={task.id} index={index} key={task.id}>
      {(provided) => (
        <li
          className="p-4"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
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
      )}
    </Draggable>
  );
};

export default ToDoTask;
