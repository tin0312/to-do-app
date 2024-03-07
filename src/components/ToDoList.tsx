import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);

  function saveTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTask = e.currentTarget.value;
      if (newTask !== '') {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        e.currentTarget.value = '';
      }
    }
  }
  const taskList = tasks.map((task, index) => <ToDoItem key={index} task={task} />);
  return (
    <Container>
      <Row className="task-input-form d-flex justify-content-center">
        <Col>
          <Form.Group>
            <Form.Label>TO DO</Form.Label>
            <Form>
              <Form.Control type="text" onKeyDown={saveTask} placeholder="Create a task..." />
            </Form>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>{taskList}</Col>
      </Row>
    </Container>
  );
}
