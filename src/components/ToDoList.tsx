import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import Form from 'react-bootstrap/Form';

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);

  function saveTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let newTask = e.currentTarget.value;
      if (newTask !== '') {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        e.currentTarget.value = '';
      }
    }
  }

  return (
    <div>
      <Form className="">
        <Form.Group className="mb-3">
          <Form.Control type="text" onKeyDown={saveTask} placeholder="Create a task..." />
        </Form.Group>
      </Form>
      <section>
        {tasks.map((task, index) => (
          <ToDoItem key={index} task={task} />
        ))}
      </section>
    </div>
  );
}
